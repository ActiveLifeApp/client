import { ValidationRules, UseFormMethods } from 'react-hook-form';

export interface CheckboxProps extends Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
  rules?: ValidationRules;
  label: string;
  checked?: boolean;
  name?: string;
  id?: string;
}
