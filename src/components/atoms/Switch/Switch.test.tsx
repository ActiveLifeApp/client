import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Switch from './Switch';

describe('Switch component', () => {
  test('is rendered with label', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Switch label="example" name="example" id="example" />
      </ThemeProvider>,
    );
    const switchButton = getByLabelText(/example/i);

    expect(switchButton).toBeInTheDocument();
  });

  test('reacted properly on change', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Switch label="example" name="example" id="example" />
      </ThemeProvider>,
    );
    const switchButton = getByLabelText(/example/i);

    fireEvent.change(switchButton, { target: { checked: true } });
    expect(switchButton).toBeChecked();

    fireEvent.change(switchButton, { target: { checked: false } });
    expect(switchButton).not.toBeChecked();
  });
});
