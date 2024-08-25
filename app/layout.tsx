import type { Metadata } from "next";
import { Noto_Serif, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const text = Roboto({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: '400'
});
const title = Noto_Serif({
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
      <body className={`${text.variable} ${title.variable}`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
