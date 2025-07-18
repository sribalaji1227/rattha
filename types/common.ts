import { ReactNode } from "react";

export interface InterestFormData {
    fullName: string;
    email: string;
    phone: string;
    message: string;
}

export interface NavLinkProps {
    href: string;
    className?: string;
    children: ReactNode;
}

export type StarRatingProps = {
    rating: number;
}


export interface Factor {
  id: string | number;
  icon: string;
  title: string;
  description: string;
}

export interface EssentialFactorsProps {
  factors: Factor[];
}


export interface TimelineItem {
  year: string;
  active: boolean;
  title?: string;
  description?: string;
  imageSrc?: string;
}

export interface Slide {
  id: number;
  image: string;
  title: string;
  text: string;
}

export interface PaymentPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface ProjectInfoOverlayProps {
  imageSrc: string;
  stats: StatItem[];
}

