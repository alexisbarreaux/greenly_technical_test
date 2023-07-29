import { DiscountOffer } from "../classes/DiscountOffer";

describe("Naturalia", () => {
    describe("expiresIn", () => {
        it("should decrease by 1 when valid", () => {
            const discountOffer = new DiscountOffer("Naturalia", 2, 3)
            discountOffer.updateDiscount()
            expect(discountOffer.expiresIn).toEqual(
                1
            );
        });
        it("should decrease by 1 when expired", () => {
            const discountOffer = new DiscountOffer("Naturalia", 0, 3)
            discountOffer.updateDiscount()
            expect(discountOffer.expiresIn).toEqual(
                -1
            );
        });
    });
    describe("discountInPercent", () => {
        it("should increase by 1 when valid", () => {
            const discountOffer = new DiscountOffer("Naturalia", 2, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                8
            );
        });
        it("should increase by two 2 when expired", () => {
            const discountOffer = new DiscountOffer("Naturalia", 0, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                9
            );
        });
        it("should increase by 1 when expiring today", () => {
            const discountOffer = new DiscountOffer("Naturalia", 1, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                8
            );
        });
        it("should not increase over 50 when valid", () => {
            const discountOffer = new DiscountOffer("Naturalia", 2, 50)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                50
            );
        });
        it("should not increase over 50 when expired", () => {
            const discountOffer = new DiscountOffer("Naturalia", 0, 50)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                50
            );
        });
        it("should not increase over 50 when increasing by 2", () => {
            const discountOffer = new DiscountOffer("Naturalia", 0, 49)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                50
            );
        });
    });
});
