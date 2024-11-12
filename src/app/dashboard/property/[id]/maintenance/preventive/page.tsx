"use client";

import { useEffect, useState } from "react";
import { PreventiveMaintenance } from "@prisma/client";

import { PropsJustParams } from "../../types";
import { getPropertyPreventiveMaintenanceByPropertyId } from " +/actions/property/actions_and_mutations";

export default function Maintenance({ params }: PropsJustParams) {
  const [id, setId] = useState<string | null>(null);
  const [preventiveMaintenance, setPreventiveMaintenance] =
    useState<PreventiveMaintenance | null>(null);

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
          const { preventiveMaintenance } =
            (await getPropertyPreventiveMaintenanceByPropertyId({
              id,
            })) || { preventiveMaintenance: null };
          setPreventiveMaintenance(preventiveMaintenance);
        }
      }
      fetchPreventiveMaintenance();
    }
  }, [id]);

  if (!preventiveMaintenance) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-5   h-fit">
      <div
        key={preventiveMaintenance.id}
        className="flex flex-col gap-1 border-b rounded-lg p-5  bg-slate-100"
      >
        <h3 className="font-bold text-xl mb-3">
          Property {preventiveMaintenance.id} Preventive Maintenance Information
        </h3>

        <div className="p-5 rounded-lg border">
          <p>
            <strong>Task:</strong> {preventiveMaintenance.task}
          </p>
          <p>
            <strong>Frequency:</strong> {preventiveMaintenance.frequency}
          </p>
          <p>
            <strong>Next Maintenance Date:</strong>{" "}
            {new Date(
              preventiveMaintenance.nextMaintenanceDate
            ).toLocaleDateString()}
          </p>
          <p>
            <strong>Cost Responsible:</strong>{" "}
            {preventiveMaintenance.costResponsible}
          </p>
        </div>
      </div>
    </div>
  );
}
