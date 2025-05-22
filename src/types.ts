export type Restaurant = {
  id: string;
  name: string;
  rating: number;
  filter_ids: string[];
  image_url: string;
  delivery_time_minutes: number;
  price_range_id: string;
  priceRange?: string;
  isOpen?: boolean;
  priceTier?: number;
  foodType?: string;
};
export type PriceRangeResponse = {
  id: string;
  range: string;
};
export type IsOpenResponse = {
  restaurant_id: string;
  is_open: boolean;
};
export type FilterCategories = {
  id: string;
  name: string;
  image_url: string;
};
