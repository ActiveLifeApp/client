import styled from 'styled-components';
import { Logo, SliderPagination } from 'components';
import { SliderStyledProps } from './Slider.model';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 33%;
  background-color: ${({ theme }) => theme.colors.secondary20};
`;

const SliderList = styled.ul<SliderStyledProps>`
  position: relative;
  left: 0;
  transform: ${({ posX }) => `translateX(${posX}%)`};
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  transition: transform 1s;
`;

const StyledSliderPagination = styled(SliderPagination)`
  position: absolute;
  bottom: 60px;
  left: 60px;
`;

const StyledLogo = styled(Logo)`
  padding: 60px 60px 30px;
`;

export { Wrapper, SliderList, StyledLogo, StyledSliderPagination };
