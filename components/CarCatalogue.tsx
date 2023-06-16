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

  const isCarsDataValid = isDataValid(carsData[0])

  return (
    <>
      {!isDataEmpty && isCarsDataValid ? (
        <section className="home__cars-wrapper">
          {carsData.map((car, i) => (
            <CarCard key={i} car={car} />
          ))}
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">No results</h2>
          <p>{carsData?.message}</p>
        </div>
      )}
    </>
  )
}

export default CarCatalogue
