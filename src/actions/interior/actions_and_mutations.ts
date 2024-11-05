"use server";

import { Prisma } from "@prisma/client";
import { interiorManager } from "./manager";

export async function createInterior({
  data,
}: {
  data: Prisma.InteriorCreateInput;
}) {
  try {
    const newInterior = await interiorManager.createInterior({
      data,
    });
    return newInterior;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getInterior(props?: {
  options?: Prisma.InteriorFindManyArgs;
}) {
  try {
    const properties = await interiorManager.getInterior(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getInteriorById({ id }: { id: number }) {
  try {
    const property = await interiorManager.getInteriorById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateInterior({
  id,
  data,
}: {
  id: number;
  data: Prisma.InteriorUpdateInput;
}) {
  try {
    const updatedInterior = await interiorManager.updateInterior({
      id,
      data,
    });
    return updatedInterior;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteInterior({ id }: { id: number }) {
  try {
    const deletedInterior = await interiorManager.deleteInterior({
      id,
    });
    return deletedInterior;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
