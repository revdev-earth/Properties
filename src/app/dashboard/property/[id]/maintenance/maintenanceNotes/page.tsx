"use client";

import { useEffect, useState } from "react";
import { MaintenanceNotes } from "@prisma/client";

import { PropsJustParams } from "../../types";
import { getMaintenanceNotesByPropertyId } from " +/actions/property/actions_and_mutations";

export default function Notes({ params }: PropsJustParams) {
  const [id, setId] = useState<string | null>(null);
  const [notes, setMaintenanceNotes] = useState<MaintenanceNotes | null>(null);

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      async function fetchMaintenanceNotes() {
        if (id !== null) {
          const { maintenanceNotes } = (await getMaintenanceNotesByPropertyId({
            id,
          })) || { maintenanceNotes: null };
          setMaintenanceNotes(maintenanceNotes);
        }
      }
      fetchMaintenanceNotes();
    }
  }, [id]);

  if (!notes) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-5   h-fit">
      <div
        key={notes.id}
        className="flex flex-col gap-1 border-b rounded-lg p-5  bg-slate-100"
      >
        <h3 className="font-bold text-xl mb-3">
          Property {notes.id} Preventive Maintenance Information
        </h3>

        <div className="p-5 rounded-lg border">
          <p>
            Usage Recommendations:
            {notes.usageRecommendations || "No usage notes available"}
          </p>

          <p>
            Special Tasks:
            {notes.specialTasks || "No special tasks assigned"}
          </p>

          <p>
            Sustainability Practices:
            {notes.sustainabilityPractices ||
              "No sustainability practices suggested"}
          </p>

          <p>
            Created At:
            {new Date(notes.createdAt).toLocaleDateString()}
          </p>

          <p>
            Updated At:
            {new Date(notes.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
