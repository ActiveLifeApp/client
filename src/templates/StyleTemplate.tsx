import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { Normalize } from 'styled-normalize';
import theme from 'styles/theme';

interface IProps {
  children: ReactNode;
}

const StyleTemplate: FC<IProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default StyleTemplate;
