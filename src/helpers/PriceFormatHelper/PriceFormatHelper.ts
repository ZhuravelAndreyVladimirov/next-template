type SerializationPrice = null | number | string | undefined;

export class PriceFormatHelper {
  static serializationInt(price: SerializationPrice): null | number {
    if (!price && typeof price !== "string" && typeof price !== "number") {
      return null;
    }

    if (typeof price === "number") {
      if (Number.isInteger(price)) {
        return price;
      }

      return Number.parseInt(String(price));
    }

    return Number.parseInt(price.replace(/[^0-9]/g, ""));
  }
}
