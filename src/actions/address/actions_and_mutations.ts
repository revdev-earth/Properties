"use server";

import { Prisma } from "@prisma/client";
import { addressManager } from "./manager";

export async function createAddress({
  data,
}: {
  data: Prisma.AddressCreateInput;
}) {
  try {
    const newAddress = await addressManager.createAddress({
      data,
    });
    return newAddress;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}

export async function getAddress(props?: {
  options?: Prisma.AddressFindManyArgs;
}) {
  try {
    const properties = await addressManager.getAddress(props);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

export async function getAddressById({ id }: { id: number }) {
  try {
    const property = await addressManager.getAddressById({ id });
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

export async function updateAddress({
  id,
  data,
}: {
  id: number;
  data: Prisma.AddressUpdateInput;
}) {
  try {
    const updatedAddress = await addressManager.updateAddress({
      id,
      data,
    });
    return updatedAddress;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
}

export async function deleteAddress({ id }: { id: number }) {
  try {
    const deletedAddress = await addressManager.deleteAddress({
      id,
    });
    return deletedAddress;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
}
