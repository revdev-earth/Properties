"use server";

import { propertyManager } from "./manager"; // Asegúrate de que la ruta sea correcta
import { Prisma } from "@prisma/client";

// Crear una nueva propiedad
export async function createProperty({
  data,
}: {
  data: Prisma.PropertyCreateInput;
}) {
  try {
    const newProperty = await propertyManager.createProperty({ data });
    return newProperty;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

// Obtener todas las propiedades
export async function getProperties(props?: {
  options?: Prisma.PropertyFindManyArgs;
}) {
  try {
    const properties = await propertyManager.getProperties(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

// Obtener una propiedad por ID
export async function getPropertyById({ id }: { id: number }) {
  try {
    const property = await propertyManager.getPropertyById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

// Actualizar una propiedad
export async function updateProperty({
  id,
  data,
}: {
  id: number;
  data: Prisma.PropertyUpdateInput;
}) {
  try {
    const updatedProperty = await propertyManager.updateProperty({
      id,
      data,
    });
    return updatedProperty;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

// Eliminar una propiedad
export async function deleteProperty({ id }: { id: number }) {
  try {
    const deletedProperty = await propertyManager.deleteProperty({ id });
    return deletedProperty;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
