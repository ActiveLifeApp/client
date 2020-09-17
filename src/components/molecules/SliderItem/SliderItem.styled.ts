import styled from 'styled-components';
import { Typography } from 'components';

const Wrapper = styled.li`
  flex-shrink: 0;
  width: 100%;
  padding: 20px;
  margin: 0;
`;

const StyledHeading = styled(Typography)`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
`;

const StyledParagraph = styled(Typography)`
  margin: 30px 0 0;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.9;
`;

export { Wrapper, StyledHeading, StyledParagraph };
