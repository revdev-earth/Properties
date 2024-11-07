"use server";

import { Prisma } from "@prisma/client";
import { insuranceManager } from "./manager";

export async function createInsurance({
  data,
}: {
  data: Prisma.InsuranceCreateInput;
}) {
  try {
    const newInsurance = await insuranceManager.createInsurance({ data });
    return newInsurance;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getInsurances(props?: {
  options?: Prisma.InsuranceFindManyArgs;
}) {
  try {
    const properties = await insuranceManager.getInsurances(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getInsuranceById({ id }: { id: number }) {
  try {
    const property = await insuranceManager.getInsuranceById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateInsurance({
  id,
  data,
}: {
  id: number;
  data: Prisma.InsuranceUpdateInput;
}) {
  try {
    const updatedInsurance = await insuranceManager.updateInsurance({
      id,
      data,
    });
    return updatedInsurance;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteInsurance({ id }: { id: number }) {
  try {
    const deletedInsurance = await insuranceManager.deleteInsurance({ id });
    return deletedInsurance;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
