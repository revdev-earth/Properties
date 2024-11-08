"use server";

import { Prisma } from "@prisma/client";
import { servicePaymentManager } from "./manager";

export async function createServicePayment({
  data,
}: {
  data: Prisma.ServicePaymentCreateInput;
}) {
  try {
    const newServicePayment = await servicePaymentManager.createServicePayment({
      data,
    });
    return newServicePayment;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getServicePayments(props?: {
  options?: Prisma.ServicePaymentFindManyArgs;
}) {
  try {
    const properties = await servicePaymentManager.getServicePayments(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getServicePaymentById({ id }: { id: string }) {
  try {
    const property = await servicePaymentManager.getServicePaymentById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateServicePayment({
  id,
  data,
}: {
  id: string;
  data: Prisma.ServicePaymentUpdateInput;
}) {
  try {
    const updatedServicePayment =
      await servicePaymentManager.updateServicePayment({
        id,
        data,
      });
    return updatedServicePayment;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteServicePayment({ id }: { id: string }) {
  try {
    const deletedServicePayment =
      await servicePaymentManager.deleteServicePayment({
        id,
      });
    return deletedServicePayment;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
