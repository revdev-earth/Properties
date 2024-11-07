"use server";

import { Prisma } from "@prisma/client";
import { claimManager } from "./manager";

export async function createClaim({ data }: { data: Prisma.ClaimCreateInput }) {
  try {
    const newClaim = await claimManager.createClaim({ data });
    return newClaim;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getClaims(props?: {
  options?: Prisma.ClaimFindManyArgs;
}) {
  try {
    const properties = await claimManager.getClaims(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getClaimById({ id }: { id: number }) {
  try {
    const property = await claimManager.getClaimById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateClaim({
  id,
  data,
}: {
  id: number;
  data: Prisma.ClaimUpdateInput;
}) {
  try {
    const updatedClaim = await claimManager.updateClaim({
      id,
      data,
    });
    return updatedClaim;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteClaim({ id }: { id: number }) {
  try {
    const deletedClaim = await claimManager.deleteClaim({ id });
    return deletedClaim;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
