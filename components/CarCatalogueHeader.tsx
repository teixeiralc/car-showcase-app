import { fuels, yearsOfProduction } from '@/utils/constants'
import Filter from './Filter'
import SearchBar from './SearchBar'

const CarCatalogueHeader = () => {
  return (
    <div className="padding-x padding-y max-width mt-12" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <Filter title="fuel" options={fuels} />
          <Filter title="year" options={yearsOfProduction} />
        </div>
      </div>
    </div>
  )
}

export default CarCatalogueHeader
