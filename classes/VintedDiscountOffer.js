import { AbstractDiscountOfferClass } from "./AbstractDiscountOfferClass";

export class VintedDiscountOffer extends AbstractDiscountOfferClass {
    constructor(expiresIn, discountRateInPercent) {
        super("Vinted", expiresIn, discountRateInPercent)
    }

    updateExpiresIn() {
        this.decreaseExpiresIn(1);
    }

    updateDiscountInPercent() {
        if (this.expiresIn > 10) {
            this.increaseDiscountInPercent(1);
        }
        else if (this.expiresIn > 5) {
            this.increaseDiscountInPercent(2);
        }
        else if (this.expiresIn > 0) {
            this.increaseDiscountInPercent(3);
        }
        else {
            this.discountInPercent = 0;
        }
        this.checkDiscountInPercentBounds();
    }
}