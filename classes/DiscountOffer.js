import { BackMarketDiscountOffer } from "./BackMarketDiscountOffer";
import { IlekDiscountOffer } from "./IlekDiscountOffer";
import { NaturaliaDiscountOffer } from "./NaturaliaDiscountOffer";
import { VintedDiscountOffer } from "./VintedDiscountOffer";
import { BaseDiscountOffer } from "./BaseDiscountOffer";

export class DiscountOffer {
    constructor(partnerName, expiresIn, discountRateInPercent) {
        switch (partnerName) {
            case "BackMarket":
                return new BackMarketDiscountOffer(expiresIn, discountRateInPercent);
            case "Ilek":
                return new IlekDiscountOffer(expiresIn, discountRateInPercent);
            case "Naturalia":
                return new NaturaliaDiscountOffer(expiresIn, discountRateInPercent);
            case "Vinted":
                return new VintedDiscountOffer(expiresIn, discountRateInPercent);
            default:
                return new BaseDiscountOffer(partnerName, expiresIn, discountRateInPercent);
        }
    }
}