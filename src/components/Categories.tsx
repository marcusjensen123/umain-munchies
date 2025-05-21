/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { globalStyles } from './globalStyles';

const styles = {
  container: css`
    display: flex;
    gap: 8px;
    flex-direction: row;
  `,

};

export const Categories = () => {
  return (
    <div css={styles.container}>
      <div css={globalStyles.card(8)}>
        <h5>Hamburgers</h5>
      </div>
      <div css={globalStyles.card(8)}>
        <h5>Pizza</h5>
      </div>
      <div css={globalStyles.card(8)}>
        <h5>Taco's</h5>
      </div>
      <div css={globalStyles.card(8)}>
        <h5>Coffee</h5>
      </div>
      <div css={globalStyles.card(8)}>
        <h5>Fries</h5>
      </div>
    </div>
  );
};
