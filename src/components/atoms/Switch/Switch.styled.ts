import styled from 'styled-components';

const StyledSwitch = styled.div`
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
    padding-left: 45px;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 38px;
      height: 21px;
      border-radius: 10px;
      border: 1px solid #f59e6d;
      background-color: ${({ theme }) => theme.colors.white};
    }
    &:after {
      content: '';
      position: absolute;
      top: 3px;
      left: 4px;
      display: block;
      width: 15px;
      height: 15px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.primary60};
      transition: 0.3s ease-in-out;
    }
  }

  > input:not(:checked) + label {
    &:before {
      background-color: ${({ theme }) => theme.colors.primary20};
      border-color: ${({ theme }) => theme.colors.primary20};
    }
    &:after {
      transform: translateX(16px);
    }
  }
`;

export default StyledSwitch;
