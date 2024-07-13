import { LinkProps } from "next/link";
import { BtnProps } from "../btn/types";
import { HTMLAttributes, HTMLProps } from "react";

interface AnchorProps extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  target?: HTMLProps<HTMLAnchorElement>["target"];
}

export interface CustomLinkProps extends BtnProps {
  link: AnchorProps;
}
