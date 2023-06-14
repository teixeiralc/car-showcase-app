import { MouseEventHandler } from 'react';

export interface IButtonProps {
  children: React.ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface ISearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

// Car data types

export type TCar = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export interface ICarCatalogueProps {
  carsData: TCar[] & { message?: string };
  isDataEmpty: boolean;
}
