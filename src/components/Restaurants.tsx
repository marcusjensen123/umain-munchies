/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Card } from './Card';
import { Restaurant } from '../types';

const styles = {
  grid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  `,
};
type Props = {
  restaurants: Restaurant[];
};

export const Restaurants = ({ restaurants }: Props) => {
  return (
    <div>
      <div css={styles.grid}>
        {restaurants.map((restaurant, index) => {
          if (!restaurant) {
            return <div key={index}>Restaurant not available</div>;
          }

          return <Card key={restaurant.id} restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};
