import styled from 'styled-components';
import watchIcon from 'assets/icons/watch.svg';

const StyledInputBar: React.FC<{ error?: string }> = styled.div<{ error?: string }>`
  width: 100%;
  margin: 24px 0;
  position: relative;
  > input {
    border: none;
    border-bottom: 1px solid
      ${({ theme, error }) => (error ? theme.colors.error20 : theme.colors.neutral60)};
    background-color: none;
    font-size: ${({ theme }) => theme.sizes.s};
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
  > span {
    display: block;
    margin: 5px 2px;
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
