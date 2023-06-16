import { TCar, TCarAPI } from '@/types'

export default function normalizeCarData(car: TCarAPI): TCar {
  return {
    cityMpg: car.city_mpg,
    class: car.class,
    combinationMpg: car.combination_mpg,
    cylinders: car.cylinders,
    displacement: car.displacement,
    drive: car.drive,
    fuelType: car.fuel_type,
    highwayMpg: car.highway_mpg,
    make: car.make,
    model: car.model,
    transmission: car.transmission,
    year: car.year,
  }
}
