import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class PropertyInformationManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createpropertyInformation({
    data,
  }: {
    data: Prisma.PropertyInformationCreateInput;
  }) {
    try {
      const newProperty = await this.prisma.propertyInformation.create({
        data: data,
      });
      return newProperty;
    } catch (error) {
      throw error;
    }
  }

  async getInformationProperties(props?: {
    options?: Prisma.PropertyInformationFindManyArgs;
  }) {
    try {
      const properties = await this.prisma.propertyInformation.findMany(
        props?.options
      );
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getpropertyInformationById({ id }: { id: string }) {
    try {
      const property = await this.prisma.propertyInformation.findUnique({
        where: { id },
      });
      return property;
    } catch (error) {
      throw error;
    }
  }

  async updatepropertyInformation({
    id,
    data,
  }: {
    id: string;
    data: Prisma.PropertyInformationUpdateInput;
  }) {
    try {
      const updatedProperty = await this.prisma.propertyInformation.update({
        where: { id },
        data: data,
      });
      return updatedProperty;
    } catch (error) {
      throw error;
    }
  }

  async deletepropertyInformation({ id }: { id: string }) {
    try {
      const deletedProperty = await this.prisma.propertyInformation.delete({
        where: { id },
      });
      return deletedProperty;
    } catch (error) {
      throw error;
    }
  }
}

export const propertyInformationManager = new PropertyInformationManager(
  new PrismaClient()
);
