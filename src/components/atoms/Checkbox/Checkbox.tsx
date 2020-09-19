import React from 'react';
import { CheckboxProps } from './Checkbox.model';
import StyledCheckbox from './Checkbox.styled';

const Checkbox: React.FC<CheckboxProps> = ({ label, id, name, register, rules = {}, errors }) => {
  return (
    <StyledCheckbox errors={!!errors}>
      <input type="checkbox" id={id} name={name} ref={register && register(rules)} />
      <label htmlFor={id}>{label}</label>
    </StyledCheckbox>
  );
};

export default Checkbox;
