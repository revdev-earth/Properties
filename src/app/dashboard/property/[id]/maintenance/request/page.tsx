"use client";

import { useEffect, useState } from "react";
import { MaintenanceRequest } from "@prisma/client";

import { PropsJustParams } from "../../types";
import { getMaintenanceRequestByPropertyId } from " +/actions/property/actions_and_mutations";

export default function Request({ params }: PropsJustParams) {
  const [id, setId] = useState<string | null>(null);
  const [request, setMaintenanceRequest] = useState<MaintenanceRequest | null>(
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
          const { maintenanceRequest } =
            (await getMaintenanceRequestByPropertyId({
              id,
            })) || { maintenanceRequest: null };
          setMaintenanceRequest(maintenanceRequest);
        }
      }
      fetchRequestMaintenance();
    }
  }, [id]);

  if (!request) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-5   h-fit">
      <div
        key={request.id}
        className="flex flex-col gap-1 border-b rounded-lg p-5  bg-slate-100"
      >
        <h3 className="font-bold text-xl mb-3">
          Property {request.id} Preventive Maintenance Information
        </h3>

        <div className="p-5 rounded-lg border">
          <p>Damage Description: {request.damageDescription}</p>

          <p>
            Report Date: {new Date(request.reportDate).toLocaleDateString()}
          </p>

          <p>Reported By: {request.reportedBy}</p>

          <p>Status: {request.status}</p>

          <p>
            Resolution Date:
            {request.resolutionDate
              ? new Date(request.resolutionDate).toLocaleDateString()
              : "Not Resolved"}
          </p>

          <p>Observations: {request.observations || "N/A"}</p>

          <p>Created At: {new Date(request.createdAt).toLocaleDateString()}</p>

          <p>Updated At: {new Date(request.updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
