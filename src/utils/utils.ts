import { Restaurant } from '../types';

export const DELIVERY_TIME_BUCKETS = [
  { label: '0-10 min', min: 0, max: 10 },
  { label: '10-30 min', min: 10, max: 30 },
  { label: '30-60 min', min: 30, max: 60 },
  { label: '1+ hour', min: 60, max: Infinity },
];

export const SORT_OPTIONS = {
  DELIVERY_TIME: 'delivery_time',
  PRICE: 'price',
} as const;
export type SortOption = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];

export const sortRestaurants = (restaurants: Restaurant[], sortOptions: SortOption[]): Restaurant[] => {
  const sorted = [...restaurants];

  return sorted.sort((a, b) => {
    for (const option of sortOptions) {
      let comparison = 0;

      switch (option) {
        case SORT_OPTIONS.PRICE:
          comparison = comparePrice(a, b);
          break;
        case SORT_OPTIONS.DELIVERY_TIME:
          comparison = compareDeliveryTime(a, b);
          break;
        default:
          comparison = 0;
      }

      if (comparison !== 0) return comparison;
    }

    return 0;
  });
};
const comparePrice = (a: Restaurant, b: Restaurant) => {
  const aTier = a.priceTier;
  const bTier = b.priceTier;

  if (aTier === undefined && bTier === undefined) return 0;
  if (aTier === undefined) return 1;
  if (bTier === undefined) return -1;

  return aTier - bTier;
};

const compareDeliveryTime = (a: Restaurant, b: Restaurant) => {
  return a.delivery_time_minutes - b.delivery_time_minutes;
};



