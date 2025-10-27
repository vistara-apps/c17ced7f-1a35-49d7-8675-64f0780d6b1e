import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'DeFiPulse Base',
  description: 'Discover, aggregate, and socialize DeFi opportunities across chains on Base',
  openGraph: {
    title: 'DeFiPulse Base',
    description: 'Discover, aggregate, and socialize DeFi opportunities across chains on Base',
    images: ['/og-image.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': '/splash.png',
    'fc:frame:button:1': 'Explore DeFi Opportunities',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': 'https://defipulse.baseapp.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
