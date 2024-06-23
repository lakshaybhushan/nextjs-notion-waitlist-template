import "./globals.css"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"

const FigtreeFont = Figtree({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "morph2json | Effortlessly Convert your raw data into a well structured JSON",
  description:
    "Join the waitlist to get early access to morph2json and get notified when it's ready for you to use.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}
