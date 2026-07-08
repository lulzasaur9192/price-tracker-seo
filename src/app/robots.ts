import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Note: on github.io this is emitted under the /price-tracker-seo subpath, so
// crawlers reading the domain-root robots.txt won't see it. It becomes fully
// effective once the site moves to a custom domain; the sitemap reference is
// correct either way.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
