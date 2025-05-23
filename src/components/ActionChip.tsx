/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

type PropsWithChildren = {
  onClick?: () => void;
  isActive?: boolean;
  children?: React.ReactNode;
};

const chip = css`
  background-color: #fff;
  border-radius: 8px;
  border: 0.6px solid #ccc;
  padding: 8px 12px;
  width: fit-content;
  height: fit-content;
`;

export const ActionChip = ({ children, onClick, isActive }: PropsWithChildren) => {
  return (
    <button
      onClick={onClick}
      css={[
        chip,
        isActive && { backgroundColor: '#000', color: '#fff' }, // example active style
      ]}
    >
      {children}
    </button>
  );
};
