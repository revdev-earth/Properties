"use client";

import { useEffect, useState } from "react";
import { CorrectiveMaintenance } from "@prisma/client";

import { PropsJustParams } from "../../types";
import { getPropertyCorrectiveMaintenanceByPropertyId } from " +/actions/property/actions_and_mutations";

export default function Corrective({ params }: PropsJustParams) {
  const [id, setId] = useState<string | null>(null);
  const [corrective, setPreventiveMaintenance] =
    useState<CorrectiveMaintenance | null>(null);

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      async function fetchPreventiveMaintenance() {
        if (id !== null) {
          const { correctiveMaintenance } =
            (await getPropertyCorrectiveMaintenanceByPropertyId({
              id,
            })) || { correctiveMaintenance: null };
          setPreventiveMaintenance(correctiveMaintenance);
        }
      }
      fetchPreventiveMaintenance();
    }
  }, [id]);

  if (!corrective) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-5   h-fit">
      <div
        key={corrective.id}
        className="flex flex-col gap-1 border-b rounded-lg p-5  bg-slate-100"
      >
        <h3 className="font-bold text-xl mb-3">
          Property {corrective.id} Preventive Maintenance Information
        </h3>

        <div className="p-5 rounded-lg border">
          <p>
            Repair Date:
            {new Date(corrective.repairDate).toLocaleDateString()}
          </p>

          <p>Repair Type: {corrective.repairType}</p>

          <p>Location: {corrective.location}</p>

          <p>Repair Cost: ${corrective.repairCost.toFixed(2)}</p>

          <p>Cost Responsible: {corrective.costResponsible}</p>

          <p>Warranty: {corrective.warranty || "N/A"}</p>

          <p>
            Created At: {new Date(corrective.createdAt).toLocaleDateString()}
          </p>

          <p>
            Updated At: {new Date(corrective.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
