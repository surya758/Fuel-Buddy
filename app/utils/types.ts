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