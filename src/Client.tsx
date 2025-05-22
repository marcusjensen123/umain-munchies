/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Categories } from './components/Categories';
import { Restaurants } from './components/Restaurants';
import { useEffect, useMemo, useState } from 'react';
import { useDeviceType } from './hooks/useDeviceType';
import { FilterCategories, Restaurant } from './types';
import { getRestaurants } from './domain/restaurantService';
import { getFilter } from './api/restaurantApi';
import { DELIVERY_TIME_BUCKETS } from './utils/utils';
import { SidePanel } from './components/SidePanel';
import { DeliveryTime } from './components/DeliveryTime';

const styles = {
  mainContainer: css`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  `,
  wrapper: (isMobile: boolean) => css`
    height: 100%;
    padding-inline: ${isMobile ? '0' : '48'}px;
  `,
  column: css`
    display: flex;
    gap: 16px;
    height: 100%;
  `,

  card: css`
    background-color: #fff;
  `,
  priceContainer: css`
    display: flex;
    gap: 8px;
    flex-direction: row;
  `,
};
export const Client = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filterCategories, setFilterCategories] = useState<FilterCategories[]>([]);
  const [loading, setLoading] = useState(false);

  const [selectedPriceTier, setSelectedPriceTier] = useState<number | null>(null);
  const [selectedFoodType, setSelectedFoodType] = useState<string | null>(null);
  const [selectedDeliveryTimeBucket, setSelectedDeliveryTimeBucket] = useState<string | null>(null);

  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';
  const isMobile = deviceType === 'mobile';

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [restaurantsData, filterData] = await Promise.all([getRestaurants(), getFilter()]);

        setRestaurants(restaurantsData);
        setFilterCategories(filterData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredAndSortedRestaurants = useMemo(() => {
    let result = [...restaurants];

    if (selectedPriceTier !== null) {
      result = result.filter(r => r.priceTier === selectedPriceTier);
    }

    if (selectedDeliveryTimeBucket) {
      const bucket = DELIVERY_TIME_BUCKETS.find(b => b.label === selectedDeliveryTimeBucket);
      if (bucket) {
        result = result.filter(r => r.delivery_time_minutes >= bucket.min && r.delivery_time_minutes < bucket.max);
      }
    }

    if (selectedFoodType !== null) {
      result = result.filter(r => r.foodType === selectedFoodType);
    }

    return result;
  }, [restaurants, selectedPriceTier, selectedDeliveryTimeBucket, selectedFoodType]);

  const loaderElement = <div>Loading...</div>;

  let categoriesToShow = filterCategories;
  if (deviceType === 'mobile') {
    categoriesToShow = filterCategories.slice(0, 2);
  } else if (deviceType === 'tablet') {
    categoriesToShow = filterCategories.slice(0, 4);
  }

  return (
    <div css={styles.mainContainer}>
      <div css={styles.wrapper(isMobile)}>
        <h1>Munchies</h1>

        <div css={styles.column}>
          {isDesktop && (
            <SidePanel
              selectedPriceTier={selectedPriceTier}
              selectedDeliveryTimeBucket={selectedDeliveryTimeBucket}
              selectedFoodType={selectedFoodType}
              setSelectedDeliveryTimeBucket={setSelectedDeliveryTimeBucket}
              setSelectedFoodType={setSelectedFoodType}
              setSelectedPriceTier={setSelectedPriceTier}
            />
          )}
          <div>
            {isMobile && (
              <DeliveryTime
                selectedDeliveryTimeBucket={selectedDeliveryTimeBucket}
                setSelectedDeliveryTimeBucket={setSelectedDeliveryTimeBucket}
              />
            )}
            {loading ? (
              loaderElement
            ) : (
              <Categories filterCategories={categoriesToShow} setSelectedFoodType={setSelectedFoodType} selectedFoodType={selectedFoodType} />
            )}
            <h1>Restaurants</h1>
            {loading ? loaderElement : <Restaurants restaurants={filteredAndSortedRestaurants} />}
          </div>
        </div>
      </div>
    </div>
  );
};
