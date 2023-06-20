import { CarCatalogue, CarCatalogueHeader, Hero } from '@/components'
import { ISearchParamsProps, TCar } from '@/types'
// import { fetchCarDataApi } from '@/utils'
import normalizeCarData from '@/utils/normalizeCarData'

export default async function Home({ searchParams }: ISearchParamsProps) {
  const carsData = [
    {
      city_mpg: 23,
      class: 'compact car',
      combination_mpg: 24,
      cylinders: 4,
      displacement: 1.6,
      drive: 'fwd',
      fuel_type: 'gas',
      highway_mpg: 26,
      make: 'toyota',
      model: 'corolla',
      transmission: 'a',
      year: 1993,
    },
    {
      city_mpg: 23,
      class: 'compact car',
      combination_mpg: 24,
      cylinders: 4,
      displacement: 1.6,
      drive: 'fwd',
      fuel_type: 'gas',
      highway_mpg: 26,
      make: 'toyota',
      model: 'corolla',
      transmission: 'a',
      year: 1993,
    },
    {
      city_mpg: 23,
      class: 'compact car',
      combination_mpg: 24,
      cylinders: 4,
      displacement: 1.6,
      drive: 'fwd',
      fuel_type: 'gas',
      highway_mpg: 26,
      make: 'toyota',
      model: 'corolla',
      transmission: 'a',
      year: 1993,
    },
  ].map(normalizeCarData)

  // const carsData = await fetchCarDataApi<TCar[]>({
  //   manufacturer: searchParams.manufacturer || '',
  //   year: searchParams.year || 2023,
  //   fuel: searchParams.fuel || '',
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || '',
  // })

  const isDataEmpty =
    !Array.isArray(carsData) || carsData.length < 1 || !carsData

  return (
    <main className="overflow-hidden">
      <Hero />
      <section>
        <CarCatalogueHeader />
        <CarCatalogue carsData={carsData} isDataEmpty={isDataEmpty} />
      </section>
    </main>
  )
}
