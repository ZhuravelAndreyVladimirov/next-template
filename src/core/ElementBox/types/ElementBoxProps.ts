type CssProps = React.CSSProperties;

interface ElementBoxStyleProps {
  fz?: CssProps["fontSize"];
  fw?: Fw | CssProps["fontWeight"];
  lh?: CssProps["lineHeight"];
  ff?: CssProps["fontFamily"];
  color?: CssProps["color"];
  fs?: CssProps["fontStyle"];
  font?: CssProps["font"];
  fv?: CssProps["fontVariant"];
  fv_num?: CssProps["fontVariantNumeric"];
  // letter_spacing?: CssProps["letterSpacing"];
  text_align?: CssProps["textAlign"];
  vertical_align?: CssProps["verticalAlign"];
}

interface ElementBoxReactProps
  extends Omit<React.HTMLProps<HTMLElement>, "color"> {}

export interface ElementBoxProps
  extends ElementBoxReactProps,
    ElementBoxStyleProps {
  scale?: number;
  tag?: string;
}

type Fw = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
