"use server";

import { Prisma } from "@prisma/client";
import { featuresManager } from "./manager";

export async function createFeatures({
  data,
}: {
  data: Prisma.FeaturesCreateInput;
}) {
  try {
    const newFeatures = await featuresManager.createFeature({
      data,
    });
    return newFeatures;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getFeatures(props?: {
  options?: Prisma.FeaturesFindManyArgs;
}) {
  try {
    const properties = await featuresManager.getFeature(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getFeaturesById({ id }: { id: number }) {
  try {
    const property = await featuresManager.getFeatureById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateFeatures({
  id,
  data,
}: {
  id: number;
  data: Prisma.FeaturesUpdateInput;
}) {
  try {
    const updatedFeatures = await featuresManager.updateFeature({
      id,
      data,
    });
    return updatedFeatures;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteFeatures({ id }: { id: number }) {
  try {
    const deletedFeatures = await featuresManager.deleteFeature({
      id,
    });
    return deletedFeatures;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
