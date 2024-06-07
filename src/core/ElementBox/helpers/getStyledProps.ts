import { ElementBoxProps } from "../types";
import { convertSpacing } from "./convertSpacing";

export const getStyledProps = ({
  ff,
  font,
  lh,
  fz,
  fw,
  color,
  fv,
  fs,
  fv_num,
  text_align,
  vertical_align,
  position = "initial",
  //   letter_spacing,
  top,
  right,
  bottom,
  left,
  visibility,
  overflow,
  overflow_x,
  overflow_y,
  zIndex,
  display = "initial",
  flex,
  flex_basis,
  flex_direction,
  flex_grow,
  flex_shrink,
  flex_wrap,
  order,
  gac,
  gap,
  g_cols,
  g_rows,
  gaf,
  gar,
  justify,
  align,
  place,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  my,
  mx,
  mb,
  mt,
  mr,
  ml,
  h,
  h_max,
  h_min,
  w,
  w_max,
  w_min,
  ...props
}: ElementBoxProps) => {
  return [
    {
      top,
      right,
      left,
      bottom,
      d: display,
      visibility,
      overflow,
      overflow_x,
      overflow_y,
      z: zIndex,
      flex,
      flex_basis,
      flex_direction,
      flex_grow,
      flex_shrink,
      flex_wrap,
      order,
      gac,
      gap,
      g_cols,
      g_rows,
      gaf,
      gar,
      justify,
      align,
      place,
      fz,
      fw,
      lh,
      ff,
      c: color,
      p: convertSpacing(p, py, px, pt, pr, pb, pl, props.scale),
      m: convertSpacing(m, my, mx, mt, mr, mb, ml, props.scale),
      fs,
      font,
      fv,
      fv_num,
      t_align: text_align,
      v_align: vertical_align,
      h,
      h_max,
      h_min,
      w,
      w_max,
      w_min,
      pos: position,
    },
    props,
  ];
};
