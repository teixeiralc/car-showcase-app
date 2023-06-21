'use client'

import Image from 'next/image'

import { MouseEventHandler, ReactNode } from 'react'

type TButtonIcon = {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
}
export interface IButtonProps {
  children: ReactNode
  handleClick?: MouseEventHandler<HTMLButtonElement>
  containerStyles?: string
  textStyles?: string
  leftIcon?: TButtonIcon
  rightIcon?: TButtonIcon
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button = ({
  containerStyles,
  handleClick,
  type,
  children,
  textStyles,
  leftIcon,
  rightIcon,
  disabled,
}: IButtonProps) => {
  return (
    <button
      disabled={disabled ?? false}
      type={type ?? 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {leftIcon && (
        <div className="relative h-6 w-6">
          <Image
            src={leftIcon.src}
            alt={leftIcon.alt}
            width={leftIcon.width}
            height={leftIcon.height}
            fill={leftIcon.fill}
            className="object-contain"
          />
        </div>
      )}
      <span className={`flex-1 ${textStyles}`}>{children}</span>
      {rightIcon && (
        <div className="relative h-6 w-6">
          <Image
            src={rightIcon.src}
            alt={rightIcon.alt}
            width={rightIcon.width}
            height={rightIcon.height}
            fill={rightIcon.fill}
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
}

export default Button
