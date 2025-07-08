// components/FaqAccordion.tsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  id: string | number;
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  data: FaqItem[];
  /** now uses responsive text sizes: mobile → md → lg */
  headingSize?: "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
}

export default function FaqAccordion({
  data,
  children,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[1180px] mx-auto px-4">
      {/* Optional section heading */}
      {children}

      {/* Outer wrapper with dividing lines */}
      <div className="divide-y divide-gray-300">
        {data.map((faq, i) => {
          const isOpen = i === openIndex;
          return (
            <div
              key={faq.id}
              className="py-6 cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`font-medium text-[16px] md:text-[16px]  text-[#787878] font-inter`}
                >
                  {faq.question}
                </h3>
                {isOpen ? (
                  <Minus className="w-5 h-5 min-w-[20px] min-h-[20px]" />
                ) : (
                  <Plus className="w-5 h-5 min-w-[20px] min-h-[20px]" />
                )}

              </div>

              {isOpen && (
                <p className="mt-4 text-[#787878] text-[14px] md:text-[14px] leading-relaxed  font-inter">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
