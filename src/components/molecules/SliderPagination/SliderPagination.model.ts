export interface SliderPaginationProps {
  slides: string[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

export interface SliderPaginationStyled {
  isActive: boolean;
}
