import { CarCatalogue, CarCatalogueHeader, Hero } from '@/components'
import { ISearchParamsProps, TCar } from '@/types'
import { fetchCarDataApi } from '@/utils'
import { LIMIT_OF_ITEMS_PER_PAGE } from '@/utils/constants'

export default async function Home({ searchParams }: ISearchParamsProps) {
  const carsData = await fetchCarDataApi<TCar[]>({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || LIMIT_OF_ITEMS_PER_PAGE,
    model: searchParams.model || '',
  })

  const isDataEmpty =
    !Array.isArray(carsData) || carsData.length < 1 || !carsData

  return (
    <main className="overflow-hidden">
      <Hero />
      <section>
        <CarCatalogueHeader />
        <CarCatalogue
          carsData={carsData}
          isDataEmpty={isDataEmpty}
          searchParams={searchParams}
        />
      </section>
    </main>
  )
}
