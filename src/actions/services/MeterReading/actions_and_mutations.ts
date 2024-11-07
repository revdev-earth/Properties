"use server";

import { Prisma } from "@prisma/client";
import { meterReadingManager } from "./manager";

export async function createMeterReading({
  data,
}: {
  data: Prisma.MeterReadingCreateInput;
}) {
  try {
    const newMeterReading = await meterReadingManager.createMeterReading({
      data,
    });
    return newMeterReading;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getMeterReadings(props?: {
  options?: Prisma.MeterReadingFindManyArgs;
}) {
  try {
    const properties = await meterReadingManager.getMeterReadings(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getMeterReadingById({ id }: { id: number }) {
  try {
    const property = await meterReadingManager.getMeterReadingById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateMeterReading({
  id,
  data,
}: {
  id: number;
  data: Prisma.MeterReadingUpdateInput;
}) {
  try {
    const updatedMeterReading = await meterReadingManager.updateMeterReading({
      id,
      data,
    });
    return updatedMeterReading;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteMeterReading({ id }: { id: number }) {
  try {
    const deletedMeterReading = await meterReadingManager.deleteMeterReading({
      id,
    });
    return deletedMeterReading;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
