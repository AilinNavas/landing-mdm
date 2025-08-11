// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import TrackingWrapper from "@/components/TrackingWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MUCHO DENTAL MARKETING",
  description: "Dental SEO, web design, and marketing systems built for growth-minded dentists",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TrackingWrapper>{children}</TrackingWrapper>
      </body>
    </html>
  )
}
