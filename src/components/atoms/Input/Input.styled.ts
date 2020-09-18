import React from 'react';
import styled from 'styled-components';
import watchIcon from 'assets/icons/watch.svg';

const StyledInputBar: React.FC<{
  error?: string;
  type?: string;
}> = styled.div<{
  error?: string;
  type?: string;
}>`
  width: 100%;
  position: relative;
  > input {
    padding-right: ${({ type }) => type === 'password' && '40px'};
    border: none;
    border-bottom: 1px solid
      ${({ theme, error }) => (error ? theme.colors.error20 : theme.colors.neutral60)};
    font-size: ${({ theme }) => theme.sizes.s};
    background: none;
  }
  > input:not([type='button']) {
    width: 100%;
  }
  > input[type='button'] {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }
  > input:focus {
    outline: none;
  }
  > label {
    position: absolute;
    top: 3px;
    left: 0;
    transition: 0.3s ease-in-out;
    font-size: ${({ theme }) => theme.sizes.xxs};
    color: ${({ theme }) => theme.colors.neutral40};
  }
  > input:focus + label {
    top: -22px;
    font-size: ${({ theme }) => theme.sizes.xxs};
  }
  > input:not(:placeholder-shown) + label {
    top: -22px;
    font-size: ${({ theme }) => theme.sizes.xxs};
  }
  > p {
    display: block;
    margin: 5px 2px 48px;
    color: ${({ theme }) => theme.colors.error20};
    font-size: ${({ theme }) => theme.sizes.xxs};
  }
  > input[type='button'] {
    cursor: pointer;
    width: 23px;
    height: 12px;
    border: none;
    background: none;
    background-image: url(${watchIcon});
    background-repeat: no-repeat;
    background-position: center;

    :focus {
      outline: none;
    }
  }
`;

export default StyledInputBar;
