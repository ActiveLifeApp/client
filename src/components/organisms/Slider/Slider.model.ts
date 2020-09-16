import { SliderItemProps } from 'components/molecules/SliderItem/SliderItem.model';

interface SlideData extends SliderItemProps {
  key: string;
}

export type SlideListData = SlideData[];
