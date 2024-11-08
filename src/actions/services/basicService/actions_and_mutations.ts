"use server";

import { Prisma } from "@prisma/client";
import { basicServiceManager } from "./manager";

export async function createBasicService({
  data,
}: {
  data: Prisma.BasicServiceCreateInput;
}) {
  try {
    const newBasicService = await basicServiceManager.createBasicService({
      data,
    });
    return newBasicService;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getBasicServices(props?: {
  options?: Prisma.BasicServiceFindManyArgs;
}) {
  try {
    const properties = await basicServiceManager.getBasicServices(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getBasicServiceById({ id }: { id: string }) {
  try {
    const property = await basicServiceManager.getBasicServiceById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateBasicService({
  id,
  data,
}: {
  id: string;
  data: Prisma.BasicServiceUpdateInput;
}) {
  try {
    const updatedBasicService = await basicServiceManager.updateBasicService({
      id,
      data,
    });
    return updatedBasicService;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteBasicService({ id }: { id: string }) {
  try {
    const deletedBasicService = await basicServiceManager.deleteBasicService({
      id,
    });
    return deletedBasicService;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
