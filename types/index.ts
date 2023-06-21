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

export type TCarAPI = {
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

export type TCar = {
  cityMpg: number
  class: string
  combinationMpg: number
  cylinders: number
  displacement: number
  drive: string
  fuelType: string
  highwayMpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export type TCarsData = (TCar[] & { message?: string }) | null

export interface IFilterProps {
  manufacturer?: string
  year?: number
  fuel?: string
  limit?: number
  model?: string
}

export interface ISearchParams {
  manufacturer?: string
  year?: number
  fuel?: string
  limit?: number
  model?: string
  pageNumber?: number
}

export interface ISearchParamsProps {
  searchParams: ISearchParams
}

export interface ICarCatalogueProps {
  carsData: TCarsData
  isDataEmpty: boolean
  searchParams: ISearchParams
}

interface ICarCatalogueHeaderFilterOptionProps {
  title: string
  value: string
}

export interface ICarCatalogueHeaderFilterProps {
  title: string
  options: ICarCatalogueHeaderFilterOptionProps[]
}
