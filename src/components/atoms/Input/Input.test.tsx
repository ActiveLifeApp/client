import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Input from './Input';

describe('Input component', () => {
  test('type text with label is rendered', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Input type="text" label="Example" name="example" id="example" />
      </ThemeProvider>,
    );
    const input = getByLabelText(/example/i);

    expect(input).toBeInTheDocument();
  });

  test('has controlled value', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Input type="text" label="Example" name="example" id="example" />
      </ThemeProvider>,
    );
    const input = getByLabelText(/example/i);

    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  test('is rendered with error', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Input
          type="text"
          label="Example"
          name="example"
          id="example"
          error="Error: something wrong!"
        />
      </ThemeProvider>,
    );

    expect(container).toHaveTextContent(/error/i);
  });
});
