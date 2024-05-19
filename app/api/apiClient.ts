import axios from 'axios'
import { FUEL_PRICE_ENDPOINT, RAPID_API_KEY, RAPID_API_HOST } from '@env'

export const apiClient = axios.create({
  baseURL: "https://daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com/v1/",
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': RAPID_API_HOST
  }
})