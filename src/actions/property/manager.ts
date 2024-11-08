import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class PropertyManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createProperty({ data }: { data: Prisma.PropertyCreateInput }) {
    try {
      return await this.prisma.property.create({
        data: data,
      });
    } catch (error) {
      throw error;
    }
  }

  async getProperties(props?: { options?: Prisma.PropertyFindManyArgs }) {
    try {
      return await this.prisma.property.findMany(props?.options);
    } catch (error) {
      throw error;
    }
  }

  async getPropertyById({
    id,
    options,
  }: {
    id: string;
    options?: Prisma.PropertyFindUniqueArgs;
  }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        ...options,
      });
    } catch (error) {
      throw error;
    }
  }

  async updateProperty({
    id,
    data,
  }: {
    id: string;
    data: Prisma.PropertyUpdateInput;
  }) {
    try {
      const updatedProperty = await this.prisma.property.update({
        where: { id },
        data: data,
      });
      return updatedProperty;
    } catch (error) {
      throw error;
    }
  }

  async deleteProperty({ id }: { id: string }) {
    try {
      return await this.prisma.property.delete({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }
}

export const propertyManager = new PropertyManager(new PrismaClient());
