import React, { useState } from 'react';
import { SliderItem, SliderPagination } from 'components';
import useInterval from 'hooks/useInterval';
import { Wrapper, SliderList } from './Slider.styled';
import { slideList } from './Slider.data';

const Slider: React.FC<{}> = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const clear = useInterval(() => {
    setActiveSlide((prev: number): number => (prev === slideList.length - 1 ? 0 : (prev += 1)));
  }, 3000);

  const handleActiveSlide = (index: number) => {
    clear();
    setActiveSlide(index);
  };

  return (
    <Wrapper>
      <SliderList posX={activeSlide * -100 || 0}>
        {slideList.map((s) => (
          <SliderItem key={s.title} title={s.title} description={s.description} image={s.image} />
        ))}
      </SliderList>
      <SliderPagination
        slides={slideList.map((s) => s.key)}
        activeSlide={activeSlide}
        setActiveSlide={handleActiveSlide}
      />
    </Wrapper>
  );
};

export default Slider;
