import React, { useState } from 'react';
import { SliderItem, SliderPagination } from 'components';
import { Wrapper, SliderList } from './Slider.styled';
import { slideList } from './Slider.data';

const Slider: React.FC<{}> = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Wrapper>
      <SliderList posX={activeSlide * -100 || 0}>
        {slideList.map((s) => (
          <SliderItem key={s.title} title={s.title} description={s.description} />
        ))}
      </SliderList>
      <SliderPagination
        slides={slideList.map((s) => s.key)}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
    </Wrapper>
  );
};

export default Slider;
