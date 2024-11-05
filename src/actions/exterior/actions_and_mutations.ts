"use server";

import { Prisma } from "@prisma/client";
import { exteriorManager } from "./manager";

export async function createExterior({
  data,
}: {
  data: Prisma.ExteriorCreateInput;
}) {
  try {
    const newExterior = await exteriorManager.createExterior({
      data,
    });
    return newExterior;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getExterior(props?: {
  options?: Prisma.ExteriorFindManyArgs;
}) {
  try {
    const properties = await exteriorManager.getExterior(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getExteriorById({ id }: { id: number }) {
  try {
    const property = await exteriorManager.getExteriorById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateExterior({
  id,
  data,
}: {
  id: number;
  data: Prisma.ExteriorUpdateInput;
}) {
  try {
    const updatedExterior = await exteriorManager.updateExterior({
      id,
      data,
    });
    return updatedExterior;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteExterior({ id }: { id: number }) {
  try {
    const deletedExterior = await exteriorManager.deleteExterior({
      id,
    });
    return deletedExterior;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
