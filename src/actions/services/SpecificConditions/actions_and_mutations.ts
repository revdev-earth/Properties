"use server";

import { Prisma } from "@prisma/client";
import { specificConditionsManager } from "./manager";

export async function createSpecificConditions({
  data,
}: {
  data: Prisma.SpecificConditionsCreateInput;
}) {
  try {
    const newSpecificConditions =
      await specificConditionsManager.createSpecificConditions({
        data,
      });
    return newSpecificConditions;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getSpecificConditionss(props?: {
  options?: Prisma.SpecificConditionsFindManyArgs;
}) {
  try {
    const properties = await specificConditionsManager.getSpecificConditionss(
      props
    );
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getSpecificConditionsById({ id }: { id: number }) {
  try {
    const property = await specificConditionsManager.getSpecificConditionsById({
      id,
    });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateSpecificConditions({
  id,
  data,
}: {
  id: number;
  data: Prisma.SpecificConditionsUpdateInput;
}) {
  try {
    const updatedSpecificConditions =
      await specificConditionsManager.updateSpecificConditions({
        id,
        data,
      });
    return updatedSpecificConditions;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteSpecificConditions({ id }: { id: number }) {
  try {
    const deletedSpecificConditions =
      await specificConditionsManager.deleteSpecificConditions({ id });
    return deletedSpecificConditions;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
