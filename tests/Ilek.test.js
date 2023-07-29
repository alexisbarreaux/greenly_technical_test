import { Store, DiscountOffer } from "../store";

describe("Ilek", () => {
    describe("expiresIn", () => {
        it("should not decrease when valid", () => {
            const store = new Store([new DiscountOffer("Ilek", 2, 7)])
            store.updateDiscounts()
            expect(store.discountOffers[0].expiresIn).toEqual(
                2
            );
        });
        it("should not decrease when expired", () => {
            const store = new Store([new DiscountOffer("Ilek", 0, 3)])
            store.updateDiscounts()
            expect(store.discountOffers[0].expiresIn).toEqual(
                0
            );
        });
    });
    describe("discountInPercent", () => {
        it("should not decrease when valid", () => {
            const store = new Store([new DiscountOffer("Ilek", 2, 7)])
            store.updateDiscounts()
            expect(store.discountOffers[0].discountInPercent).toEqual(
                7
            );
        });
        it("should not decrease when expired", () => {
            const store = new Store([new DiscountOffer("Ilek", 0, 7)])
            store.updateDiscounts()
            expect(store.discountOffers[0].discountInPercent).toEqual(
                7
            );
        });
    });
});
