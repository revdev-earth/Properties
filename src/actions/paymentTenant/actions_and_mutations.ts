"use server";

import { Prisma } from "@prisma/client";
import { paymentTenantManager } from "./manager";

export async function createPaymentTenant({
  data,
}: {
  data: Prisma.PaymentTenantCreateInput;
}) {
  try {
    const newPaymentTenant = await paymentTenantManager.createPaymentTenant({
      data,
    });
    return newPaymentTenant;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getPaymentTenants(props?: {
  options?: Prisma.PaymentTenantFindManyArgs;
}) {
  try {
    const properties = await paymentTenantManager.getPaymentTenants(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getPaymentTenantById({ id }: { id: string }) {
  try {
    const property = await paymentTenantManager.getPaymentTenantById({
      id,
    });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updatePaymentTenant({
  id,
  data,
}: {
  id: string;
  data: Prisma.PaymentTenantUpdateInput;
}) {
  try {
    const updatedPaymentTenant = await paymentTenantManager.updatePaymentTenant(
      {
        id,
        data,
      }
    );
    return updatedPaymentTenant;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deletePaymentTenant({ id }: { id: string }) {
  try {
    const deletedPaymentTenant = await paymentTenantManager.deletePaymentTenant(
      {
        id,
      }
    );
    return deletedPaymentTenant;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
