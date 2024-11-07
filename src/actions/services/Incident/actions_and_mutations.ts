"use server";

import { Prisma } from "@prisma/client";
import { incidentManager } from "./manager";

export async function createIncident({
  data,
}: {
  data: Prisma.IncidentCreateInput;
}) {
  try {
    const newIncident = await incidentManager.createIncident({ data });
    return newIncident;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getIncidents(props?: {
  options?: Prisma.IncidentFindManyArgs;
}) {
  try {
    const properties = await incidentManager.getIncidents(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getIncidentById({ id }: { id: number }) {
  try {
    const property = await incidentManager.getIncidentById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateIncident({
  id,
  data,
}: {
  id: number;
  data: Prisma.IncidentUpdateInput;
}) {
  try {
    const updatedIncident = await incidentManager.updateIncident({
      id,
      data,
    });
    return updatedIncident;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteIncident({ id }: { id: number }) {
  try {
    const deletedIncident = await incidentManager.deleteIncident({ id });
    return deletedIncident;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
