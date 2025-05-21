import { IsOpenResponse, Restaurant } from '../types';


export async function getRestaurantsData(): Promise<Restaurant[]> {
  try {
    const response = await fetch('http://localhost:4000/restaurants');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.restaurants;
  } catch (error) {
    console.error('Failed to fetch restaurants:', error);
    throw error;
  }
}

export async function getRestaurantById(id: string) {
  try {
    const response = await fetch(`http://localhost:4000/restaurants/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched restaurant data:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch restaurant details:', error);
    throw error;
  }
}

export async function getFilter() {
  try {
    const response = await fetch('http://localhost:4000/filter');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched filter data:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch filter:', error);
    throw error;
  }
}

export async function getFilterById(id: string) {
  try {
    const response = await fetch(`http://localhost:4000/filter/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched filter data:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch filter details:', error);
    throw error;
  }
}

export async function isRestaurantOpen(id: string): Promise<IsOpenResponse> {
    const res = await fetch(`http://localhost:4000/open/${id}`);
    const json = await res.json();
    return json;
  }
