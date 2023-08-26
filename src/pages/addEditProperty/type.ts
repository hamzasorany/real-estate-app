import { AutocompleteObject } from "@/type";

export interface AddPropertyValues {
  name: string;
  city: AutocompleteObject | null;
  propertyType: AutocompleteObject | null;
  region: AutocompleteObject | null;
  furnish: AutocompleteObject | null;
  address: string;
  detail: string;
  cladding: AutocompleteObject | null;
  features: AutocompleteObject[];
  water_front: boolean;
  images: string[];
  bed_rooms: number;
  bath_rooms: number;
  kitchens: number;
  floors: number;
  floor_level: number;
  sqft_living: number;
  sqft_living_15: number;
  sqft_lot: number;
  sqft_lot_15: number;
  sqft_above: number;
  sqft_basement: number;
  view: number | null;
  condition: number | null;
  grade: number | null;
  yr_built: string;
  yr_renovated: string;
  zip_code: string;
  lat: string;
  long: string;
  north: boolean;
  south: boolean;
  east: boolean;
  west: boolean;
  price: number;
}