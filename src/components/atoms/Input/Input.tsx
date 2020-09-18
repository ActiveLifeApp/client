import React, { useState } from 'react';
import StyledInputBar from './Input.styled';
import { InputProps } from './Input.model';

const Input: React.FC<InputProps> = ({ type, label, id, name, error }) => {
  const [inputType, setInputType] = useState(type);

  const handleButtonClick = () => {
    if (inputType === 'text') {
      return setInputType('password');
    }
    return setInputType('text');
  };

  return (
    <StyledInputBar error={error} type={type}>
      <input type={inputType} name={name} id={id} placeholder=" " />
      <label htmlFor={id}>{label}</label>
      {type === 'password' && <input type="button" onClick={handleButtonClick} />}
      <span>{error}</span>
    </StyledInputBar>
  );
};

export default Input;
