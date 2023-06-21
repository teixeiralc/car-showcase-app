import { CarCatalogue, CarCatalogueHeader, Hero } from '@/components'
import { ISearchParamsProps, TCar } from '@/types'
import { fetchCarDataApi } from '@/utils'

export default async function Home({ searchParams }: ISearchParamsProps) {
  const carsData = await fetchCarDataApi<TCar[]>({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
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
