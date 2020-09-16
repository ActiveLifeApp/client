import React from 'react';
import { TypographyProps } from './Typography.model';
import { StyledHeading, StyledParagraph } from './Typography.styled';

const Typography: React.FC<TypographyProps> = ({ type, variant, children, className }) => {
  return (
    <>
      {type === 'heading' && (
        <StyledHeading variant={variant} as={variant as React.ElementType} className={className}>
          {children}
        </StyledHeading>
      )}
      {type === 'paragraph' && (
        <StyledParagraph variant={variant} className={className}>
          {children}
        </StyledParagraph>
      )}
    </>
  );
};

export default Typography;
