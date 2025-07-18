import * as Yup from "yup";

export interface ExploreProjectsSectionProps {
  heading: string;
  description: string;
  className?: string;
}


export interface HeroSectionProps { 
  desktopImage: string;
  mobileImage: string;

  // Text content
  desktopTitle: {
    lines: string[];
    classNames?: string[];
  };
  mobileTitle: {
    lines: string[];
    classNames?: string[];
  };

  // Optional customization
  gradientOverlay?: string;
  showScrollIndicator?: boolean;
  enableParallax?: boolean;
  imageQuality?: number;
  imageScale?: {
    initial: number;
    loaded: number;
  };
  containerPadding?: string;
  animationDelay?: number;
  onScrollClick?: () => void;
  className?: string;
}

export interface PartnerLogo {
  name: string;
  imagePath: string;
}

export interface PartnerWithExcellenceProps {
  title: string;
  description: string;
  className?: string;
}


export interface Project {
  id: string | number;
  image: string;
  title?: string;
}

export interface PropertyValueSectionProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonAction?: "download" | "navigate" | "custom";
  buttonUrl?: string;
  className?: string;
}


 export interface FormField {
  name: string;
  type: "text" | "email" | "tel" | "textarea";
  label: string;
  placeholder: string;
  required: boolean;
  validation?: Yup.AnySchema;
}

export interface FormSection {
  title?: string;
  fields: FormField[];
  isClient?: boolean;
}

export interface RegisterInterestFormProps {
  title: string;
  titleLines?: string[];
  sections: FormSection[];
  submitButtonText?: string;
  successMessage?: {
    title: string;
    description: string;
    buttonText: string;
  };
  privacyPolicyText?: {
    part1: string;
    linkText: string;
    part2: string;
  };
  checkboxLabel?: string;
  className?: string;
  projectName?: string;
  formType?: "default" | "referral" | "channel";
  onClose?: () => void;
}

export interface VerificationState {
  verified: boolean;
  sent: boolean;
  otp: string[];
  otpError: boolean;
  timer: number;
  otpVerified: boolean;
  canResend: boolean;
}

export type FormValues = Record<string, string | boolean>;

export interface Benefit {
  title: string;
  description: string;
}

export interface WhyChooseUsProps {
  heading: string;
  benefits: Benefit[];
  iconSrc?: string;
}
