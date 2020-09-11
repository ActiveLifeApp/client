import React from 'react';
import { TypographyProps } from './Typography.model';
import { StyledHeading, StyledParagraph } from './Typography.styled';

const Typography: React.FC<TypographyProps> = ({ type, variant, children }: TypographyProps) => {
  return (
    <>
      {type === 'heading' && (
        <StyledHeading variant={variant} as={variant as React.ElementType}>
          {children}
        </StyledHeading>
      )}
      {type === 'paragraph' && <StyledParagraph variant={variant}>{children}</StyledParagraph>}
    </>
  );
};

export default Typography;
