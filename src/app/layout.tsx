import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono, Rethink_Sans } from "next/font/google";
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
  title: "Pixll",
  description: "This is my Intern Project",
};
const getDMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const getRethinksans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
   
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${getDMSans.variable} ${getRethinksans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
