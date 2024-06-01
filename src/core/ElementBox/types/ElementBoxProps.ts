import { FontWidth } from "@/core/ElementBox/types";

export interface ElementBoxProps extends React.HTMLProps<HTMLElement> {
  tag?: string;
  fs?: number;
  fw?: FontWidth;
}
