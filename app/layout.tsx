import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zipper-demo.vercel.app"),
  title: "Zipper Demo - Isomorphic ZIP File Downloads",
  description: "Demo project showcasing @diegoaltoworks/zipper - an isomorphic TypeScript package for downloading and zipping files in both browser and Node.js environments.",
  keywords: ["zip", "download", "isomorphic", "typescript", "nextjs", "browser", "nodejs", "file-download", "bulk-download"],
  authors: [{ name: "Diego Alto", url: "https://diegoalto.works" }],
  creator: "Diego Alto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zipper-demo.vercel.app",
    title: "Zipper Demo - Isomorphic ZIP File Downloads",
    description: "Demo showcasing @diegoaltoworks/zipper - download and zip files in browser and Node.js",
    siteName: "Zipper Demo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zipper Demo - Isomorphic ZIP File Downloads",
    description: "Demo showcasing @diegoaltoworks/zipper - download and zip files in browser and Node.js",
    creator: "@diegoaltoworks",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
