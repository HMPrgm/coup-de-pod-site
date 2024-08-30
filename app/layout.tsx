import type { Metadata } from "next";
import { Roboto, Roboto_Condensed, Baskervville } from "next/font/google";
import localFont from '@next/font/local'
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const text = Roboto({
  subsets: ["latin"],
  variable: '--font-text',
  weight:'300',
});
const title = Roboto_Condensed({
  subsets: ["latin"],
  variable: '--font-title',
  weight:'variable',
});
const design = Baskervville({
  subsets: ["latin"],
  variable: '--font-design',
  weight: '400'
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
      <body className={`${text.variable} ${title.variable} ${design.variable}`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
