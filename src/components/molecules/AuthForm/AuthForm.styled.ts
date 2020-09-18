import styled from 'styled-components';
import { Button, Typography } from 'components';

export const StyledWrapper = styled.div`
  width: 500px;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const StyledSubheading = styled(Typography)`
  margin-top: 10px;
`;

export const StyledButton = styled(Button)`
  margin: 40px auto 0;
`;

export const StyledParagraph = styled(Typography)`
  margin-right: 5px;
`;
