"use server";

import { Prisma } from "@prisma/client";
import { additionalResidentManager } from "./manager";

export async function createAdditionalResident({
  data,
}: {
  data: Prisma.AdditionalResidentCreateInput;
}) {
  try {
    const newAdditionalResident =
      await additionalResidentManager.createAdditionalResident({
        data,
      });
    return newAdditionalResident;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getAdditionalResidents(props?: {
  options?: Prisma.AdditionalResidentFindManyArgs;
}) {
  try {
    const properties = await additionalResidentManager.getAdditionalResidents(
      props
    );
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getAdditionalResidentById({ id }: { id: number }) {
  try {
    const property = await additionalResidentManager.getAdditionalResidentById({
      id,
    });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateAdditionalResident({
  id,
  data,
}: {
  id: number;
  data: Prisma.AdditionalResidentUpdateInput;
}) {
  try {
    const updatedAdditionalResident =
      await additionalResidentManager.updateAdditionalResident({
        id,
        data,
      });
    return updatedAdditionalResident;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteAdditionalResident({ id }: { id: number }) {
  try {
    const deletedAdditionalResident =
      await additionalResidentManager.deleteAdditionalResident({ id });
    return deletedAdditionalResident;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
