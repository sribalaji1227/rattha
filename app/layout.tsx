import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "@/components/loader/AppLayout"; 
import { Cormorant_Garamond, Inter } from "next/font/google"; 

export const metadata: Metadata = {
  title: "Rattha",
  description: "Crafting legacies beyond luxury",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple‐touch‐icon.png",
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
