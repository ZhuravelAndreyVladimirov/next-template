/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";

interface CustomImageProps extends ImageProps {
  alt: string;
}

export const CustomImage = ({ ...props }: CustomImageProps) => (
  <Image
    style={{
      objectFit: "cover",
    }}
    width={props.width ? props.width : 100}
    {...props}
  />
);
