import { ValidationRules, UseFormMethods } from 'react-hook-form';

export interface InputProps extends Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
  rules?: ValidationRules;
  type: string;
  id?: string;
  name: string;
  label: string;
}
