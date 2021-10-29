import { ReactNode } from "react";

export type HeaderType = {
  width: number;
  visible: boolean;
  onChangeVisible: () => void;
  height: number;
  children: ReactNode;
};
