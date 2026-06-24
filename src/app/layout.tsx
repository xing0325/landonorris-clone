import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

// next/font automatically rewrites font URLs for basePath/assetPrefix.
const monaSans = localFont({
  src: "../../public/fonts/67bc6274c5b4108b123aa4d5_MonaSans-VariableFont_wdth_wght.woff2",
  variable: "--font-mona",
  weight: "200 900",
  display: "swap",
});

const brier = localFont({
  src: "../../public/fonts/67b6113a220f85ad6497495a_Brier-Bold.woff2",
  variable: "--font-brier",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "2025 McLaren Formula 1 Driver — Lando Norris",
  description:
    "Official hub for British racing star Lando Norris: breaking news, 2025 race wins, exclusive merch, videos and behind-the-scenes access.",
  icons: {
    icon: "seo/67b5a0969616f526f020ec0e_ln-favicon.png",
    apple: "seo/67b5a098cbef46b41e40dfd2_ln-webclip.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} ${brier.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ln-cream text-ln-olive">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
