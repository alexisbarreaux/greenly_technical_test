import { AbstractDiscountOfferClass } from "./AbstractDiscountOfferClass";

export class BaseDiscountOffer extends AbstractDiscountOfferClass {
    constructor(expiresIn, discountRateInPercent) {
        super("Partner", expiresIn, discountRateInPercent)
    }

    updateExpiresIn() {
        this.decreaseExpiresIn(1);
    }

    updateDiscountInPercent() {
        if (this.isExpired()) {
            this.decreaseDiscountInPercent(2)
        }
        else {
            this.decreaseDiscountInPercent(1)
        }
        this.checkDiscountInPercentBounds();
    }
}