import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { Input } from 'components';
import * as schema from 'utils/validationSchemas';
import { addUser } from 'data/auth';
import { StyledForm, StyledCheckbox, StyledButton } from './AuthForm.styled';
import { AuthFormProps } from './AuthForm.model';

type Inputs = {
  email: string;
  password: string;
  repeatPassword: string;
  policyAccept: boolean;
};

const AuthForm: React.FC<AuthFormProps> = ({ viewType }) => {
  const dispatch = useDispatch();

  const { handleSubmit, register, errors } = useForm<Inputs>({
    resolver: yupResolver(viewType === 'login' ? schema.login : schema.registration),
  });
  const onSubmit = (data: Inputs) => {
    dispatch(addUser({ email: data.email, password: data.password }));
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="Email"
        name="email"
        id="email"
        register={register}
        errors={errors.email}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        id="password"
        register={register}
        errors={errors.password}
      />
      {viewType === 'registration' && (
        <Input
          type="password"
          label="Repeat password"
          name="repeatPassword"
          id="repeatPassword"
          register={register}
          errors={errors.repeatPassword}
        />
      )}
      <StyledCheckbox
        label="I accept the Privacy Policy, Cookies and Terms."
        name="policyAccept"
        id="policyAccept"
        register={register}
        errors={errors.policyAccept}
      />
      <StyledButton type="submit">{viewType === 'login' ? 'Sign In' : 'Sign up'}</StyledButton>
    </StyledForm>
  );
};

export default AuthForm;
