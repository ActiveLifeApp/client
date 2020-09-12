import React from 'react';
import { TypographyProps } from './Typography.model';
import { StyledHeading, StyledParagraph } from './Typography.styled';

const Typography: React.FC<TypographyProps> = ({ className, type, variant, children }) => {
  return (
    <>
      {type === 'heading' && (
        <StyledHeading className={className} variant={variant} as={variant as React.ElementType}>
          {children}
        </StyledHeading>
      )}
      {type === 'paragraph' && (
        <StyledParagraph className={className} variant={variant}>
          {children}
        </StyledParagraph>
      )}
    </>
  );
};

export default Typography;
