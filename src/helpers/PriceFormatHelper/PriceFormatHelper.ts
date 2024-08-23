type SerializationPrice = null | number | string | undefined;

export class PriceFormatHelper {
  static maskInt(price: SerializationPrice): null | string {
    const newPrice = PriceFormatHelper.serializationInt(price);

    if (!newPrice && typeof newPrice !== "number") {
      return null;
    }

    return String(newPrice).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

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
