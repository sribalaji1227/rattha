export interface AppLayoutProps {
  children: React.ReactNode;
}

export interface LoadingScreenProps {
  isVisible?: boolean;
  onComplete?: () => void;
}