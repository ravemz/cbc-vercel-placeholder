import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteTitle = "CBCatalyst | Accelerate Global Sourcing & Contract Manufacturing with AI";
const siteDescription =
  "Connect directly with vetted Indian suppliers for contract manufacturing, experienced in producing similar custom parts by geometry, application, and industry. We're rebuilding — join the waitlist for early access.";

export const metadata: Metadata = {
  title: `${siteTitle} — Coming Soon`,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://cbcatalyst.com",
    siteName: "CBCatalyst",
    images: [{ url: "https://cbcatalyst.com/logo.png", width: 200, height: 200 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["https://cbcatalyst.com/logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
