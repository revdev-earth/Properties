"use client";

import { useEffect, useState } from "react";
import { PropertyInsurance } from "@prisma/client";

import { PropsJustParams } from "../types";
import { getPropertyInsuranceByPropertyId } from " +/actions/property/actions_and_mutations";
import Insurance from "./features/Insurance";

export default function Information({ params }: PropsJustParams) {
  const [id, setId] = useState<string | null>(null);
  const [insurances, setInsurances] = useState<PropertyInsurance[] | null>(
    null
  );

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      async function fetchInsuranceProperty() {
        if (id !== null) {
          const property = await getPropertyInsuranceByPropertyId({ id });
          const { propertyInsurance } = property || { propertyInsurance: null };
          setInsurances(propertyInsurance);
        }
      }
      fetchInsuranceProperty();
    }
  }, [id]);

  if (!insurances) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      {insurances.map((insurance) => (
        <Insurance key={insurance.id} insurance={insurance} />
      ))}
    </div>
  );
}
