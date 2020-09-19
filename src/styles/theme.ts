import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary20: '#F5715E',
    primary40: '#FAB7AE',
    primary60: '#FEF0EE',
    secondary20: '#5E5EF5',
    secondary40: '#AEAEFA',
    secondary60: '#EEEEFD',
    black: '#272741',
    neutral20: '#9D9DA9',
    neutral40: '#BDBDC5',
    neutral60: '#DEDEE2',
    neutral80: '#F4F4F5',
    white: '#FFFFFF',
    success20: '#5EF5AA',
    success40: '#E7FEF2',
    error20: '#F55E5E',
    error40: '#FEE7E7',
    warning20: '#F5AF5E',
    warning40: '#FEF3E7',
    information20: '#5E8BF5',
    information40: '#E7EEFE',
  },
  sizes: {
    xxs: '14px',
    xs: '16px',
    s: '18px',
    m: '19px',
    l: '22px',
    xl: '26px',
    xxl: '32px',
    xxxl: '40px',
  },
  weights: {
    light: '300',
    regular: '400',
    bold: '600',
  },
  devices: {
    mobile: '@media (max-width: 640px)',
    mobileL: '@media (max-width: 767px)',
    tablet: '@media (min-width: 768px)',
    tabletL: '@media (min-width: 1024px)',
    desktop: '@media (min-width: 1366px)',
    desktopFHD: '`@media (min-width: 1920px)',
  },
};

export default theme;
