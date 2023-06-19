import { ICarCatalogueProps, TCar } from '@/types'
import CarCard from './CarCard'

const CarCatalogue = ({ carsData, isDataEmpty }: ICarCatalogueProps) => {
  function isDataValid(value: unknown): value is TCar {
    if (value && typeof value === 'object' && 'make' in value) {
      return true
    } else {
      return false
    }
  }

  let isCarsDataValid
  if (carsData) {
    isCarsDataValid = isDataValid(carsData[0])
  }

  return (
    <>
      {carsData && !isDataEmpty && isCarsDataValid ? (
        <section className="home__cars-wrapper padding-x max-width">
          {carsData.map((car, i) => (
            <CarCard key={i} car={car} />
          ))}
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-xl font-bold text-black">No results</h2>
          <p>{carsData?.message}</p>
        </div>
      )}
    </>
  )
}

export default CarCatalogue
