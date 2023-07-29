export class Store {
    constructor(discountOffers = []) {
        this.discountOffers = discountOffers;
    }
    updateDiscounts() {
        for (var i = 0; i < this.discountOffers.length; i++) {
            this.discountOffers[i].updateDiscount();
        }
        return this.discountOffers;
    }
}
