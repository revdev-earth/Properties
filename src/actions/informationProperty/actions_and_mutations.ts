"use server";

import { Prisma } from "@prisma/client";
import { informationPropertyManager } from "./manager";

export async function createProperty({
  data,
}: {
  data: Prisma.InformationPropertyCreateInput;
}) {
  try {
    const newProperty =
      await informationPropertyManager.createInformationProperty({
        data,
      });
    return newProperty;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getInformationProperties(props?: {
  options?: Prisma.InformationPropertyFindManyArgs;
}) {
  try {
    const properties =
      await informationPropertyManager.getInformationProperties(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getInformationPropertyById({ id }: { id: string }) {
  try {
    const property =
      await informationPropertyManager.getInformationPropertyById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateInformationProperty({
  id,
  data,
}: {
  id: string;
  data: Prisma.InformationPropertyUpdateInput;
}) {
  try {
    const updatedProperty =
      await informationPropertyManager.updateInformationProperty({
        id,
        data,
      });
    return updatedProperty;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteProperty({ id }: { id: string }) {
  try {
    const deletedProperty =
      await informationPropertyManager.deleteInformationProperty({
        id,
      });
    return deletedProperty;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
