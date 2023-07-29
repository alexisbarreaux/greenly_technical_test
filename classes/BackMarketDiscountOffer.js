import { AbstractDiscountOfferClass } from "./AbstractDiscountOfferClass";

export class BackMarketDiscountOffer extends AbstractDiscountOfferClass {
    constructor(expiresIn, discountRateInPercent) {
        super("BackMarket", expiresIn, discountRateInPercent)
    }

    updateExpiresIn() {
        this.decreaseExpiresIn(1);
    }

    updateDiscountInPercent() {
        if (this.isExpired()) {
            this.decreaseDiscountInPercent(4)
        }
        else {
            this.decreaseDiscountInPercent(2)
        }
        this.checkDiscountInPercentBounds();
    }
}