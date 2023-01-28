export interface SearchData {
  total_hits: number;
  max_score: number;
  hits: Hit[];
}

export interface Hit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  fields: Fields;
}

export interface Fields {
  item_id: string;
  item_name: string;
  brand_name: string;
  nf_calories: number;
  nf_total_fat: number;
  nf_serving_size_qty: number;
  nf_serving_size_unit: number;
}

export interface RestaurantData {
  name: string;
  brand_id: string;
  fs_id: string | null;
  address: string;
  address2: string | null;
  city: string;
  state: string;
  country: string;
  zip: string;
  phone: string; // maybe null
  website: string;
  guide: string | null; // probably unused because its bad html
  id: number;
  lat: number;
  lng: number;
  created_at: string;
  updated_at: string;
  distance_km: number; // probably inaccurate
}

export interface RestaurantLocationData {
  locations: RestaurantData[];
}
