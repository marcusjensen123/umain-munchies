/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Restaurant } from '../types';
import { ActionChip } from './ActionChip';

const styles = {
  container: css`
    height: 202px;
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    border: 0.6px solid #ccc;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
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
  const { id, name, rating, filter_ids, image_url, delivery_time_minutes, price_range_id, isOpen } = restaurant;

  const content = (
    <div>
      <span css={styles.greenDot(isOpen ?? true)} />
      <span>{isOpen ? 'Open' : 'Closed'}</span>
    </div>
  );

  return (
    <div css={styles.container}>
      <div css={styles.chipContainer}>
        <ActionChip>{content}</ActionChip>
       {isOpen ?  <ActionChip>{'5-10 min'}</ActionChip> : <></> }
      </div>
      <div css={styles.footer}>
        <h3 css={styles.noMargin}>{name}</h3>
        <button css={styles.button}>→</button>
      </div>
    </div>
  );
};
