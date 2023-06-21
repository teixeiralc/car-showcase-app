export interface ISearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}

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

// After API normalization
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

interface ISearchParams {
  manufacturer?: string
  year?: number
  fuel?: string
  limit?: number
  model?: string
}

export interface ISearchParamsProps {
  searchParams: ISearchParams
}

export interface ICarCatalogueProps {
  carsData: TCarsData
  isDataEmpty: boolean
  searchParams: ISearchParams
}
