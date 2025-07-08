"use client";
import dynamic from "next/dynamic";
import React from "react";

const InterestForm = dynamic(() => import("@/components/InterestForm"), {
  ssr: false,
});

export default function InterestSection() {
  return (
    <section className="mb-[104px]">
      <InterestForm />
    </section>
  );
}
