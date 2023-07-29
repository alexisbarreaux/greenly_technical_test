import { DiscountOffer } from "../classes/DiscountOffer";
import { BackMarketDiscountOffer } from "../classes/BackMarketDiscountOffer";
import { BaseDiscountOffer } from "../classes/BaseDiscountOffer";
import { IlekDiscountOffer } from "../classes/IlekDiscountOffer";
import { NaturaliaDiscountOffer } from "../classes/NaturaliaDiscountOffer";
import { VintedDiscountOffer } from "../classes/VintedDiscountOffer";

describe("DiscountOffer", () => {
    it("should build BackMarketDiscountOffer when provided BackMarket as partnerName", () => {
        expect(new DiscountOffer("BackMarket", 2, 3)).toEqual(new BackMarketDiscountOffer(2, 3)
        );
    });
    it("should build BaseDiscountOffer when provided random partnerName", () => {
        expect(new DiscountOffer("test", 2, 3)).toEqual(new BaseDiscountOffer("test", 2, 3)
        );
    });
    it("should build IlekDiscountOffer when provided Ilek as partnerName", () => {
        expect(new DiscountOffer("Ilek", 2, 3)).toEqual(new IlekDiscountOffer(2, 3)
        );
    });
    it("should build NaturaliaDiscountOffer when provided Naturalia as partnerName", () => {
        expect(new DiscountOffer("Naturalia", 2, 3)).toEqual(new NaturaliaDiscountOffer(2, 3)
        );
    });
    it("should build VintedDiscountOffer when provided Vinted as partnerName", () => {
        expect(new DiscountOffer("Vinted", 2, 3)).toEqual(new VintedDiscountOffer(2, 3)
        );
    });
});