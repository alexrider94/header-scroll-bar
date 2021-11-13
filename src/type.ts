/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';

export type HeaderType = {
  visible: boolean;
  height: number;
  children: ReactNode;
  scrollPosition: 'top' | 'bottom';
  time: number;
  isRepeatable: boolean;
};

// eslint-disable-next-line no-shadow
export enum ScrollType {
  Up = 0,
  Down,
  Hold,
}

export interface HeaderScrollBar {
  headerType: HeaderType;
  scrollType: ScrollType;
}
