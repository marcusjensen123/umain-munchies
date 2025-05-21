/** @jsxImportSource @emotion/react */

import { globalStyles } from './globalStyles';
import { ReactNode } from 'react';

type PropsWithChildren = {

  children?: ReactNode;
};

export const ActionChip = ({  children }: PropsWithChildren) => {
  return <button css={globalStyles.chip}>{children}</button>;
};
