import styled from 'styled-components';
import checkedIcon from 'assets/icons/checked.svg';

const StyledCheckbox = styled.div<{ errors?: boolean }>`
  display: inline-block;
  > input {
    opacity: 0;
  }
  > label {
    font-size: ${({ theme }) => theme.sizes.xxs};
    font-weight: ${({ theme }) => theme.weights.regular};
    color: ${({ theme, errors }) => (errors ? theme.colors.error20 : theme.colors.neutral20)};
    padding-left: 15px;
  }
  > input + label {
    position: relative;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      left: -10px;
      top: 0px;
      width: 19px;
      height: 19px;
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.colors.primary20};
      background: ${({ theme }) => theme.colors.primary20};
    }
    &:after {
      content: '';
      position: absolute;
      top: 0px;
      left: -10px;
      width: 19px;
      height: 19px;
      background-image: url(${checkedIcon});
      background-position: center;
      background-size: 60%;
      background-repeat: no-repeat;
      transition: 0.3s;
    }
  }
  > input:not(:checked) + label {
    &:before {
      background: ${({ theme }) => theme.colors.white};
    }
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }
`;

export default StyledCheckbox;
