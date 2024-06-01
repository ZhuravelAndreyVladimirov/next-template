import { FontWidth } from "@/core/ElementBox/types";

export interface ElementBoxProps extends React.HTMLProps<HTMLElement> {
  tag?: string;
  fz?: number | string;
  fw?: FontWidth;
  lh?: number | string;
  ff?: string;
  color?: string;
}
