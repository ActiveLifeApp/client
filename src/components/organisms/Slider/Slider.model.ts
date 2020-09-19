import { SliderItemProps } from 'components/molecules/SliderItem/SliderItem.model';

export interface SliderProps {
  className?: string;
}

interface SlideItem extends SliderItemProps {
  key: string;
}

export type SlideListData = SlideItem[];

export interface SliderStyledProps {
  posX?: number;
}
