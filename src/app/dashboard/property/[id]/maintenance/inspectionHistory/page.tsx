"use client";

import { useEffect, useState } from "react";
import { InspectionHistory } from "@prisma/client";

import { PropsJustParams } from "../../types";
import { getMaintenanceHistoryByPropertyId } from " +/actions/property/actions_and_mutations";

export default function inspectionHistory({ params }: PropsJustParams) {
  const [id, setId] = useState<string | null>(null);
  const [inspection, setInspectionHistory] = useState<InspectionHistory | null>(
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
      async function fetchRequestMaintenance() {
        if (id !== null) {
          const { inspectionHistory } =
            (await getMaintenanceHistoryByPropertyId({
              id,
            })) || { inspectionHistory: null };
          setInspectionHistory(inspectionHistory);
        }
      }
      fetchRequestMaintenance();
    }
  }, [id]);

  if (!inspection) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-5   h-fit">
      <div
        key={inspection.id}
        className="flex flex-col gap-1 border-b rounded-lg p-5  bg-slate-100"
      >
        <h3 className="font-bold text-xl mb-3">
          Property {inspection.id} Preventive Maintenance Information
        </h3>

        <div className="p-5 rounded-lg border">
          <p>
            <strong>Inspection Date:</strong>{" "}
            {new Date(inspection.inspectionDate).toLocaleDateString()}
          </p>

          <p>
            <strong>Inspection Type:</strong> {inspection.inspectionType}
          </p>

          <p>
            <strong>Findings:</strong>{" "}
            {inspection.findings || "No findings available"}
          </p>

          <p>
            <strong>Recommended Actions:</strong>{" "}
            {inspection.recommendedActions || "No recommendations available"}
          </p>

          <p>
            <strong>Created At:</strong>{" "}
            {new Date(inspection.createdAt).toLocaleDateString()}
          </p>

          <p>
            <strong>Updated At:</strong>{" "}
            {new Date(inspection.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
