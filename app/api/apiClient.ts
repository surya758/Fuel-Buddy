import axios from 'axios'
import { FUEL_PRICE_ENDPOINT, RAPID_API_KEY, RAPID_API_HOST } from '@env'

export const apiClient = axios.create({
  baseURL: FUEL_PRICE_ENDPOINT,
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': RAPID_API_HOST
  }
})