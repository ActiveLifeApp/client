import React from 'react';
import { Wrapper, Item, Button } from './SliderPagination.styled';
import { SliderPaginationProps } from './SliderPagination.model';

const SliderPagination: React.FC<SliderPaginationProps> = ({
  slides,
  activeSlide,
  setActiveSlide,
}) => (
  <Wrapper>
    {slides.map((s, index) => (
      <Item key={s}>
        <Button isActive={index === activeSlide} onClick={() => setActiveSlide(index)} />
      </Item>
    ))}
  </Wrapper>
);

export default SliderPagination;
