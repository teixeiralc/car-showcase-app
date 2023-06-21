import { ICarCatalogueProps, TCar } from '@/types'
import CarCard from './CarCard'
import ShowMore from './ShowMore'

const CarCatalogue = ({
  carsData,
  isDataEmpty,
  searchParams,
}: ICarCatalogueProps) => {
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
        <div className="padding-x max-width">
          <div className="home__cars-wrapper">
            {carsData.map((car, i) => (
              <CarCard key={i} car={car} />
            ))}
          </div>
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > carsData.length}
          />
        </div>
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
