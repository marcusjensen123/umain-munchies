/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const DESKTOP = 1320;
export const TABLET = 956;
export const MOBILE = 375;

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
    width: fit-content;
    height: fit-content;
  `,
};
