import React, { useState } from 'react';
import { RadioButtonProps } from './RadioButton.model';
import StyledRadioButton from './RadioButton.styled';

const RadioButton: React.SFC<RadioButtonProps> = ({ label, checked, id, name }) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <StyledRadioButton>
      <input
        onClick={() => setIsChecked((prevState) => !prevState)}
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
      />
      <label htmlFor={name}>{label}</label>
    </StyledRadioButton>
  );
};

export default RadioButton;
