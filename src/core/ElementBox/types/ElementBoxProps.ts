import { FontWidth } from "@/core/ElementBox/types";

export interface ElementBoxProps extends React.HTMLProps<HTMLElement> {
  scale?: number;
  tag?: string;
  fz?: number | string;
  fw?: FontWidth | string;
  lh?: "normal" | number | string;
  ff?: string;
  color?: string;
}
