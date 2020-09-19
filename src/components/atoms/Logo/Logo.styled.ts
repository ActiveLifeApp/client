import { ReactComponent as LogoPrimaryIcon } from 'assets/icons/logoPrimary.svg';
import { ReactComponent as LogoSecondaryIcon } from 'assets/icons/logoSecondary.svg';
import styled from 'styled-components';

const Wrapper = styled.div``;

const StyledLogoPrimary = styled(LogoPrimaryIcon)`
  display: block;
  width: 120px;
`;

const StyledLogoSecondary = styled(LogoSecondaryIcon)`
  display: block;
  width: 120px;
`;

export { Wrapper, StyledLogoPrimary, StyledLogoSecondary };
