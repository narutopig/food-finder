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

export interface Photo {
  thumb: string;
  highres?: any;
  is_user_uploaded?: boolean;
}

export interface Product {
  food_name: string;
  serving_unit: string;
  nix_brand_id: string;
  brand_name_item_name: string;
  serving_qty: number;
  nf_calories: number;
  photo: Photo;
  brand_name: string;
  region: number;
  brand_type: number;
  nix_item_id: string;
  locale: string;
}

export interface ErrorResponse {
  message: string;
}

export interface Restaurant {
  name: string;
  id: string;
  restaurant: RestaurantData;
  products: Product[];
}
