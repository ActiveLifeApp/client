import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import ButtonLogin from './ButtonLogin';

describe('ButtonLogin component', () => {
  test('is rendered', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ButtonLogin>text</ButtonLogin>
      </ThemeProvider>,
    );
    const buttonLogin = getByTestId('button-login');

    expect(buttonLogin).toBeInTheDocument();
  });

  test('is rendered with icon', () => {
    const { getByTestId, rerender } = render(
      <ThemeProvider theme={theme}>
        <ButtonLogin icon="google" />
      </ThemeProvider>,
    );
    const buttonLogin = getByTestId('button-login');

    expect(buttonLogin.querySelector('svg')).toBeInTheDocument();

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonLogin icon="facebook" />
      </ThemeProvider>,
    );

    expect(buttonLogin.querySelector('svg')).toBeInTheDocument();
  });
});
