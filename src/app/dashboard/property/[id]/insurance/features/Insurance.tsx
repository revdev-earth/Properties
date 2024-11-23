"use client";

import { PropertyInsurance } from "@prisma/client";

export default function Insurance({
  insurance,
}: {
  insurance: PropertyInsurance;
}) {
  if (!insurance) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-xl mb-3">
        Insurance Type: {insurance.insuranceType}
      </h3>

      <div className="p-5 rounded-lg border">
        <p></p>
        <p>Insurance Company: {insurance.insuranceCompany}</p>
        <p>Policy Number: {insurance.policyNumber}</p>
        <p>Start Date: {new Date(insurance.startDate).toLocaleDateString()}</p>
        <p>
          Expiration Date:
          {new Date(insurance.expirationDate).toLocaleDateString()}
        </p>
        <p>Insured Amount: ${insurance.insuredAmount}</p>
        <p>Premium Cost: ${insurance.premiumCost}</p>
      </div>
    </div>
  );
}
