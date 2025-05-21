/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Categories } from './components/Categories';
import { globalStyles } from './components/globalStyles';
import { Restaurants } from './components/Restaurants';
import { ActionChip } from './components/ActionChip';
import { useEffect, useState } from 'react';

import { Restaurant } from './types';
import { getRestaurants } from './domain/restaurantService';

const styles = {
  mainContainer: css`
    width: 1440px;
    display: flex;
    padding-inline: 48px;
  `,
  column: css`
    display: flex;
    gap: 16px;
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getRestaurants();

        setRestaurants(data);
      } catch (error) {
        console.error('Failed to fetch restaurants:', error);
      } finally {
        console.log('foo:', loading);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div css={styles.mainContainer}>
      <div>
        <h1>Munchies</h1>

        <div css={styles.column}>
          <div css={globalStyles.card(16)}>
            <div css={styles.card}>
              <h2>Filter</h2>
              <h5>Food category</h5>
              <div>
                <ActionChip>Hamburger</ActionChip>
                <ActionChip>Pizza</ActionChip>
                <ActionChip>Taco's</ActionChip>
                <ActionChip>Coffe</ActionChip>
              </div>
              <div>
                <h5>Delivery time</h5>
                <div>
                  <ActionChip>0-10 min</ActionChip>
                  <ActionChip>10-30 min</ActionChip>
                  <ActionChip>30-60 min</ActionChip>
                  <ActionChip>1 hour</ActionChip>
                </div>
              </div>
              <div>
                <h5>Price</h5>
                <div css={styles.priceContainer}>
                  <ActionChip>$</ActionChip>
                  <ActionChip>$$</ActionChip>
                  <ActionChip>$$$</ActionChip>
                  <ActionChip>$$$$</ActionChip>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Categories />
            <h1>Restaurants</h1>
            {loading ? <div>Loading...</div> : <Restaurants restaurants={restaurants} />}
          </div>
        </div>
      </div>
    </div>
  );
};
