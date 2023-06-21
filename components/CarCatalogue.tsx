import { ICarCatalogueProps, TCar } from '@/types'
import CarCard from './CarCard'
import ShowMore from './ShowMore'
import { LIMIT_OF_ITEMS_PER_PAGE } from '@/utils/constants'

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
            pageNumber={
              (searchParams.limit || LIMIT_OF_ITEMS_PER_PAGE) /
              LIMIT_OF_ITEMS_PER_PAGE
            }
            isNext={
              (searchParams.limit || LIMIT_OF_ITEMS_PER_PAGE) > carsData.length
            }
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
