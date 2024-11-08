"use server";

import { Prisma } from "@prisma/client";
import { tenantManager } from "./manager";

export async function createTenant({
  data,
}: {
  data: Prisma.TenantCreateInput;
}) {
  try {
    const newTenant = await tenantManager.createTenant({ data });
    return newTenant;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getTenants(props?: {
  options?: Prisma.TenantFindManyArgs;
}) {
  try {
    const properties = await tenantManager.getTenants(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getTenantById({ id }: { id: string }) {
  try {
    const property = await tenantManager.getTenantById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateTenant({
  id,
  data,
}: {
  id: string;
  data: Prisma.TenantUpdateInput;
}) {
  try {
    const updatedTenant = await tenantManager.updateTenant({
      id,
      data,
    });
    return updatedTenant;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteTenant({ id }: { id: string }) {
  try {
    const deletedTenant = await tenantManager.deleteTenant({ id });
    return deletedTenant;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
