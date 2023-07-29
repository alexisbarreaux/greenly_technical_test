import { AbstractDiscountOfferClass } from "./AbstractDiscountOfferClass";

export class BaseDiscountOffer extends AbstractDiscountOfferClass {
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