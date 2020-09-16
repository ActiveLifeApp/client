import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 33%;
  background-color: ${({ theme }) => theme.colors.secondary20};
`;

const SliderList = styled.ul<{ posX?: number }>`
  position: relative;
  left: 0;
  transform: ${({ posX }) => `translateX(${posX}%)`};
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  transition: transform 1s;
`;

export { Wrapper, SliderList };
