/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { globalStyles } from './globalStyles';
import { FilterCategories } from '../types';
import { SetStateAction } from 'react';
import { useDeviceType } from '../hooks/useDeviceType';

const styles = {
  container: (isMobile: boolean) => css`
    display: flex;
    margin-top: ${isMobile ? '16' : '0'}px;
    gap: 8px;
  `,
  cards: (isActive: boolean) => css`
    display: flex;
    gap: 8px;
    flex-direction: row;
    height: 100%;
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    padding: 8px;
    border: ${isActive ? '  1px solid green' : '0.6px solid #ccc'};
  `,
  noMargin: css`
    margin: 0;
  `,
};

type Props = {
  filterCategories: FilterCategories[];
  selectedFoodType: string | null;
  setSelectedFoodType: (value: SetStateAction<string | null>) => void;
};

export const Categories = ({ filterCategories, selectedFoodType, setSelectedFoodType }: Props) => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';
  if (!filterCategories) return <></>;
  return (
    <div css={styles.container(isMobile)}>
      {filterCategories.map(category => {
        const isActive = category.name === selectedFoodType;
        return (
          <div
            key={category.id}
            css={styles.cards(isActive)}
            onClick={() => setSelectedFoodType(prev => (prev === category.name ? null : category.name))}
          >
            <h5 css={styles.noMargin}>{category.name}</h5>
            <img src={category.image_url} style={{ width: '50px', height: '50px', borderRadius: '8px' }} />
          </div>
        );
      })}
    </div>
  );
};
