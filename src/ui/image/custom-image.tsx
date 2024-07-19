import Image, { ImageProps } from "next/image";

interface CustomImageProps extends ImageProps {}

export const CustomImage = ({ ...props }: CustomImageProps) => {
  return (
    <Image
      style={{
        objectFit: "cover",
      }}
      {...props}
    />
  );
};
