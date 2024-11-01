import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class PropertyManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  // Crear (Create)
  async createProperty({ data }: { data: Prisma.PropertyCreateInput }) {
    try {
      const newProperty = await this.prisma.property.create({
        data: data,
      });
      return newProperty;
    } catch (error) {
      throw error;
    }
  }

  // Leer (Read)
  async getProperties(props?: { options?: Prisma.PropertyFindManyArgs }) {
    try {
      const properties = await this.prisma.property.findMany(props?.options);
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getPropertyById({ id }: { id: number }) {
    try {
      const property = await this.prisma.property.findUnique({
        where: { id },
      });
      return property;
    } catch (error) {
      throw error;
    }
  }

  // Actualizar (Update)
  async updateProperty({
    id,
    data,
  }: {
    id: number;
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

  // Eliminar (Delete)
  async deleteProperty({ id }: { id: number }) {
    try {
      const deletedProperty = await this.prisma.property.delete({
        where: { id },
      });
      return deletedProperty;
    } catch (error) {
      throw error;
    }
  }
}

export const propertyManager = new PropertyManager(new PrismaClient());
