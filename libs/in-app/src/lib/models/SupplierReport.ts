import { MakeOffer } from "./MakeOffer";
import { SupplierOffer } from "./SupplierOffer";

export class SupplierReport {
  MakeOffers: Array<MakeOffer>;
  SupplierOffers: Array<SupplierOffer>;
  TotalRequestsReceived: number;
  TotalRequestsApplied: number;
  TotalRequestsAppliedWithNotAvailable: number;
  TotalPricingAndProvidingRequestsReceived: number;
  TotalPricingAndProvidingRequestsApplied: number;
  TotalPricingAndProvidingRequestsAppliedWithNotAvailable: number;
  TotalPricingOnlyRequestsReceived: number;
  TotalPricingOnlyRequestsApplied: number;
  TotalPricingOnlyRequestsAppliedWithNotAvailable: number;
  TotalSupplierOffers: number;

  constructor() {
    this.MakeOffers = new Array<MakeOffer>();
    this.SupplierOffers = new Array<SupplierOffer>();
  }
}

