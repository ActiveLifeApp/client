import styled from 'styled-components';

import { Logo, ButtonLogin, ButtonLink, Typography, Slider } from 'components';

export const StyledWrapper = styled.div`
  padding: 20px;

  ${({ theme: { devices } }) => devices.tablet} {
    padding: 40px;
  }

  ${({ theme: { devices } }) => devices.tabletL} {
    padding: 0;
    display: flex;
  }
`;

export const InnerWrapper = styled.div`
  ${({ theme: { devices } }) => devices.tabletL} {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledLogo = styled(Logo)`
  ${({ theme: { devices } }) => devices.tabletL} {
    display: none;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { devices } }) => devices.tabletL} {
    justify-content: flex-end;
  }
`;

export const StyledHeading = styled(Typography)`
  margin: 48px 0 20px;
  text-align: center;
  ${({ theme: { devices } }) => devices.tabletL} {
    margin: 58px 0 20px;
  }
  ${({ theme: { devices } }) => devices.desktop} {
    margin: 68px 0 20px;
  }
  ${({ theme: { devices } }) => devices.desktopFHD} {
    margin: 88px 0 20px;
  }
`;

export const StyledParagraph = styled(Typography)`
  text-align: center;
`;

export const StyledButtonWrapper = styled.div`
  margin: 20px 0 30px;
  display: flex;
  justify-content: center;
`;

export const StyledButtonLogin = styled(ButtonLogin)`
  margin-right: 20px;
`;

export const StyledSlider = styled(Slider)`
  display: none;
  ${({ theme: { devices } }) => devices.tabletL} {
    display: block;
  }
`;

export const StyledButtonLink = styled(ButtonLink)`
  display: flex;
  align-items: center;

  > p {
    ${({ theme: { devices } }) => devices.mobileL} {
      display: none;
    }
  }
`;
