"use client";

import { Button } from "@mantine/core";
import Link from "next/link";
import { CustomLinkProps } from "./types";

export const CustomLink = ({ link, ...props }: CustomLinkProps) => {
  return (
    <Button
      sm
      {...props}
      renderRoot={(_props) => <Link {...link} {..._props} />}
    />
  );
};
