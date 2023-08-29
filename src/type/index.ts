import { PROPERTY_TYPE } from "@/constants/property";

export interface AutocompleteObject {
  id: string;
  label: string;
}
export interface SelectObject {
  value: number;
  label: string;
}
export enum ContractType {
  SELL = 1,
  RENT = 2,
}

export type PropertyTypeKeys = keyof typeof PROPERTY_TYPE;
