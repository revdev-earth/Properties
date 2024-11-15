"use client";

import { useEffect, useState } from "react";
import { PropertyBasicService } from "@prisma/client";

import { getPropertyServicesByPropertyId } from " +/actions/property/actions_and_mutations";

import { PropsJustParams } from "../../types";

export default function Services({ params }: PropsJustParams) {
  const [id, setId] = useState<string | null>(null);
  const [services, setServices] = useState<PropertyBasicService[] | null>(null);

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
          const property = await getPropertyServicesByPropertyId({ id });
          const { basicService } = property || { basicService: null };
          setServices(basicService);
        }
      }
      fetchServicesProperty();
    }
  }, [id]);

  if (!services) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex  gap-5 flex-wrap">
      servicio
      {/*       <h3 className="font-bold text-xl mb-3">
        Service Type: {service.serviceType}
      </h3>

      <div className="p-5 rounded-lg border">
        <p>Provider: {service.provider}</p>
        <p>Account Number: {service.accountNumber}</p>
        <p>Payment Responsible: {service.paymentResponsible}</p>
      </div> */}
    </div>
  );
}
