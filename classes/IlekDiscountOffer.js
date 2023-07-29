import { AbstractDiscountOfferClass } from "./AbstractDiscountOfferClass";

export class IlekDiscountOffer extends AbstractDiscountOfferClass {
    constructor(expiresIn, discountRateInPercent) {
        super("Ilek", expiresIn, discountRateInPercent)
    }

    updateExpiresIn() {
        return
    }

    updateDiscountInPercent() {
        return
    }
}