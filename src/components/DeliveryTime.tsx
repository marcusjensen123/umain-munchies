import { SetStateAction } from 'react';
import { DELIVERY_TIME_BUCKETS } from '../utils/utils';
import { ActionChip } from './ActionChip';
import { css } from '@emotion/react';

const styles = {
  deliveryTime: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  `,
};

type Props = {
  selectedDeliveryTimeBucket: string | null;
  setSelectedDeliveryTimeBucket: (value: SetStateAction<string | null>) => void;
};
export const DeliveryTime = ({ selectedDeliveryTimeBucket, setSelectedDeliveryTimeBucket }: Props) => {
  return (
    <>
      <h5>Delivery time</h5>
      <div css={styles.deliveryTime}>
        {DELIVERY_TIME_BUCKETS.map(bucket => (
          <ActionChip
            key={bucket.label}
            onClick={() => setSelectedDeliveryTimeBucket(prev => (prev === bucket.label ? null : bucket.label))}
            isActive={selectedDeliveryTimeBucket === bucket.label}
          >
            {bucket.label}
          </ActionChip>
        ))}
      </div>
    </>
  );
};
