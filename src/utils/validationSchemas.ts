import * as yup from 'yup';

export const registration = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  repeatPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
  policyAccept: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions').required(),
});

export const login = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  policyAccept: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions').required(),
});
