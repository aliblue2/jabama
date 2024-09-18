interface PlaceInfo {
  space: number;
  cepacity: number;
  bedrooms: number;
  bathroom: number;
  kitchen: number;
}

interface PlaceFeatures {
  network: boolean;
  television: boolean;
  pool: boolean;
  cooler: boolean;
  heater: boolean;
  parking: boolean;
}

interface PlacePolicy {
  pet: boolean;
  party: boolean;
  id_cart: boolean;
  smoking: boolean;
  accept_per_day: boolean;
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
