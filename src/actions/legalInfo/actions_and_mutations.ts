"use server";

import { Prisma } from "@prisma/client";
import { legalInfoManager } from "./manager";

export async function createLegalInfo({
  data,
}: {
  data: Prisma.LegalInfoCreateInput;
}) {
  try {
    const newLegalInfo = await legalInfoManager.createLegalInfo({ data });
    return newLegalInfo;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getProperties(props?: {
  options?: Prisma.LegalInfoFindManyArgs;
}) {
  try {
    const properties = await legalInfoManager.getLegalInfo(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getLegalInfoById({ id }: { id: string }) {
  try {
    const property = await legalInfoManager.getLegalInfoById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateLegalInfo({
  id,
  data,
}: {
  id: string;
  data: Prisma.LegalInfoUpdateInput;
}) {
  try {
    const updatedLegalInfo = await legalInfoManager.updateLegalInfo({
      id,
      data,
    });
    return updatedLegalInfo;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteLegalInfo({ id }: { id: string }) {
  try {
    const deletedLegalInfo = await legalInfoManager.deleteLegalInfo({ id });
    return deletedLegalInfo;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
