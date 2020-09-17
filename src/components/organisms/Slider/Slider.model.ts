import { SliderItemProps } from 'components/molecules/SliderItem/SliderItem.model';

interface SlideItem extends SliderItemProps {
  key: string;
}

export type SlideListData = SlideItem[];

export interface SliderStyledProps {
  posX?: number;
}
