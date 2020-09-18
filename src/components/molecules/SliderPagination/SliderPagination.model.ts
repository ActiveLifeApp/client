export interface SliderPaginationProps {
  slides: string[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  className?: string;
}

export interface SliderPaginationStyled {
  isActive: boolean;
}
