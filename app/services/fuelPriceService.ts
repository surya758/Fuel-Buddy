import { apiClient } from "@api/apiClient";

const getFuelPrice = async (state: string, city: string) => {
  try {
    const response = await apiClient.get(`fuel-prices/today/india/${state}/${city}`)
    return response.data
  } catch (error) {
    if (error.response.status === 429) return;
    console.error(error)
  }
}

const getListOfState = async () => {
  try {
    const response = await apiClient.get('list/india/states', {
      params: {
        isoDate: '2022-09-01',
        'fuelTypes[0]': 'petrol'
      },
    })
    return response.data;
  } catch (error) {
    if (error.response.status === 429) return;
    console.error(error)
  }
}

const getListOfCityByState = async (state: string) => {
  try {
    const response = await apiClient.get(`list/india/${state}/cities`, {
      params: {
        isoDate: '2022-09-01',
        'fuelTypes[0]': 'petrol'
      },
    })
    return response.data;
  } catch (error) {
    if (error.response.status === 429) return;
    console.error(error)
  }
}

export { getFuelPrice, getListOfState, getListOfCityByState };