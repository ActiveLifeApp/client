import React, { FC, ReactNode } from 'react';
import StyleTemplate from './StyleTemplate';
import StoreTemplate from './StoreTemplate';

interface IProps {
  children: ReactNode;
}

const MainTemplate: FC<IProps> = ({ children }) => (
  <StoreTemplate>
    <StyleTemplate>{children}</StyleTemplate>
  </StoreTemplate>
);

export default MainTemplate;
