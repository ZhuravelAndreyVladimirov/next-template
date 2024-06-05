type CssProps = React.CSSProperties;

interface Typography {
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
interface Layout {
  position?: CssProps["position"];
  top?: CssProps["top"];
  right?: CssProps["right"];
  bottom?: CssProps["bottom"];
  left?: CssProps["left"];
  visibility?: CssProps["visibility"];
  overflow?: CssProps["overflow"];
  overflow_x?: CssProps["overflowX"];
  overflow_y?: CssProps["overflowY"];
  zIndex?: CssProps["zIndex"];
  display?: CssProps["display"];
}

interface ElementBoxStyleProps extends Typography, Layout {}

interface ElementBoxReactProps
  extends Omit<React.HTMLProps<HTMLElement>, "color"> {}

export interface ElementBoxProps
  extends ElementBoxReactProps,
    ElementBoxStyleProps {
  scale?: number;
  tag?: string;
}

type Fw = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
