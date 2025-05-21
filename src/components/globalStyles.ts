/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const globalStyles = {
  card: (padding: number) => css`
    background-color: #fff;
    border-radius: 8px;
    padding: ${padding}px;
    border: 0.6px solid #ccc;
  `,
  chip: css`
    background-color: #fff;
    border-radius: 8px;
    border: 0.6px solid #ccc;
    padding: 8px 12px;
  `,
};
