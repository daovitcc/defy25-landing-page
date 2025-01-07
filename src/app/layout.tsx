import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const yapariBold = localFont({
  src:[{
    path: './fonts/Yapari-Bold.ttf',
    style: 'bold',
  }],
  variable: "--font-yapari-bold",
  
});

export const metadata: Metadata = {
  title: "DeFy'25 Timer",
  description: "A countdown timer for DeFy'25",
};

export function Favicon() {
  return (
    <Head>
      <link rel="icon" href="/defy25-logo.jpg" />
    </Head>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${yapariBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
