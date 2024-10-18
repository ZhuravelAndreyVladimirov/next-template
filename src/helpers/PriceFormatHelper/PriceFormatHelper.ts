type SerializationPrice = null | number | string | undefined;

export class PriceFormatHelper {
  static maskFloat(price: SerializationPrice): null | string {
    const newPrice = PriceFormatHelper.serializationFloat(price);

    if (!newPrice && typeof newPrice !== "number") {
      return null;
    }

    return `${PriceFormatHelper.maskInt(Math.floor(newPrice))}.${
      newPrice % 1 <= 0 ? "00" : Math.ceil((newPrice % 1) * 100)
    }`;
  }
  static maskInt(price: SerializationPrice): null | string {
    const newPrice = PriceFormatHelper.serializationInt(price);

    if (!newPrice && typeof newPrice !== "number") {
      return null;
    }

    return String(newPrice).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  static serializationFloat(price: SerializationPrice): null | number {
    if (!price && typeof price !== "string" && typeof price !== "number") {
      return null;
    }

    if (typeof price === "number") {
      return price;
    }

    const splitPrice: string[] = price.split(".");

    const concatPrice = `${PriceFormatHelper.serializationInt(splitPrice[0])}${
      splitPrice[1] ? "." : ""
    }${
      splitPrice[1]
        ? PriceFormatHelper.serializationInt(splitPrice[1].substring(0, 2))
        : ""
    }`;

    if (Number.isNaN(Number.parseFloat(concatPrice))) {
      return null;
    }

    return Number.parseFloat(concatPrice);
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

    if (Number.isNaN(Number.parseInt(price.replace(/[^0-9]/g, "")))) {
      return null;
    }
    return Number.parseInt(price.replace(/[^0-9]/g, ""));
  }
}
