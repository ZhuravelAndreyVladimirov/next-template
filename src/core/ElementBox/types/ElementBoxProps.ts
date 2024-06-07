type Fw = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
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

interface GridFlex {
  flex?: CssProps["flex"];
  flex_basis?: CssProps["flexBasis"];
  flex_direction?: CssProps["flexDirection"];
  flex_wrap?: CssProps["flexWrap"];
  flex_grow?: CssProps["flexGrow"];
  flex_shrink?: CssProps["flexShrink"];
  order?: CssProps["order"];
  g_cols?: CssProps["gridTemplateColumns"];
  g_rows?: CssProps["gridTemplateRows"];
  gaf?: CssProps["gridAutoFlow"];
  gac?: CssProps["gridAutoColumns"];
  gar?: CssProps["gridAutoRows"];
  gap?: CssProps["gap"];
  justify?: CssProps["justifyContent"];
  align?: CssProps["alignItems"];
  place?: CssProps["placeContent"];
}

interface Spacing {
  p?: CssProps["padding"];
  px?: CssProps["padding"];
  py?: CssProps["padding"];
  pt?: CssProps["padding"];
  pr?: CssProps["padding"];
  pb?: CssProps["padding"];
  pl?: CssProps["padding"];
  m?: CssProps["margin"];
  mx?: CssProps["margin"];
  my?: CssProps["margin"];
  mt?: CssProps["margin"];
  mr?: CssProps["margin"];
  mb?: CssProps["margin"];
  ml?: CssProps["margin"];
}

interface Sizing {
  w?: CssProps["width"];
  w_max?: CssProps["maxWidth"];
  w_min?: CssProps["minWidth"];
  h?: CssProps["height"];
  h_max?: CssProps["maxHeight"];
  h_min?: CssProps["minHeight"];
}

interface ElementBoxStyleProps
  extends Typography,
    Layout,
    GridFlex,
    Spacing,
    Sizing {}

interface ElementBoxReactProps
  extends Omit<React.HTMLProps<HTMLElement>, "color"> {}

export interface ElementBoxProps
  extends ElementBoxReactProps,
    ElementBoxStyleProps {
  scale?: number;
  tag?: string;
}
