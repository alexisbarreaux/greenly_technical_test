import { VintedDiscountOffer } from "../classes/VintedDiscountOffer";

describe("Vinted", () => {
    describe("expiresIn", () => {
        it("should decrease by 1 when valid", () => {
            const discountOffer = new VintedDiscountOffer(2, 3)
            discountOffer.updateDiscount()
            expect(discountOffer.expiresIn).toEqual(
                1
            );
        });
        it("should decrease by 1 when expired", () => {
            const discountOffer = new VintedDiscountOffer(0, 3)
            discountOffer.updateDiscount()
            expect(discountOffer.expiresIn).toEqual(
                -1
            );
        });
    });
    describe("discountInPercent", () => {
        it("should increase by 1 when above 10 days left", () => {
            const discountOffer = new VintedDiscountOffer(11, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                8
            );
        });
        it("should increase by 2 when exactly 10 days left", () => {
            const discountOffer = new VintedDiscountOffer(10, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                9
            );
        });
        it("should increase by 2 between 10 and 6 days left", () => {
            const discountOffer = new VintedDiscountOffer(6, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                9
            );
        });
        it("should increase by 2 between 10 and 6 days left", () => {
            const discountOffer = new VintedDiscountOffer(6, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                9
            );
        });
        it("should increase by 3 when exactly 5 days left", () => {
            const discountOffer = new VintedDiscountOffer(5, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                10
            );
        });
        it("should increase by 3 when between 5 days and 1 day left", () => {
            const discountOffer = new VintedDiscountOffer(1, 7)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                10
            );
        });
        it("should drop to 0 when expired", () => {
            const discountOffer = new VintedDiscountOffer(0, 42)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                0
            );
        });
        it("should not increase over 50 when valid", () => {
            const discountOffer = new VintedDiscountOffer(11, 50)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                50
            );
        });
        it("should not increase over 50 when increasing by 2", () => {
            const discountOffer = new VintedDiscountOffer(10, 49)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                50
            );
        });
        it("should not increase over 50 when increasing by 3", () => {
            const discountOffer = new VintedDiscountOffer(5, 48)
            discountOffer.updateDiscount()
            expect(discountOffer.discountInPercent).toEqual(
                50
            );
        });
    });
});
