import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/defy25-logo.jpg" />
      </head>
      <body
        className={`${yapariBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
