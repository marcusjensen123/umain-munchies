/** @jsxImportSource @emotion/react */

import { globalStyles } from './globalStyles';

type PropsWithChildren = {
  onClick?: () => void;
  isActive?: boolean;
  children?: React.ReactNode;
};

export const ActionChip = ({ children, onClick, isActive }: PropsWithChildren) => {
  return (
    <button
      onClick={onClick}
      css={[
        globalStyles.chip,
        isActive && { backgroundColor: '#000', color: '#fff' }, // example active style
      ]}
    >
      {children}
    </button>
  );
};
