"use client";

import { useEffect, useState } from "react";
import { PropertyBasicService } from "@prisma/client";

import { PropsJustParams } from "../types";
import { getPropertyServicesByPropertyId } from " +/actions/property/actions_and_mutations";

export default function Services({ params }: PropsJustParams) {
  const [id, setId] = useState<string | null>(null);
  const [services, setServices] = useState<PropertyBasicService | null>(null);

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      async function fetchServicesProperty() {
        if (id !== null) {
          const { basicService } = (await getPropertyServicesByPropertyId({
            id,
          })) || { basicService: null };
          setServices(basicService);
        }
      }
      fetchServicesProperty();
    }
  }, [id]);

  console.log("services  ::", services);

  if (!services) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-5   h-fit">
      <div
        key={services.id}
        className="flex flex-col gap-1 border-b rounded-lg p-5  bg-slate-100"
      >
        <h3 className="font-bold text-xl mb-3">
          Property {services.id} Services Information
        </h3>

        <div className="p-5 rounded-lg border">
          <p>Service Type: {services.serviceType}</p>
          <p>Provider: {services.provider}</p>
          <p>Account Number: {services.accountNumber}</p>
          <p>Payment Responsible: {services.paymentResponsible}</p>
        </div>

        <div className="p-5 rounded-lg border">
          <p>Billing Details: {services.billingDetailsId}</p>
          <p>Consumption Details: {services.consumptionDetailsId}</p>
        </div>

        <div className="p-5 rounded-lg border">
          <p>Created At: {new Date(services.createdAt).toLocaleDateString()}</p>
          <p>Updated At: {new Date(services.updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
