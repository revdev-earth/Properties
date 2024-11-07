"use client";

import { getInsurances } from " +/actions/Insurance/actions_and_mutations";
import { Insurance } from "@prisma/client";
import { useEffect, useState } from "react";

export default function InsuranceProperty() {
  const [insurances, setInsurance] = useState<Insurance[]>([]);

  useEffect(() => {
    async function fetchInformationProperties() {
      const insurances = await getInsurances();
      setInsurance(insurances);
    }
    fetchInformationProperties();
  }, []);

  console.log(insurances);
  return (
    <>
      <div className="">
        <div className="flex gap-5   h-fit">
          {insurances.map((insurance) => {
            return (
              <div
                key={insurance.id}
                className="flex flex-col gap-1 border-b rounded-lg p-5  bg-slate-100"
              >
                <h3 className="font-bold text-xl mb-3">
                  Property {insurance.id} Insurance
                </h3>

                <div className="p-5 rounded-lg border">
                  <p>Insurance type: {insurance.insuranceType}</p>
                  <p>Insurance company: {insurance.insuranceCompany}</p>
                  <p>Policy number: {insurance.policyNumber}</p>
                  {/*                   <p>Start date: {insurance.startDate}</p>
                  <p>Expiration date: {insurance.expirationDate}</p> */}
                  <p>Insured amount: {insurance.insuredAmount}</p>
                  <p>Premium cost: {insurance.premiumCost}</p>
                </div>

                <div className="p-5 rounded-lg border">
                  <p>Main coverage: {insurance.mainCoverage}</p>
                  <p>Third-party coverage: {insurance.thirdPartyCoverage}</p>
                  <p>Equipment coverage: {insurance.equipmentCoverage}</p>
                  <p>Coverage exclusions: {insurance.coverageExclusions}</p>
                  <p>
                    Applicable deductibles: {insurance.applicableDeductibles}
                  </p>
                </div>
                <div className="p-5 rounded-lg border">
                  <p>Emergency contact: {insurance.emergencyContact}</p>
                  <p>Insurance agent name: {insurance.insuranceAgentName}</p>
                  <p>
                    Insurance agent contact: {insurance.insuranceAgentContact}
                  </p>
                  <p>Claim procedures: {insurance.claimProcedures}</p>
                </div>

                <div className="p-5 rounded-lg border">
                  <p>Renewal conditions: {insurance.renewalConditions}</p>
                  <p>Coverage reviews: {insurance.coverageReviews}</p>
                  <p>Special clauses: {insurance.specialClauses}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
