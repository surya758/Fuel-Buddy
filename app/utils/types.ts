import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorScreenParams, CompositeNavigationProp, RouteProp } from "@react-navigation/native";

import { lightTheme } from "@themes";


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

export type CalculateStackParamList = {
  Calculate: undefined;
  Selection: undefined;
};

export type RootStackParamList = {
  CalculateNav: NavigatorScreenParams<CalculateStackParamList>;
  Result: undefined;
};

export type SelectionScreenNavigationProp = CompositeNavigationProp<NativeStackNavigationProp<CalculateStackParamList, "Selection">, NativeStackNavigationProp<RootStackParamList>>;
export type CalculateScreenNavigationProp = CompositeNavigationProp<NativeStackNavigationProp<CalculateStackParamList, "Calculate">, NativeStackNavigationProp<RootStackParamList>>;
export type SelectionScreenRouteProp = RouteProp<CalculateStackParamList, "Selection">
export type CalculateScreenRouteProp = RouteProp<CalculateStackParamList, "Calculate">

