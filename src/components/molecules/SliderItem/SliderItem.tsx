import React from 'react';
import { Wrapper, StyledHeading, StyledParagraph, ImageWrapper, Image } from './SliderItem.styled';
import { SliderItemProps } from './SliderItem.model';

const SliderItem: React.FC<SliderItemProps> = ({ title, description, image }) => (
  <Wrapper>
    <ImageWrapper>
      <Image src={image} alt="" />
    </ImageWrapper>
    <StyledHeading type="heading" variant="h2">
      {title}
    </StyledHeading>
    <StyledParagraph type="paragraph" variant="p1">
      {description}
    </StyledParagraph>
  </Wrapper>
);

export default SliderItem;
