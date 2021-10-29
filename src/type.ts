import { ReactNode } from "react";

export type HeaderType = {
  width: number;
  visible: boolean;
  onChangeVisible: () => void;
  height: number;
  children: ReactNode;
};

export enum ScrollType {
  up,
  down,
  hold
}
