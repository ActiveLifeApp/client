import React from 'react';
import { TypographyProps } from './Typography.model';
import { StyledHeading, StyledParagraph } from './Typography.styled';

const Typography: React.FC<TypographyProps> = ({ type, variant, children }) => {
  return (
    <>
      {type === 'heading' && <StyledHeading variant={variant}>{children}</StyledHeading>}
      {type === 'paragraph' && <StyledParagraph variant={variant}>{children}</StyledParagraph>}
    </>
  );
};

export default Typography;
