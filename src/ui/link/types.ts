import { ButtonProps } from "@mantine/core";
import { LinkProps } from "next/link";
import { HTMLAttributes, HTMLProps } from "react";

interface AnchorProps extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  target?: HTMLProps<HTMLAnchorElement>["target"];
}

export interface CustomLinkProps extends ButtonProps {
  link: AnchorProps;
}
