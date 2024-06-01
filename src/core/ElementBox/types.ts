export interface ElementBoxProps extends React.HTMLProps<HTMLElement> {
  tag?: string;
  fs?: Fs;
  fw?: FontWidth;
}

type Fs = "sm" | "base" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "lg";
type FontWidth =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";
