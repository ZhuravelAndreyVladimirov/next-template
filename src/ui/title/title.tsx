import {
  Title as Heading,
  TitleProps as HeadingProps,
  TitleOrder,
} from "@mantine/core";

export interface TitleProps extends Omit<HeadingProps, "variant"> {
  order?: TitleOrder;
  variant?: "white" | "black";
}
export const Title = (props: TitleProps) => {
  return <Heading {...props}></Heading>;
};
