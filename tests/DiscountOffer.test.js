import { Store, DiscountOffer } from "../store";

describe("DiscountOffer", () => {
    it("should decrease expiresIn by 1 when valid", () => {
        const store = new Store([new DiscountOffer("test", 2, 3)])
        store.updateDiscounts()
        expect(store.discountOffers[0].expiresIn).toEqual(
            1
        );
    });
    it("should decrease expiresIn by 1 when expired", () => {
        const store = new Store([new DiscountOffer("test", 0, 3)])
        store.updateDiscounts()
        expect(store.discountOffers[0].expiresIn).toEqual(
            -1
        );
    });
    it("should decrease discountInPercent by 1 when valid", () => {
        const store = new Store([new DiscountOffer("test", 2, 7)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            6
        );
    });
    it("should decrease discountInPercent by two 2 when expired", () => {
        const store = new Store([new DiscountOffer("test", 0, 7)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            5
        );
    });
    it("should decrease discountInPercent by 1 when expiring today", () => {
        const store = new Store([new DiscountOffer("test", 1, 7)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            6
        );
    });
});
