import styled from 'styled-components';
import { SliderPaginationStyled } from './SliderPagination.model';

const Wrapper = styled.ul`
  display: flex;
  padding: 0 20px;
  margin: 0;
  list-style: none;
`;

const Item = styled.li`
  display: block;
  padding: 0;
`;

const Button = styled.button<SliderPaginationStyled>`
  display: block;
  width: 16px;
  height: 16px;
  padding: 0;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.white};
  margin: 0 10px 0 0;
  background: ${({ theme, isActive }) => (isActive ? theme.colors.white : 'none')};
  transition: all 0.35s;
  cursor: pointer;
`;

export { Wrapper, Item, Button };
