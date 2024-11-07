"use server";

import { Prisma } from "@prisma/client";
import { emergencyContactManager } from "./manager";

export async function createEmergencyContact({
  data,
}: {
  data: Prisma.EmergencyContactCreateInput;
}) {
  try {
    const newEmergencyContact =
      await emergencyContactManager.createEmergencyContact({
        data,
      });
    return newEmergencyContact;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getEmergencyContacts(props?: {
  options?: Prisma.EmergencyContactFindManyArgs;
}) {
  try {
    const properties = await emergencyContactManager.getEmergencyContacts(
      props
    );
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getEmergencyContactById({ id }: { id: number }) {
  try {
    const property = await emergencyContactManager.getEmergencyContactById({
      id,
    });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateEmergencyContact({
  id,
  data,
}: {
  id: number;
  data: Prisma.EmergencyContactUpdateInput;
}) {
  try {
    const updatedEmergencyContact =
      await emergencyContactManager.updateEmergencyContact({
        id,
        data,
      });
    return updatedEmergencyContact;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteEmergencyContact({ id }: { id: number }) {
  try {
    const deletedEmergencyContact =
      await emergencyContactManager.deleteEmergencyContact({
        id,
      });
    return deletedEmergencyContact;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
