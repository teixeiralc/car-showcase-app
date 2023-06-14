const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=toyota';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4eae762accmsh55ccaa169ee0265p19deafjsn111874537a0a',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
};

export async function fetchApi() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}
