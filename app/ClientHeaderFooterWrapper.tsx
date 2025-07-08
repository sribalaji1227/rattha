"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Header, Footer } from "@/components";

export default function ClientHeaderFooterWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {!isHomePage && <Header />}
      {children}
      {!isHomePage && <Footer />}
    </>
  );
}
