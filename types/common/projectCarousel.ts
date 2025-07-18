export interface Project {
  id: number | string;
  image: string;
  title?: string;
}

export interface ProjectCarouselProps {
  items: Project[];
  autoSlide?: boolean;
  interval?: number;
  sliderView?: boolean;
  desktopSize?: { width: number; height: number };
  mobileSize?: { width: number; height: number };
}