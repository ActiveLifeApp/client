import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const StoreTemplate: FC<IProps> = ({ children }) => <>{children}</>;

export default StoreTemplate;
