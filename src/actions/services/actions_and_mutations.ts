"use server";

import { Prisma } from "@prisma/client";
import { propertyBasicServiceManager } from "./manager";

export async function createPropertyBasicService({
  data,
}: {
  data: Prisma.PropertyBasicServiceCreateInput;
}) {
  try {
    const newPropertyBasicService =
      await propertyBasicServiceManager.createPropertyBasicService({
        data,
      });
    return newPropertyBasicService;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getPropertyBasicServices(props?: {
  options?: Prisma.PropertyBasicServiceFindManyArgs;
}) {
  try {
    const properties =
      await propertyBasicServiceManager.getPropertyBasicServices(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getPropertyBasicServiceById({ id }: { id: string }) {
  try {
    const property =
      await propertyBasicServiceManager.getPropertyBasicServiceById({
        id,
      });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updatePropertyBasicService({
  id,
  data,
}: {
  id: string;
  data: Prisma.PropertyBasicServiceUpdateInput;
}) {
  try {
    const updatedPropertyBasicService =
      await propertyBasicServiceManager.updatePropertyBasicService({
        id,
        data,
      });
    return updatedPropertyBasicService;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deletePropertyBasicService({ id }: { id: string }) {
  try {
    const deletedPropertyBasicService =
      await propertyBasicServiceManager.deletePropertyBasicService({ id });
    return deletedPropertyBasicService;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
