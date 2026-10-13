import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Arizonia,
  Kaushan_Script,
  Fleur_De_Leah,
  Lobster,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/components/comp-cart/cart-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arizonia = Arizonia({
  variable: "--font-arizonia",
  subsets: ["latin"],
  weight: "400",
});

const kaushanScript = Kaushan_Script({
  variable: "--font-kaushan-script",
  subsets: ["latin"],
  weight: "400",
});

const fleurDeLeah = Fleur_De_Leah({
  variable: "--font-fleur-de-leah",
  subsets: ["latin"],
  weight: "400",
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://monetwear.com"),

  title: {
    default: "MONET — Wear What Others Wouldn't Dare",
    template: "%s | Monet",
  },

  description: "It isn't for everyone — and we never wanted it to be.",

  authors: [{ name: "Monet" }],
  creator: "Monet",
  publisher: "Monet",

  openGraph: {
    title: "MONET — Wear What Others Wouldn't Dare",
    description: "It isn't for everyone — and we never wanted it to be.",
    siteName: "MONET",
    url: "https://monetwear.com",
    images: [
      {
        url: "/images/11-11.png",
        width: 1200,
        height: 630,
        alt: "MONET — Wear What Others Wouldn't Dare",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MONET — Wear What Others Wouldn't Dare",
    description:
      "Bold designs. Limited runs. Inspired by the streets of Dhaka.",
    images: ["/images/11-11.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/images/monet-logo-w-on-trans.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${arizonia.variable} ${kaushanScript.variable} ${fleurDeLeah.variable} ${lobster.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
