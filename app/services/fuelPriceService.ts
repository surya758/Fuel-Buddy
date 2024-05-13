import { apiClient } from "@api/apiClient";

const getFuelPrice = async (state: string, city: string) => {
  try {
    const response = await apiClient.get(`${state}/${city}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export { getFuelPrice };