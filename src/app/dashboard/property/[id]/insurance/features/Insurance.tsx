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
    <div className="flex gap-5 h-fit">
      <div className="flex flex-col gap-1 border-b rounded-lg p-5 bg-slate-100">
        <h3 className="font-bold text-xl mb-3">
          Property {insurance.id} insurance
        </h3>

        <div className="p-5 rounded-lg border">
          <p>Insurance Type: {insurance.insuranceType}</p>
          <p>Insurance Company: {insurance.insuranceCompany}</p>
          <p>Policy Number: {insurance.policyNumber}</p>
          <p>
            Start Date: {new Date(insurance.startDate).toLocaleDateString()}
          </p>
          <p>
            Expiration Date:{" "}
            {new Date(insurance.expirationDate).toLocaleDateString()}
          </p>
          <p>Insured Amount: ${insurance.insuredAmount}</p>
          <p>Premium Cost: ${insurance.premiumCost}</p>
        </div>

        <div className="p-5 rounded-lg border">
          <p>Main Coverage: {insurance.mainCoverage}</p>
          <p>Third Party Coverage: {insurance.thirdPartyCoverage || "N/A"}</p>
          <p>Equipment Coverage: {insurance.equipmentCoverage || "N/A"}</p>
          <p>Coverage Exclusions: {insurance.coverageExclusions || "None"}</p>
          <p>
            Applicable Deductibles: {insurance.applicableDeductibles || "None"}
          </p>
        </div>

        <div className="p-5 rounded-lg border">
          <p>Emergency Contact: {insurance.emergencyContact || "N/A"}</p>
          <p>Insurance Agent Name: {insurance.insuranceAgentName || "N/A"}</p>
          <p>
            Insurance Agent Contact: {insurance.insuranceAgentContact || "N/A"}
          </p>
          <p>Claim Procedures: {insurance.claimProcedures || "N/A"}</p>
        </div>

        <div className="p-5 rounded-lg border">
          <p>Renewal Conditions: {insurance.renewalConditions || "N/A"}</p>
          <p>Coverage Reviews: {insurance.coverageReviews || "N/A"}</p>
          <p>Special Clauses: {insurance.specialClauses || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}