import { ResultScreen } from '@screens';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorScreenParams, CompositeNavigationProp, RouteProp } from "@react-navigation/native";

import { lightTheme } from "@themes";
import { Dispatch, SetStateAction } from 'react';


export type theme = typeof lightTheme;
export interface IFuelPrices {
  fuel: {
    diesel: {
      currency: string;
      retailPrice: number;
      retailPriceChange: number;
    }
  }
}

export type stateObjectType = {
  stateId: string;
  stateName: string;
}

export type cityObjectType = {
  cityId: string;
  cityName: string;
}

export interface IState {
  states: stateObjectType[];
}

export interface ICity {
  cities: cityObjectType[];
}

export type CalculateStackParamList = {
  Calculate: { state?: string };
  Selection: { screen: string, data?: stateObjectType[] | cityObjectType[] };
};

export type RootStackParamList = {
  CalculateNav: NavigatorScreenParams<CalculateStackParamList>;
  Result: {
    distanceCovered: number;
    fuelEfficiency: number,
    fuelConsumed: number,
    totalCost: number,
  };
};

export type SelectionScreenNavigationProp = CompositeNavigationProp<NativeStackNavigationProp<CalculateStackParamList, "Selection">, NativeStackNavigationProp<RootStackParamList>>;
export type CalculateScreenNavigationProp = CompositeNavigationProp<NativeStackNavigationProp<CalculateStackParamList, "Calculate">, NativeStackNavigationProp<RootStackParamList>>;
export type SelectionScreenRouteProp = RouteProp<CalculateStackParamList, "Selection">
export type CalculateScreenRouteProp = RouteProp<CalculateStackParamList, "Calculate">
export type ResultScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Result">;
export type ResultScreenRouteProp = RouteProp<RootStackParamList, "Result">;

