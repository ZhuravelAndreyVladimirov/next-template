import { FontWidth } from "@/core/ElementBox/types";

export interface BoxStyle extends React.CSSProperties {
  "--fw"?: FontWidth;
  "--fz"?: string;
  "--lh"?: string;
  "--ff"?: string;
  "--c"?: string;
}
