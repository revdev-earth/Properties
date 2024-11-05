import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class AddressManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createAddress({ data }: { data: Prisma.AddressCreateInput }) {
    try {
      const newAddress = await this.prisma.address.create({
        data: data,
      });
      return newAddress;
    } catch (error) {
      throw error;
    }
  }

  async getAddress(props?: { options?: Prisma.AddressFindManyArgs }) {
    try {
      const properties = await this.prisma.address.findMany(props?.options);
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getAddressById({ id }: { id: number }) {
    try {
      const address = await this.prisma.address.findUnique({
        where: { id },
      });
      return address;
    } catch (error) {
      throw error;
    }
  }

  async updateAddress({
    id,
    data,
  }: {
    id: number;
    data: Prisma.AddressUpdateInput;
  }) {
    try {
      const updatedAddress = await this.prisma.address.update({
        where: { id },
        data: data,
      });
      return updatedAddress;
    } catch (error) {
      throw error;
    }
  }

  async deleteAddress({ id }: { id: number }) {
    try {
      const deletedAddress = await this.prisma.address.delete({
        where: { id },
      });
      return deletedAddress;
    } catch (error) {
      throw error;
    }
  }
}

export const addressManager = new AddressManager(new PrismaClient());
