import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});
const josefin_sans = Roboto({
  subsets: ["latin"],
  variable: '--font-josefin-sans',
  weight:'900',
});

export const metadata: Metadata = {
  title: "Coup d'Pod",
  description: "A thoughtful and entertaining conversation about politics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${josefin_sans.variable}`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
