import { ElementBoxProps } from "../types";

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
  //   letter_spacing,
  ...props
}: ElementBoxProps) => {
  return [
    {
      fz,
      fw,
      lh,
      ff,
      c: color,
      fs,
      font,
      fv,
      fv_num,
      text_align,
      vertical_align,
    },
    props,
  ];
};
