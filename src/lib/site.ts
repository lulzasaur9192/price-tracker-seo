// Single source of truth for the site's public URL.
// The site is deployed to GitHub Pages under the /price-tracker-seo basePath,
// so SITE_URL includes that subpath. Override with NEXT_PUBLIC_SITE_URL
// (e.g. when moving to a custom domain).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://lulzasaur9192.github.io/price-tracker-seo'
).replace(/\/+$/, '');

/**
 * Absolute canonical URL for a route path.
 * Pass the route WITHOUT the basePath (e.g. '/music-gear/guitars').
 * canonicalUrl('/') returns the site root (basePath included).
 */
export function canonicalUrl(path: string = '/'): string {
  // Homepage: GitHub Pages serves the basePath root as a directory index at
  // `${SITE_URL}/` (WITH a trailing slash), and the Search Console URL-prefix
  // property is registered with that slash too — so the homepage canonical must
  // include it. Sub-pages are served WITHOUT a trailing slash (trailingSlash:false),
  // so they keep the slash-less form.
  if (!path || path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
