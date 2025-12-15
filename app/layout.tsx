import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Karzwala - Get Business Loans at 12% p.a",
  description:
    "Get instant business and personal loans starting at 12% p.a. Fast approval, hassle-free process with flexible tenures.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
