import { getFuelPrice, getListOfState, getListOfCityByState } from '@services/fuelPriceService';
import { ICity, IFuelPrices, IState } from '@utils/types';
import { useQuery } from '@tanstack/react-query';

type ApiCall<T> = (state?: string, city?: string) => Promise<T>;
type Dependencies = string[];
type Keys = (string | number)[];

const createUseQueryHook = <T>(apiCall: ApiCall<T>, dependencies: Dependencies, keys: Keys = []) => {
  const queryKey = [...keys];
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () => apiCall(...dependencies)
      .then(data => {
        if (data === undefined) throw new Error('Data is undefined')
        return data
      }),
  })

  return { data, isLoading, error };
}

export const useStateList = () => createUseQueryHook<IState>(getListOfState, [], ['listOfState'])
export const useCityList = (state: string) => createUseQueryHook<ICity>(getListOfCityByState, [state], ['listOfCity', state])
export const useFuelPrices = (state: string, city: string) => createUseQueryHook<IFuelPrices>(getFuelPrice, [state, city], ['fuelPrices', state, city])