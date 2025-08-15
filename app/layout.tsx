// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Wrapper from "@/components/Wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Get Your Free Dental Website Preview – No Commitment Needed",
  description: "We’ll design a custom homepage for your dental practice—optimized for mobile, SEO, and HIPAA compliance. 100% free preview. You only pay if you're thrilled.",
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
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
