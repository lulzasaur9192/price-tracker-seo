import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'PriceTrackr — Free Price Tracker for Music Gear & Trading Cards',
    template: '%s | PriceTrackr',
  },
  description:
    'Track used prices for guitars, synths, amps, pedals, Pokemon cards, MTG, and Yu-Gi-Oh. Real market data from Reverb and TCGPlayer.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'PriceTrackr',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics — replace GA_MEASUREMENT_ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen">
        <nav className="border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-gray-900">
              PriceTrackr
            </a>
            <div className="flex gap-6 text-sm font-medium text-gray-600">
              <a href="/music-gear" className="hover:text-gray-900">
                Music Gear
              </a>
              <a href="/trading-cards" className="hover:text-gray-900">
                Trading Cards
              </a>
              <a href="/apis/tcgplayer-price-data" className="hover:text-gray-900">
                APIs
              </a>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-gray-200 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500">
            <p>
              PriceTrackr — Free price tracking for music gear and trading
              cards. Data sourced from Reverb and TCGPlayer marketplaces.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
