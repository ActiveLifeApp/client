import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import ButtonLink from './ButtonLink';

describe('ButtonLink component', () => {
  test('is rendered', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ButtonLink>text</ButtonLink>
      </ThemeProvider>,
    );
    const buttonLink = getByTestId('button-link');

    expect(buttonLink).toBeInTheDocument();
  });
});
