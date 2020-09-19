import React, { useState } from 'react';

import { LoginTemplate } from 'templates';
import { AuthForm } from 'components';

export interface Props {}

const LoginPage: React.FC<Props> = () => {
  const [viewType, setViewType] = useState<'login' | 'registration'>('login');

  const handleViewTypeChange = () => {
    if (viewType === 'login') {
      setViewType('registration');
    } else {
      setViewType('login');
    }
  };

  return (
    <LoginTemplate viewType={viewType} changeFn={handleViewTypeChange}>
      <AuthForm viewType={viewType} />
    </LoginTemplate>
  );
};

export default LoginPage;
