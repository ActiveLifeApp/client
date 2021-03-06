import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary20: string;
      primary40: string;
      primary60: string;
      secondary20: string;
      secondary40: string;
      secondary60: string;
      black: string;
      neutral20: string;
      neutral40: string;
      neutral60: string;
      neutral80: string;
      white: string;
      success20: string;
      success40: string;
      error20: string;
      error40: string;
      warning20: string;
      warning40: string;
      information20: string;
      information40: string;
    };
    sizes: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    weights: {
      light: string;
      regular: string;
      bold: string;
    };
    devices: {
      mobile: string;
      mobileL: string;
      tablet: string;
      tabletL: string;
      desktop: string;
      desktopFHD: string;
    };
  }
}
