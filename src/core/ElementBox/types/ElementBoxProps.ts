import { FontWidth } from "@/core/ElementBox/types";

export interface ElementBoxProps extends React.HTMLProps<HTMLElement> {
  tag?: string;
  fs?: number | string;
  fw?: FontWidth;
  lh?: number | string;
  ff?: string;
}
