import styled from 'styled-components';
import { Checkbox, Button } from 'components';

export const StyledCheckbox = styled(Checkbox)`
  margin: 10px;
`;

export const StyledButton = styled(Button)`
  margin: 58px auto;
`;

export const StyledForm = styled.form`
  ${({ theme: { devices } }) => devices.tablet} {
    width: 65%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  ${({ theme: { devices } }) => devices.desktop} {
    width: 40%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
