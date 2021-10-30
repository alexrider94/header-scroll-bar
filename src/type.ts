/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';

export type HeaderType = {
  width: number;
  visible: boolean;
  onChangeVisible: () => void;
  height: number;
  children: ReactNode;
};

// eslint-disable-next-line no-shadow
export enum ScrollType {
  Up = 0,
  Down,
  Hold,
}
