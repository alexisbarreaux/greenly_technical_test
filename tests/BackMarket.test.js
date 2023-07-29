import { DiscountOffer } from "../classes/DiscountOffer";

describe("BackMarket", () => {
    describe("expiresIn", () => {
        it("should decrease by 1 when valid", () => {
            const discountOffer = new DiscountOffer("BackMarket", 2, 3)
            discountOffer.updateDiscount()
            expect(discountOffer.expiresIn).toEqual(
                1
            );
        });
        it("should decrease  by 1 when expired", () => {
            const discountOffer = new DiscountOffer("BackMarket", 0, 3)
            discountOffer.updateDiscount()
            expect(discountOffer.expiresIn).toEqual(
                -1
            );
        });
    });
    describe("discountInPercent", () => {
        it("should decrease by 2 when valid", () => {
            const discountOffer = new DiscountOffer("BackMarket", 2, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                5
            );
        });
        it("should decrease by two 4 when expired", () => {
            const discountOffer = new DiscountOffer("BackMarket", 0, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                3
            );
        });
        it("should decrease by 2 when expiring today", () => {
            const discountOffer = new DiscountOffer("BackMarket", 1, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                5
            );
        });
        it("should not decrease below 0", () => {
            const discountOffer = new DiscountOffer("BackMarket", 2, 0)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                0
            );
        });
        it("should not decrease below 0 when decreasing by 2", () => {
            const discountOffer = new DiscountOffer("BackMarket", 0, 1)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                0
            );
        });
        it("should not decrease below 0 when decreasing by 4", () => {
            const discountOffer = new DiscountOffer("BackMarket", 0, 3)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                0
            );
        });
    });
});
