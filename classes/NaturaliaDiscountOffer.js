import { AbstractDiscountOfferClass } from "./AbstractDiscountOfferClass";

export class NaturaliaDiscountOffer extends AbstractDiscountOfferClass {
    constructor(expiresIn, discountRateInPercent) {
        super("Naturalia", expiresIn, discountRateInPercent)
    }

    updateExpiresIn() {
        this.decreaseExpiresIn(1);
    }

    updateDiscountInPercent() {
        if (this.isExpired()) {
            this.increaseDiscountInPercent(2)
        }
        else {
            this.increaseDiscountInPercent(1)
        }
        this.checkDiscountInPercentBounds();
    }
}