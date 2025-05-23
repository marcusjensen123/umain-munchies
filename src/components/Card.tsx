/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Restaurant } from '../types';
import { ActionChip } from './ActionChip';
import { formatTime } from '../utils/utils';

const styles = {
  container: (isOpen: boolean) => css`
    position: relative;
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    border: 0.6px solid #ccc;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    opacity: ${isOpen ? 1 : 0.5};
    transition: opacity 0.3s ease;
  `,
  footer: css`
    display: flex;
    justify-content: space-between;
  `,
  button: css`
    background-color: #00703a;
    color: #fff;
    border: none;
    border-radius: 88px;
    width: 32px;
    height: 32px;
  `,
  noMargin: css`
    margin: 0;
  `,
  chipContainer: css`
    display: flex;
    gap: 8px;
    flex-direction: row;
  `,
  wrapper: css`
    display: flex;
    justify-content: space-between;
  `,
  greenDot: (isOpen: boolean) => css`
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 8px;
    background-color: ${isOpen ? '#00703A' : '#000000'};
    border-radius: 50%;
  `,
};

type Props = {
  restaurant: Restaurant;
};

export const Card = ({ restaurant }: Props) => {
  const { name, isOpen, delivery_time_minutes } = restaurant;

  const deliveryTime = formatTime(delivery_time_minutes);
  const content = (
    <div>
      <span css={styles.greenDot(isOpen ?? true)} />
      <span>{isOpen ? 'Open' : 'Closed'}</span>
    </div>
  );

  return (
    <div css={styles.container(isOpen ?? true)}>
      <div css={styles.wrapper}>
        <div css={styles.chipContainer}>
          <ActionChip>{content}</ActionChip>
          {isOpen && <ActionChip>{deliveryTime}</ActionChip>}
        </div>
        <img src={restaurant.image_url} alt={name} style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
      </div>
      <div css={styles.footer}>
        <h3 css={styles.noMargin}>{name}</h3>
        <button css={styles.button}>→</button>
      </div>
    </div>
  );
};
