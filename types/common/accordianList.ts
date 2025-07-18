export interface AccordionItemData {
  title: string;
  description: string;
}

export interface AccordionListProps {
  heading: string;
  subtitle?: string;
  items: AccordionItemData[];
  imageSrc: string;
  ctaLabel?: string;
  isNumber?: boolean;
  desktopSize?: { width: number; height: number };
  mobileSize?: { width: number; height: number };
}
