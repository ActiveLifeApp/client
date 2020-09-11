import React from 'react';
import { TypographyProps } from './Typography.model';
import { StyledHeading, StyledParagraph } from './Typography.styled';

const Typography: React.FC<TypographyProps> = ({ type, variant, margin, align, children }) => {
  return (
    <>
      {type === 'heading' && (
        <StyledHeading variant={variant} margin={margin} align={align} as={variant}>
          {children}
        </StyledHeading>
      )}
      {type === 'paragraph' && (
        <StyledParagraph variant={variant} margin={margin} align={align}>
          {children}
        </StyledParagraph>
      )}
    </>
  );
};

export default Typography;
