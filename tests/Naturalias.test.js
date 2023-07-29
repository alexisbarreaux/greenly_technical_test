import { Store, DiscountOffer } from "../store";

describe("Naturalia", () => {
    it("should decrease expiresIn by 1 when valid", () => {
        const store = new Store([new DiscountOffer("Naturalia", 2, 3)])
        store.updateDiscounts()
        expect(store.discountOffers[0].expiresIn).toEqual(
            1
        );
    });
    it("should decrease expiresIn by 1 when expired", () => {
        const store = new Store([new DiscountOffer("Naturalia", 0, 3)])
        store.updateDiscounts()
        expect(store.discountOffers[0].expiresIn).toEqual(
            -1
        );
    });
    it("should increase discountInPercent by 1 when valid", () => {
        const store = new Store([new DiscountOffer("Naturalia", 2, 7)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            8
        );
    });
    it("should increase discountInPercent by two 2 when expired", () => {
        const store = new Store([new DiscountOffer("Naturalia", 0, 7)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            9
        );
    });
    it("should increase discountInPercent by 1 when expiring today", () => {
        const store = new Store([new DiscountOffer("Naturalia", 1, 7)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            8
        );
    });
    it("should not increase discountInPercent over 50 when valid", () => {
        const store = new Store([new DiscountOffer("Naturalia", 2, 50)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            50
        );
    });
    it("should not increase discountInPercent over 50 when expired", () => {
        const store = new Store([new DiscountOffer("Naturalia", 0, 50)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            50
        );
    });
    it("should not increase discountInPercent over 50 when increasing by 2", () => {
        const store = new Store([new DiscountOffer("Naturalia", 0, 49)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            50
        );
    });
});