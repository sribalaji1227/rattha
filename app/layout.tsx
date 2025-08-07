import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "@/components/loader/AppLayout"; 
import { Cormorant_Garamond, Inter } from "next/font/google"; 


export const metadata: Metadata = {
  title: "Rattha Realty | Luxury Real Estate Developer in India",
  description:
    "Discover premium real estate developer in Chennai, India with Rattha Realty – a trusted luxury property developer crafting iconic residential projects for discerning homeowners.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",  
  },
  themeColor: "#e0f0ff",
};

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant-garamond",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${inter.variable} antialiased`}
      >
        <AppLayout> 
          
            {children}
             
        </AppLayout>
      </body>
    </html>
  );
}
