import { Store, DiscountOffer } from "../store";

describe("BackMarket", () => {
    describe("expiresIn", () => {
        it("should decrease by 1 when valid", () => {
            const store = new Store([new DiscountOffer("BackMarket", 2, 3)])
            store.updateDiscounts()
            expect(store.discountOffers[0].expiresIn).toEqual(
                1
            );
        });
        it("should decrease  by 1 when expired", () => {
            const store = new Store([new DiscountOffer("BackMarket", 0, 3)])
            store.updateDiscounts()
            expect(store.discountOffers[0].expiresIn).toEqual(
                -1
            );
        });
    });
    describe("discountInPercent", () => {
        it("should decrease by 2 when valid", () => {
            const store = new Store([new DiscountOffer("BackMarket", 2, 7)])
            store.updateDiscounts()
            expect(store.discountOffers[0].discountInPercent).toEqual(
                5
            );
        });
        it("should decrease by two 4 when expired", () => {
            const store = new Store([new DiscountOffer("BackMarket", 0, 7)])
            store.updateDiscounts()
            expect(store.discountOffers[0].discountInPercent).toEqual(
                3
            );
        });
        it("should decrease by 2 when expiring today", () => {
            const store = new Store([new DiscountOffer("BackMarket", 1, 7)])
            store.updateDiscounts()
            expect(store.discountOffers[0].discountInPercent).toEqual(
                5
            );
        });
    });
});
