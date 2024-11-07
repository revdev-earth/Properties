"use server";

import { Prisma } from "@prisma/client";
import { additionalServiceManager } from "./manager";

export async function createAdditionalService({
  data,
}: {
  data: Prisma.AdditionalServiceCreateInput;
}) {
  try {
    const newAdditionalService =
      await additionalServiceManager.createAdditionalService({
        data,
      });
    return newAdditionalService;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getAdditionalServices(props?: {
  options?: Prisma.AdditionalServiceFindManyArgs;
}) {
  try {
    const properties = await additionalServiceManager.getAdditionalServices(
      props
    );
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getAdditionalServiceById({ id }: { id: number }) {
  try {
    const property = await additionalServiceManager.getAdditionalServiceById({
      id,
    });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateAdditionalService({
  id,
  data,
}: {
  id: number;
  data: Prisma.AdditionalServiceUpdateInput;
}) {
  try {
    const updatedAdditionalService =
      await additionalServiceManager.updateAdditionalService({
        id,
        data,
      });
    return updatedAdditionalService;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteAdditionalService({ id }: { id: number }) {
  try {
    const deletedAdditionalService =
      await additionalServiceManager.deleteAdditionalService({ id });
    return deletedAdditionalService;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
