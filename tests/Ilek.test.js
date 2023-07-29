import { DiscountOffer } from "../classes/DiscountOffer";

describe("Ilek", () => {
    describe("expiresIn", () => {
        it("should not decrease when valid", () => {
            const discountOffer = new DiscountOffer("Ilek", 2, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.expiresIn).toEqual(
                2
            );
        });
        it("should not decrease when expired", () => {
            const discountOffer = new DiscountOffer("Ilek", 0, 3)
            discountOffer.updateDiscount()
            expect(discountOffer.expiresIn).toEqual(
                0
            );
        });
    });
    describe("discountInPercent", () => {
        it("should not decrease when valid", () => {
            const discountOffer = new DiscountOffer("Ilek", 2, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                7
            );
        });
        it("should not decrease when expired", () => {
            const discountOffer = new DiscountOffer("Ilek", 0, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                7
            );
        });
    });
});
