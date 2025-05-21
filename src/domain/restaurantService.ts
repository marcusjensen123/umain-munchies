
import { getRestaurantsData, isRestaurantOpen } from '../api/restaurantApi';
import { Restaurant } from '../types';

export async function getRestaurants(): Promise<Restaurant[]> {
  const data = await getRestaurantsData();
  return decorateResponse(data);
}

async function decorateResponse( restaurants: Restaurant[] ): Promise<Restaurant[]> {
const foo = 
Promise.all(
    restaurants.map(async (restaurant) => ({
      ...restaurant,
      isOpen: (await isRestaurantOpen(restaurant.id)).is_open,
    }))
  );
console.log('foo:', foo);
  return foo
}