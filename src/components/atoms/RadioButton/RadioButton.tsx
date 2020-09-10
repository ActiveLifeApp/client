import React, { useState } from 'react';
import { RadioButtonProps } from './RadioButton.model';
import StyledRadioButton from './RadioButton.styled';

const RadioButton: React.FC<RadioButtonProps> = ({ label, checked, id, name }) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <StyledRadioButton>
      <input
        onClick={() => setIsChecked((prevState) => !prevState)}
        type="radio"
        id={id}
        name={name}
        checked={isChecked}
      />
      <label htmlFor={id}>{label}</label>
    </StyledRadioButton>
  );
};

export default RadioButton;
