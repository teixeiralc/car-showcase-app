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

export interface ISearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}

// Car data types

export type TCar = {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export interface ICarCatalogueProps {
  carsData: TCar[] & { message?: string }
  isDataEmpty: boolean
}
