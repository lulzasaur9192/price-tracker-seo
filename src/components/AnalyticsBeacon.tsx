'use client';

import { useEffect } from 'react';

const BEACON_URL = 'https://rapidapi-backend-production.up.railway.app/seo/beacon';

function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  let sid = sessionStorage.getItem('_pt_sid');
  if (!sid) {
    sid = Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem('_pt_sid', sid);
  }
  return sid;
}

function getUTM(): Record<string, string | null> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
  };
}

function sendBeacon(events: Record<string, unknown>[]) {
  try {
    const body = JSON.stringify({ events });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(BEACON_URL, body);
    } else {
      fetch(BEACON_URL, { method: 'POST', body, headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(() => {});
    }
  } catch {
    // Never crash on analytics
  }
}

export default function AnalyticsBeacon() {
  useEffect(() => {
    const sid = getSessionId();
    const utm = getUTM();
    const page = window.location.pathname;

    // Track pageview
    sendBeacon([{
      type: 'pageview',
      page,
      referrer: document.referrer || '',
      sid,
      ...utm,
    }]);

    // Track CTA clicks — any link to rapidapi.com
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.href;
      if (!href.includes('rapidapi.com')) return;

      sendBeacon([{
        type: 'click',
        page,
        target: href,
        cta_type: 'rapidapi',
        sid,
      }]);
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
