import { DiscountOffer } from "../classes/DiscountOffer";
import { BackMarketDiscountOffer } from "../classes/BackMarketDiscountOffer";
import { BaseDiscountOffer } from "../classes/BaseDiscountOffer";
import { IlekDiscountOffer } from "../classes/IlekDiscountOffer";
import { NaturaliaDiscountOffer } from "../classes/NaturaliaDiscountOffer";
import { VintedDiscountOffer } from "../classes/VintedDiscountOffer";
import { Store } from "../classes/Store";

describe("Store", () => {
    describe("updateDiscounts", () => {
        it("should be equal to calling discountOffers' updateDiscount methods directly", () => {
            var discountOffers = [
                new BackMarketDiscountOffer(20, 30),
                new BaseDiscountOffer("test", 10, 5),
                new IlekDiscountOffer(5, 40),
                new NaturaliaDiscountOffer(15, 40),
                new VintedDiscountOffer(7, 8),
                new DiscountOffer("test", 7, 8),
            ];

            var discountOffersCopy = [
                new BackMarketDiscountOffer(20, 30),
                new BaseDiscountOffer("test", 10, 5),
                new IlekDiscountOffer(5, 40),
                new NaturaliaDiscountOffer(15, 40),
                new VintedDiscountOffer(7, 8),
                new DiscountOffer("test", 7, 8),
            ];
            for (var i = 0; i < discountOffersCopy.length; i++) {
                discountOffersCopy[i].updateDiscount();
            }

            const store = new Store(discountOffers);
            expect(store.updateDiscounts()).toEqual(
                discountOffersCopy
            );
        });
    });
});
