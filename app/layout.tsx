import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL("https://decaswap.com"),
  title: "DECASWAP",
  description: "DECASWAP Landing",
  keywords: ['DECASWAP, Decentalised Swaps'],
  authors: [{ name: 'DECASWAP' }, { name: 'DECASWAP', url: 'decaswap.com' }],
  openGraph: {
    siteName: 'DECASWAP',
    url: 'https://decaswap.com',
    images: 'https://decaswap-labs-github-io.vercel.app/img/decaswap-thumbnail.png',
  },
  icons: {
    icon: "/img/favicon.svg"
  }

};
export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
