import { useState, useEffect } from 'react';
import { getFuelPrice } from '@services/fuelPriceService';

const useFuelPrices = (state: string, city: string) => {
  const [fuelPrices, setFuelPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFuelPrices = async () => {
      setIsLoading(true);
      try {
        const prices = await getFuelPrice(state, city);
        setFuelPrices(prices);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFuelPrices();
  }, []);

  return { fuelPrices, isLoading, error };
};

export default useFuelPrices;