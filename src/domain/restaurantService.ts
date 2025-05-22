import { getFilterById, getRestaurantPriceRange, getRestaurantsData, isRestaurantOpen } from '../api/restaurantApi';
import { Restaurant } from '../types';

export async function getRestaurants(): Promise<Restaurant[]> {
  const data = await getRestaurantsData();
  return decorateResponse(data);
}

async function decorateResponse(restaurants: Restaurant[]): Promise<Restaurant[]> {
  const foo = Promise.all(
    restaurants.map(async restaurant => {
      const isOpen = (await isRestaurantOpen(restaurant.id)).is_open;
      const priceRangeStr = (await getRestaurantPriceRange(restaurant.price_range_id)).range;
      const foodType = (await getFilterById(restaurant.filter_ids[0])).name;

      const priceTier = priceRangeStr.length;

      return {
        ...restaurant,
        isOpen,
        priceRange: priceRangeStr,
        priceTier,
        foodType,
      };
    })
  );
  return foo;
}
