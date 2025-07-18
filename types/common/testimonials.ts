export interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

export interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}


export interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
}
