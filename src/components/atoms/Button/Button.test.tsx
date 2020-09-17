import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Button from './Button';

describe('Button component', () => {
  test('is displayed as a default component', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button>text</Button>
      </ThemeProvider>,
    );

    expect(container).toHaveTextContent(/text/i);
  });

  test('is displayed as a primary component', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button>text</Button>
      </ThemeProvider>,
    );
    const primary = queryByTestId('primary');

    expect(primary).toBeInTheDocument();
  });

  test('is displayed as a secondary component', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button secondary>text</Button>
      </ThemeProvider>,
    );
    const secondary = queryByTestId('secondary');

    expect(secondary).toBeInTheDocument();
  });

  test('is displayed as disabled', () => {
    const { queryByTestId, rerender } = render(
      <ThemeProvider theme={theme}>
        <Button disabled>text</Button>
      </ThemeProvider>,
    );
    const primary = queryByTestId('primary');

    expect(primary).toBeDisabled();

    rerender(
      <ThemeProvider theme={theme}>
        <Button secondary disabled>
          text
        </Button>
      </ThemeProvider>,
    );
    const secondary = queryByTestId('secondary');

    expect(secondary).toBeDisabled();
  });
});
