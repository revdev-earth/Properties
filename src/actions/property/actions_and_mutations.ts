"use server";

import { Prisma } from "@prisma/client";
import { propertyManager } from "./manager";

export async function createProperty({
  data,
}: {
  data: Prisma.PropertyCreateInput;
}) {
  try {
    return await propertyManager.createProperty({ data });
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getProperties(props?: {
  options?: Prisma.PropertyFindManyArgs;
}) {
  try {
    return await propertyManager.getProperties(props);
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getPropertyById({
  id,
  options,
}: {
  id: string;
  options?: Prisma.PropertyFindUniqueArgs;
}) {
  try {
    return propertyManager.getPropertyById({ id, options });
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateProperty({
  id,
  data,
}: {
  id: string;
  data: Prisma.PropertyUpdateInput;
}) {
  try {
    return await propertyManager.updateProperty({
      id,
      data,
    });
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteProperty({ id }: { id: string }) {
  try {
    return await propertyManager.deleteProperty({ id });
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}

// Dashboard
export async function getPropertiesWithAddress() {
  try {
    return await propertyManager.getPropertiesWithAddress();
  } catch (error) {
    console.error("Error fetching properties with address:", error);
    throw error;
  }
}

export async function getPropertyInformationByPropertyId({
  id,
}: {
  id: string;
}) {
  try {
    return await propertyManager.getPropertyInformationByPropertyId({ id });
  } catch (error) {
    console.error("Error fetching properties with address:", error);
    throw error;
  }
}

export async function getPropertyLegalByPropertyId({ id }: { id: string }) {
  try {
    return await propertyManager.getPropertyLegalByPropertyId({ id });
  } catch (error) {
    console.error("Error fetching properties with address:", error);
    throw error;
  }
}

export async function getPropertyInsuranceByPropertyId({ id }: { id: string }) {
  try {
    return await propertyManager.getPropertyInsuranceByPropertyId({ id });
  } catch (error) {
    console.error("Error fetching properties with address:", error);
    throw error;
  }
}

export async function getPropertyTenantByPropertyId({ id }: { id: string }) {
  try {
    return await propertyManager.getPropertyTenantByPropertyId({ id });
  } catch (error) {
    console.error("Error fetching properties with address:", error);
    throw error;
  }
}
