import React, { useState } from 'react';
import { CheckboxProps } from './Checkbox.model';
import StyledCheckbox from './Checkbox.styled';

const Button: React.SFC<CheckboxProps> = ({ label, checked, id, name }) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <StyledCheckbox>
      <input
        onClick={() => setIsChecked((prevState) => !prevState)}
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
      />
      <label htmlFor={name}>{label}</label>
    </StyledCheckbox>
  );
};

export default Button;
