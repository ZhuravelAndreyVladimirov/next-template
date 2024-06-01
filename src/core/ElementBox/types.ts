export interface ElementBoxProps extends React.HTMLProps<HTMLElement> {
  tag?: string;
  fs?: Fs;
}

type Fs = "sm" | "base" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "lg";
