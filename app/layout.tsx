import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Rochester Rentals | Premium Property Rentals",
  description: "Discover premium rental properties in Rochester. Browse our curated selection of apartments, houses, and luxury rentals. Find your perfect home today.",
  keywords: ["Rochester rentals", "apartments", "houses", "property rental", "luxury rentals", "Rochester NY"],
  authors: [{ name: "Rochester Rentals" }],
  openGraph: {
    type: "website",
    title: "Rochester Rentals | Premium Property Rentals",
    description: "Discover premium rental properties in Rochester. Find your perfect home today.",
    siteName: "Rochester Rentals",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rochester Rentals | Premium Property Rentals",
    description: "Discover premium rental properties in Rochester. Find your perfect home today.",
  },
  robots: "index, follow",
}

export const viewport: Viewport = {
  themeColor: "#0b0c0f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
