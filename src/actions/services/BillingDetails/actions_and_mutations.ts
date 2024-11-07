"use server";

import { Prisma } from "@prisma/client";
import { billingDetailsManager } from "./manager";

export async function createBillingDetails({
  data,
}: {
  data: Prisma.BillingDetailsCreateInput;
}) {
  try {
    const newBillingDetails = await billingDetailsManager.createBillingDetails({
      data,
    });
    return newBillingDetails;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getBillingDetailss(props?: {
  options?: Prisma.BillingDetailsFindManyArgs;
}) {
  try {
    const properties = await billingDetailsManager.getBillingDetailss(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getBillingDetailsById({ id }: { id: number }) {
  try {
    const property = await billingDetailsManager.getBillingDetailsById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateBillingDetails({
  id,
  data,
}: {
  id: number;
  data: Prisma.BillingDetailsUpdateInput;
}) {
  try {
    const updatedBillingDetails =
      await billingDetailsManager.updateBillingDetails({
        id,
        data,
      });
    return updatedBillingDetails;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteBillingDetails({ id }: { id: number }) {
  try {
    const deletedBillingDetails =
      await billingDetailsManager.deleteBillingDetails({
        id,
      });
    return deletedBillingDetails;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
