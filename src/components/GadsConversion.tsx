'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GadsConversion() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href*="rapidapi.com"]');
      if (link && window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18042306771/mqIqCLWNoJAcENOBn5tD',
          value: 1.0,
          currency: 'USD',
        });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return null;
}
