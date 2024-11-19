"use client";

import { useEffect, useState } from "react";
import { MaintenanceInfoProperty } from "@prisma/client";

import { PropsJustParams } from "../types";
import { getMAintenanceInfoByPropertyId } from " +/actions/property/actions_and_mutations";
import CardMaintenanceProperty from "./fragments/CardMaintenanceProperty";

export default function Services({ params }: PropsJustParams) {
  const [id, setId] = useState<string | null>(null);
  const [infoMAintenance, SetInfo] = useState<MaintenanceInfoProperty[] | null>(
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
      async function fetchServicesProperty() {
        if (id !== null) {
          const property = await getMAintenanceInfoByPropertyId({ id });
          const { maintenanceInfoProperty } = property || {
            maintenanceInfoProperty: null,
          };
          SetInfo(maintenanceInfoProperty);
        }
      }
      fetchServicesProperty();
    }
  }, [id]);

  if (!infoMAintenance) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="">Maintenance Information for Property</h2>
      <div className="flex  gap-5 flex-wrap">
        <p>Annual Budget: {infoMAintenance.annualBudget}</p>
        <p>Accumulated Costs: {infoMAintenance.accumulatedCosts}</p>
        <p>Cost Distribution: {infoMAintenance.costDistribution}</p>
      </div>

      <div>
        <div className="flex flex-col gap-5 flex-wrap border p-5 max-w-[400px]">
          <h3 className="text-center">Maintenances</h3>
          {infoMAintenance.maintenance.map((m) => {
            return <CardMaintenanceProperty key={m.id} maintenance={m} />;
          })}
        </div>
      </div>
    </div>
  );
}
