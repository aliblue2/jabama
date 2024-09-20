export interface PlaceInfo {
  space: number;
  cepacity: number;
  bedrooms: number;
  bathroom: number;
  kitchen: number;
}

export interface PlaceFeatures {
  network: string;
  television: string;
  pool: string;
  cooler: string;
  heater: string;
  parking: string;
}

export interface PlacePolicy {
  pet: string;
  party: string;
  id_cart: string;
  smoking: string;
  accept_per_day: string;
}

interface PlaceRating {
  rate: number;
  count: number;
}

export interface Place {
  id: number;
  title: string;
  description: string;
  price: number;
  place_info: PlaceInfo;
  place_features: PlaceFeatures;
  place_policy: PlacePolicy;
  geo_location: string;
  state: string;
  city: string;
  rate: PlaceRating;
  image: string;
  gallery: string;
}
