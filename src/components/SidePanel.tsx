/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ActionChip } from './ActionChip';
import { DELIVERY_TIME_BUCKETS } from '../utils/utils';
import { SetStateAction } from 'react';
import { useDeviceType } from '../hooks/useDeviceType';
import { MOBILE } from '../utils/breakpoints';
import { DeliveryTime } from './DeliveryTime';

const styles = {
  container: css`
    display: flex;
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    border: 0.6px solid #ccc;
  `,

  column: css`
    display: flex;
    gap: 16px;
    height: 100%;
  `,

  card: css`
    background-color: #fff;
  `,
  foodTypes: css`
    display: flex;
    gap: 8px;
    flex-direction: column;
  `,
  chip: css`
    width: fit-content;
  `,
  priceContainer: css`
    @media (max-width: 1250px) {
      flex-direction: column;
    }
    display: flex;
    gap: 8px;
  `,
};

type Props = {
  selectedPriceTier: number | null;
  selectedFoodType: string | null;
  selectedDeliveryTimeBucket: string | null;
  setSelectedPriceTier: (value: SetStateAction<number | null>) => void;
  setSelectedFoodType: (value: SetStateAction<string | null>) => void;
  setSelectedDeliveryTimeBucket: (value: SetStateAction<string | null>) => void;
};

export const SidePanel = ({
  selectedPriceTier,
  selectedFoodType,
  selectedDeliveryTimeBucket,
  setSelectedDeliveryTimeBucket,
  setSelectedFoodType,
  setSelectedPriceTier,
}: Props) => {
  return (
    <div css={styles.container}>
      <div css={styles.card}>
        <h2>Filter</h2>
        <h5>Food category</h5>
        <div css={styles.foodTypes}>
          {['Hamburger', 'Pizza', "Taco's", 'Coffee'].map(type => (
            <ActionChip
              key={type}
              onClick={() => setSelectedFoodType(prev => (prev === type ? null : type))}
              isActive={selectedFoodType === type}
            >
              {type}
            </ActionChip>
          ))}
        </div>

        <DeliveryTime
          selectedDeliveryTimeBucket={selectedDeliveryTimeBucket}
          setSelectedDeliveryTimeBucket={setSelectedDeliveryTimeBucket}
        />

        <h5>Price</h5>
        <div css={styles.priceContainer}>
          {[1, 2, 3, 4].map(tier => (
            <ActionChip
              key={tier}
              onClick={() => setSelectedPriceTier(prev => (prev === tier ? null : tier))}
              isActive={selectedPriceTier === tier}
            >
              {'$'.repeat(tier)}
            </ActionChip>
          ))}
        </div>
      </div>
    </div>
  );
};
