"use client";

import { useEffect, useState } from "react";
import { MaintenanceInfoProperty } from "@prisma/client";

import { PropsJustParams } from "../types";
import { getMAintenanceInfoByPropertyId } from " +/actions/property/actions_and_mutations";
import CardMaintenanceProperty from "./fragments/CardMaintenanceProperty";
import CardMaintenanceEquipamentProperty from "./fragments/CardMaintenanceEquipamentProperty";

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
      <h2 className="text-center text-2xl">
        Maintenance Information for Property
      </h2>
      <div className="flex  gap-5 flex-wrap p-5 items-center justify-center">
        <p>Annual Budget: {infoMAintenance.annualBudget}</p>
        <p>Accumulated Costs: {infoMAintenance.accumulatedCosts}</p>
        <p>Cost Distribution: {infoMAintenance.costDistribution}</p>
      </div>

      <div className="flex gap-5 justify-center">
        <div className="flex flex-col gap-5 flex-wrap border p-5 max-w-[400px]">
          <h3 className="text-center text-xl font-bold">
            Maintenances Property
          </h3>
          {infoMAintenance.maintenance.map((m) => {
            return <CardMaintenanceProperty key={m.id} maintenance={m} />;
          })}
        </div>
        <div className="flex flex-col gap-5 flex-wrap border p-5 max-w-[400px]">
          <h3 className="text-center text-xl font-bold">
            Maintenances Equipament Property
          </h3>
          {infoMAintenance.equipmentMaintenance.map((e) => {
            return (
              <CardMaintenanceEquipamentProperty key={e.id} equipament={e} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
