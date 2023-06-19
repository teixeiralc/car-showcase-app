import { IFilterProps } from '@/types'
import normalizeCarData from './normalizeCarData'

export async function fetchCarDataApi<T>(
  filters: IFilterProps,
): Promise<T | null> {
  const { manufacturer, year, fuel, limit, model } = filters

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}
  &fuel_type=${fuel}&model=${model}&limit=${limit}`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  }

  try {
    const response = await fetch(url, options)
    if (!response) throw new Error('ERROR: No response from API')
    const result = await response.json()
    return result.map(normalizeCarData)
  } catch (err) {
    if (err instanceof Error) console.error('fetchData: ' + err.message)
    return null
  }
}
