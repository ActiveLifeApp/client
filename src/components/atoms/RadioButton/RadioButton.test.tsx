import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import RadioButton from './RadioButton';

describe('RadioButton component', () => {
  test('is rendered with label', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <RadioButton label="example" name="example" id="example" />
      </ThemeProvider>,
    );
    const radiobutton = getByLabelText(/example/i);

    expect(radiobutton).toBeInTheDocument();
  });

  test('reacted properly on change', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <RadioButton label="example" name="example" id="example" />
      </ThemeProvider>,
    );
    const radiobutton = getByLabelText(/example/i);

    fireEvent.change(radiobutton, { target: { checked: true } });
    expect(radiobutton).toBeChecked();

    fireEvent.change(radiobutton, { target: { checked: false } });
    expect(radiobutton).not.toBeChecked();
  });
});
