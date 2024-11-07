"use client";
import { getTenants } from " +/actions/tenant/actions_and_mutations";
import { Tenant } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Tenants() {
  const [tenants, setTenants] = useState<Tenant[]>([]);

  useEffect(() => {
    async function fetchInformationProperties() {
      const tenants = await getTenants();
      setTenants(tenants);
    }
    fetchInformationProperties();
  }, []);
  return (
    <>
      <div className="">
        <div className="flex gap-5   h-fit">
          {tenants.map((tenant) => {
            return (
              <div
                key={tenant.id}
                className="flex flex-col gap-1 border-b rounded-lg p-5  bg-slate-100"
              >
                <h3 className="font-bold text-xl mb-3">
                  Property {tenant.id} Tenants
                </h3>

                <div className="p-5 rounded-lg border">
                  <p>Full name: {tenant.fullName}</p>
                  <p>
                    Identification document: {tenant.identificationDocument}
                  </p>
                  {/* <p>Birth date: {tenant.birthDate}</p> */}
                  <p>Phone: {tenant.phone}</p>
                  <p>Email: {tenant.email}</p>
                  <p>Additional address: {tenant.additionalAddress}</p>
                </div>

                <div className="p-5 rounded-lg border">
                  {/*                   <p>Lease start date: {tenant.leaseStartDate}</p>
                  <p>Lease end date: {tenant.leaseEndDate}</p> */}
                  <p>Contract duration: {tenant.contractDuration}</p>
                  <p>Renewal terms: {tenant.renewalTerms}</p>
                  <p>Security deposit: {tenant.securityDeposit}</p>
                  <p>Specific clauses: {tenant.specificClauses}</p>
                </div>
                <div className="p-5 rounded-lg border">
                  <p>Rent amount: {tenant.rentAmount}</p>
                  <p>
                    Preferred payment method: {tenant.preferredPaymentMethod}
                  </p>
                </div>

                <div className="p-5 rounded-lg border">
                  <p>
                    Discounts or adjustments: {tenant.discountsOrAdjustments}
                  </p>
                </div>

                <div className="p-5 rounded-lg border">
                  <p>Tenant utilities: {tenant.tenantUtilities}</p>
                  <p>
                    Basic maintenance obligations: {tenant.basicMaintenance}
                  </p>
                  <p>Reported issues: {tenant.reportedIssues}</p>
                  <p>Pets: {tenant.pets}</p>
                </div>

                <div className="p-5 rounded-lg border">
                  {/*                   <p>Move-in date: {tenant.moveInDate}</p> */}
                  <p>Absence periods: {tenant.absencePeriods}</p>
                  <p>Contract modifications: {tenant.contractModifications}</p>
                </div>

                <div className="p-5 rounded-lg border">
                  <p>Satisfaction surveys: {tenant.satisfactionSurveys}</p>
                  <p>Communication history: {tenant.communicationHistory}</p>
                  <p>Incidents: {tenant.incidents}</p>
                </div>
                <div className="p-5 rounded-lg border">
                  <p>Emergency contact name: {tenant.emergencyContactName}</p>
                  <p>Emergency contact phone: {tenant.emergencyContactPhone}</p>
                  <p>
                    Emergency contact relation:{" "}
                    {tenant.emergencyContactRelation}
                  </p>
                  <p>Trusted person: {tenant.trustedPerson}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
