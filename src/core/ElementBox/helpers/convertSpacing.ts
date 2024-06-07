import { convertHtmlProp } from "./convertHtmlProp";

export const convertSpacing = (
  spacing?: string | number,
  spacingY?: string | number,
  spacingX?: string | number,
  spacingT?: string | number,
  spacingR?: string | number,
  spacingB?: string | number,
  spacingL?: string | number,
  scale?: number
) => {
  if (
    !spacingY &&
    !spacingX &&
    !spacingT &&
    !spacingR &&
    !spacingB &&
    !spacingL
  ) {
    return spacing;
  }

  type SpacingObj = {
    top: string;
    right: string;
    bottom: string;
    left: string;
  };

  const spacingObj: SpacingObj = {
    top: convertHtmlProp(spacing || 0, scale),
    left: convertHtmlProp(spacing || 0, scale),
    right: convertHtmlProp(spacing || 0, scale),
    bottom: convertHtmlProp(spacing || 0, scale),
  };

  if (spacingY) {
    spacingObj.top = convertHtmlProp(spacingY, scale);
    spacingObj.bottom = convertHtmlProp(spacingY, scale);
  }

  if (spacingX) {
    spacingObj.right = convertHtmlProp(spacingX, scale);
    spacingObj.left = convertHtmlProp(spacingX, scale);
  }

  if (spacingT) {
    spacingObj.top = convertHtmlProp(spacingT, scale);
  }

  if (spacingR) {
    spacingObj.right = convertHtmlProp(spacingR, scale);
  }

  if (spacingB) {
    spacingObj.bottom = convertHtmlProp(spacingB, scale);
  }

  if (spacingL) {
    spacingObj.left = convertHtmlProp(spacingL, scale);
  }

  return `${spacingObj.top} ${spacingObj.right} ${spacingObj.bottom} ${spacingObj.left}`;
};
