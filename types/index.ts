import { MouseEventHandler } from 'react';

export interface IButtonProps {
  children: React.ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  type?: 'button' | 'submit' | 'reset';
}
