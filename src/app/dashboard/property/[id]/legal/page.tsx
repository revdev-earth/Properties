"use client";

import { useSelector } from " +/redux";

export default function Information() {
  const legal = useSelector((s) => s.property.propertyLegal);

  if (!legal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-bold text-xl mb-3">Legal</h3>

      <div className="p-5 rounded-lg border">
        <p>Deed number: {legal.deedNumber}</p>
        <p>Notary: {legal.notary}</p>
        <p>Deed registration date: {new Date(legal.deedDate).toDateString()}</p>
        <p>Public registry number: {legal.publicRegistry}</p>
      </div>

      <div className="p-5 rounded-lg border">
        <p>Owner name: {legal.ownerName}</p>
        <p>Owner ID: {legal.ownerID}</p>
        <p>Owner address: {legal.ownerAddress}</p>
        <p>Owner contact: {legal.ownerContact}</p>
      </div>
      <div className="p-5 rounded-lg border">
        <p>Zoning classification: {legal.zoning}</p>
        <p>Usage restrictions: {legal.usageRestrictions}</p>
        <p>Permits and licenses: {legal.permitsAndLicenses}</p>
        <p>Zoning history: {legal.zoningHistory}</p>
      </div>

      <div className="p-5 rounded-lg border">
        <p>Lease contract: {legal.leaseContract}</p>
        <p>Contract duration: {legal.contractDuration}</p>
        <p>Tenant responsibilities: {legal.tenantResponsibilities}</p>
        <p>Owner responsibilities: {legal.ownerResponsibilities}</p>
      </div>

      <div className="p-5 rounded-lg border">
        <p>Ownership changes: {legal.ownershipChanges}</p>
        <p>Mortgages or liens: {legal.mortgagesOrLiens}</p>
        <p>Legal disputes: {legal.legalDisputes}</p>
        <p>Auction history: {legal.auctionHistory}</p>
      </div>

      <div className="p-5 rounded-lg border">
        <p>Property tax: {legal.propertyTax}</p>
        <p>Special taxes or fees: {legal.specialTaxesOrFees}</p>
        <p>Debt-free certificates: {legal.debtFreeCertificates}</p>
      </div>

      <div className="p-5 rounded-lg border">
        <p>Construction warranty: {legal.constructionWarranty}</p>
        <p>Equipment warranties: {legal.equipmentWarranties}</p>
        <p>Structural safety certificates: {legal.structuralSafetyCerts}</p>
      </div>
      <div className="p-5 rounded-lg border">
        <p>Internal regulations: {legal.internalRegulations}</p>
        <p>Local norms: {legal.localNorms}</p>
        <p>Environmental permits: {legal.environmentalPermits}</p>
      </div>
    </div>
  );
}
