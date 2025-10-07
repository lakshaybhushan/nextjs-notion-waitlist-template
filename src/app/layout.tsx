import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "@/components/ui/sonner";

const geist = GeistSans;

export const metadata: Metadata = {
  title: "praedia | Immobilien analysieren in Sekunden.",
  description:
    "Praedia verwandelt Off-Market-Deals in Sekundenschnelle in fertige Analysen, Präsentationen und Verkaufstools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${GeistMono.variable} dark`}
      suppressHydrationWarning
    >
      <meta property="og:image" content="/opengraph-image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="832" />
      <meta
        property="og:site_name"
        content="praedia | Immobilien analysieren in Sekunden."
      />
      <meta
        property="og:url"
        content="https://praedia.ai/"
      />
      <meta name="twitter:image" content="/twitter-image.png" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="832" />
      <body className={geist.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
