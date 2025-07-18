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