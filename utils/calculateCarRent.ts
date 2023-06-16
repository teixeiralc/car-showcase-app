export const calculateCarRent = (cityMpg: number, year: number) => {
  const basePricePerDay = 50 // dollars
  const mileageFactor = 0.1 // mile
  const ageFactor = 0.05 // year

  const mileageRate = cityMpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}
