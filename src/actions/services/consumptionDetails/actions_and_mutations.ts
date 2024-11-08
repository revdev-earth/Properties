"use server";

import { Prisma } from "@prisma/client";
import { consumptionDetailsManager } from "./manager";

export async function createConsumptionDetails({
  data,
}: {
  data: Prisma.ConsumptionDetailsCreateInput;
}) {
  try {
    const newConsumptionDetails =
      await consumptionDetailsManager.createConsumptionDetails({
        data,
      });
    return newConsumptionDetails;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getConsumptionDetailss(props?: {
  options?: Prisma.ConsumptionDetailsFindManyArgs;
}) {
  try {
    const properties = await consumptionDetailsManager.getConsumptionDetailss(
      props
    );
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getConsumptionDetailsById({ id }: { id: string }) {
  try {
    const property = await consumptionDetailsManager.getConsumptionDetailsById({
      id,
    });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateConsumptionDetails({
  id,
  data,
}: {
  id: string;
  data: Prisma.ConsumptionDetailsUpdateInput;
}) {
  try {
    const updatedConsumptionDetails =
      await consumptionDetailsManager.updateConsumptionDetails({
        id,
        data,
      });
    return updatedConsumptionDetails;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteConsumptionDetails({ id }: { id: string }) {
  try {
    const deletedConsumptionDetails =
      await consumptionDetailsManager.deleteConsumptionDetails({ id });
    return deletedConsumptionDetails;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
