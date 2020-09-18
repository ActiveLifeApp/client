import React, { FC, useState } from 'react';
import useInterval from 'hooks/useInterval';

import { SliderItem } from 'components';
import { Wrapper, SliderList, StyledLogo, StyledSliderPagination } from './Slider.styled';
import { slideList } from './Slider.data';

const Slider: FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const clear = useInterval(() => {
    setActiveSlide((prev: number): number => (prev === slideList.length - 1 ? 0 : (prev += 1)));
  }, 3000);

  const handleActiveSlide = (index: number) => {
    setActiveSlide(index);
    clear();
  };

  return (
    <Wrapper>
      <StyledLogo />
      <SliderList posX={activeSlide * -100 || 0}>
        {slideList.map((s) => (
          <SliderItem key={s.title} title={s.title} description={s.description} image={s.image} />
        ))}
      </SliderList>
      <StyledSliderPagination
        slides={slideList.map((s) => s.key)}
        activeSlide={activeSlide}
        setActiveSlide={handleActiveSlide}
      />
    </Wrapper>
  );
};

export default Slider;
