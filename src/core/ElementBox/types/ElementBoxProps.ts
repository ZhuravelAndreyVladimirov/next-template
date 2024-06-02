export interface ElementBoxStyleProps {
  fz?: React.CSSProperties["fontSize"];
  fw?: React.CSSProperties["fontWeight"];
  lh?: React.CSSProperties["lineHeight"];
  ff?: React.CSSProperties["fontFamily"];
  color?: React.CSSProperties["color"];
}

interface ElementBoxReactProps
  extends Omit<React.HTMLProps<HTMLElement>, "color"> {}

export interface ElementBoxProps
  extends ElementBoxReactProps,
    ElementBoxStyleProps {
  scale?: number;
  tag?: string;
}
