import styled from 'styled-components';

const StyledRadioButton = styled.div`
  display: inline-block;
  > input {
    opacity: 0;
  }
  > label {
    font-size: ${({ theme }) => theme.sizes.xxs};
    font-weight: ${({ theme }) => theme.weights.regular};
    color: ${({ theme }) => theme.colors.neutral20};
  }
  > input + label {
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border-radius: 50px;
      border: 1px solid ${({ theme }) => theme.colors.primary20};
      background: ${({ theme }) => theme.colors.primary20};
    }
    &:after {
      content: '';
      position: absolute;
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      border-radius: 50px;
      background: ${({ theme }) => theme.colors.white};
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

export default StyledRadioButton;
