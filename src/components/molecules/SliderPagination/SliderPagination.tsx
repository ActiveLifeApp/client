import React from 'react';
import { Wrapper, Item, Button } from './SliderPagination.styled';
import { SliderPaginationProps } from './SliderPagination.model';

const SliderPagination: React.FC<SliderPaginationProps> = ({
  slides,
  className,
  activeSlide,
  setActiveSlide,
}) => (
  <Wrapper className={className}>
    {slides.map((s, index) => (
      <Item key={s}>
        <Button
          isActive={index === activeSlide}
          onClick={() => setActiveSlide(index)}
          disabled={index === activeSlide}
        />
      </Item>
    ))}
  </Wrapper>
);

export default SliderPagination;
