import { Store, DiscountOffer } from "../store";

describe("Vinted", () => {
    it("should decrease expiresIn by 1 when valid", () => {
        const store = new Store([new DiscountOffer("Vinted", 2, 3)])
        store.updateDiscounts()
        expect(store.discountOffers[0].expiresIn).toEqual(
            1
        );
    });
    it("should decrease expiresIn by 1 when expired", () => {
        const store = new Store([new DiscountOffer("Vinted", 0, 3)])
        store.updateDiscounts()
        expect(store.discountOffers[0].expiresIn).toEqual(
            -1
        );
    });
    it("should increase discountInPercent by 1 when above 10 days left", () => {
        const store = new Store([new DiscountOffer("Vinted", 11, 7)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            8
        );
    });
    it("should increase discountInPercent by 2 when exactly 10 days left", () => {
        const store = new Store([new DiscountOffer("Vinted", 10, 7)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            9
        );
    });
    it("should increase discountInPercent by 2 between 10 and 6 days left", () => {
        const store = new Store([new DiscountOffer("Vinted", 6, 7)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            9
        );
    });
    it("should increase discountInPercent by 2 between 10 and 6 days left", () => {
        const store = new Store([new DiscountOffer("Vinted", 6, 7)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            9
        );
    });
    it("should increase discountInPercent by 3 when exactly 5 days left", () => {
        const store = new Store([new DiscountOffer("Vinted", 5, 7)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            10
        );
    });
    it("should increase discountInPercent by 3 when between 5 days and 1 day left", () => {
        const store = new Store([new DiscountOffer("Vinted", 1, 7)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            10
        );
    });
    it("should drop discountInPercent to 0 when expired", () => {
        const store = new Store([new DiscountOffer("Vinted", 0, 42)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            0
        );
    });

    it("should not increase discountInPercent over 50 when valid", () => {
        const store = new Store([new DiscountOffer("Vinted", 11, 50)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            50
        );
    });
    it("should not increase discountInPercent over 50 when increasing by 2", () => {
        const store = new Store([new DiscountOffer("Vinted", 10, 49)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            50
        );
    });
    it("should not increase discountInPercent over 50 when increasing by 3", () => {
        const store = new Store([new DiscountOffer("Vinted", 5, 48)])
        store.updateDiscounts()
        expect(store.discountOffers[0].discountInPercent).toEqual(
            50
        );
    });
});
