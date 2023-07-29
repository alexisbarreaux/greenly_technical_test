export class AbstractDiscountOfferClass {
    constructor(partnerName, expiresIn, discountRateInPercent) {
        this.partnerName = partnerName;
        this.expiresIn = expiresIn;
        this.discountInPercent = discountRateInPercent;
    }

    isExpired() {
        return this.expiresIn <= 0
    }

    updatedDiscount() {
        this.updateDiscountInPercent();
        this.updateExpiresIn();
    }

    updateExpiresIn() {
        throw new Error("To be implemented in children classes.");
    }

    decreaseExpiresIn(decreaseAmount) {
        this.expiresIn -= decreaseAmount;
        return;
    }

    updateDiscountInPercent() {
        throw new Error("To be implemented in children classes.");
    }

    decreaseDiscountInPercent(decreaseAmount) {
        this.discountInPercent -= decreaseAmount;
        return;
    }

    increaseDiscountInPercent(increaseAmount) {
        this.discountInPercent += increaseAmount;
        return;
    }

    checkDiscountInPercentBounds() {
        this.checkDiscountInPercentLowerBound();
        this.checkDiscountInPercentUpperBound();
        return;
    }

    checkDiscountInPercentUpperBound() {
        this.discountInPercent = Math.min(50, this.discountInPercent);
        return;
    }

    checkDiscountInPercentLowerBound() {
        this.discountInPercent = Math.max(0, this.discountInPercent);
        return;
    }
}