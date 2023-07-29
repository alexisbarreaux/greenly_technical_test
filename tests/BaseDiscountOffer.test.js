import { BaseDiscountOffer } from "../classes/BaseDiscountOffer";

describe("BaseDiscountOffer", () => {
    describe("expiresIn", () => {
        it("should decrease by 1 when valid", () => {
            const discountOffer = new BaseDiscountOffer("test", 2, 3)
            discountOffer.updateDiscount()
            expect(discountOffer.expiresIn).toEqual(
                1
            );
        });
        it("should decrease  by 1 when expired", () => {
            const discountOffer = new BaseDiscountOffer("test", 0, 3)
            discountOffer.updateDiscount()
            expect(discountOffer.expiresIn).toEqual(
                -1
            );
        });
    });
    describe("discountInPercent", () => {
        it("should decrease by 1 when valid", () => {
            const discountOffer = new BaseDiscountOffer("test", 2, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                6
            );
        });
        it("should decrease by two 2 when expired", () => {
            const discountOffer = new BaseDiscountOffer("test", 0, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                5
            );
        });
        it("should decrease by 1 when expiring today", () => {
            const discountOffer = new BaseDiscountOffer("test", 1, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                6
            );
        });
        it("should not decrease below 0", () => {
            const discountOffer = new BaseDiscountOffer("test", 2, 0)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                0
            );
        });
        it("should not decrease below 0 when decreasing by 2", () => {
            const discountOffer = new BaseDiscountOffer("test", 0, 1)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                0
            );
        });
    });
});
