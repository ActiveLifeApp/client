import React, { useState } from 'react';
import { SwitchProps } from './Switch.model';
import StyledSwitch from './Switch.styled';

const Switch: React.SFC<SwitchProps> = ({ label, checked, id, name }) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <StyledSwitch>
      <input
        onClick={() => setIsChecked((prevState) => !prevState)}
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
      />
      <label htmlFor={id}>{label}</label>
    </StyledSwitch>
  );
};

export default Switch;
