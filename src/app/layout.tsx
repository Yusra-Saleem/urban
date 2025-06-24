import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UrbanSpice - Premium Food Delivery & Restaurant',
  description: 'Experience the finest spice-infused cuisine with UrbanSpice. Premium ingredients, authentic flavors, and exceptional service delivered to your doorstep.',
  keywords: 'food delivery, spicy cuisine, premium restaurant, urban dining, authentic flavors',
  authors: [{ name: 'UrbanSpice Team' }],
  creator: 'UrbanSpice',
  publisher: 'UrbanSpice',
  openGraph: {
    title: 'UrbanSpice - Premium Food Delivery & Restaurant',
    description: 'Experience the finest spice-infused cuisine with premium ingredients and authentic flavors.',
    url: 'https://urbanspice.com',
    siteName: 'UrbanSpice',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UrbanSpice - Premium Food Delivery',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UrbanSpice - Premium Food Delivery & Restaurant',
    description: 'Experience the finest spice-infused cuisine with premium ingredients and authentic flavors.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}