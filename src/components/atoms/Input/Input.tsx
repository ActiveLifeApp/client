import React, { useState } from 'react';
import StyledInputBar from './Input.styled';
import { InputProps } from './Input.model';

const Input: React.FC<InputProps> = ({ type, label, id, name, rules = {}, errors, register }) => {
  const [inputType, setInputType] = useState(type);

  const handleButtonClick = () => {
    if (inputType === 'text') {
      return setInputType('password');
    }
    return setInputType('text');
  };

  return (
    <StyledInputBar error={!!errors} type={type} data-testid="input">
      <input
        type={inputType}
        name={name}
        id={id}
        placeholder=" "
        ref={register && register(rules)}
      />
      <label htmlFor={id}>{label}</label>
      {type === 'password' && (
        <input type="button" onClick={handleButtonClick} data-testid="button" />
      )}
      <p>{errors?.message}</p>
    </StyledInputBar>
  );
};

export default Input;
