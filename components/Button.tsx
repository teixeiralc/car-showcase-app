'use client';

import Image from 'next/image';
import { IButtonProps } from '@/types';

const Button = ({
  containerStyles,
  handleClick,
  type,
  children,
}: IButtonProps) => {
  return (
    <button
      disabled={false}
      type={type ?? 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{children}</span>
    </button>
  );
};

export default Button;
