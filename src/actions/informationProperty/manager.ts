import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class InformationPropertyManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createInformationProperty({
    data,
  }: {
    data: Prisma.InformationPropertyCreateInput;
  }) {
    try {
      const newProperty = await this.prisma.informationProperty.create({
        data: data,
      });
      return newProperty;
    } catch (error) {
      throw error;
    }
  }

  async getInformationProperties(props?: {
    options?: Prisma.InformationPropertyFindManyArgs;
  }) {
    try {
      const properties = await this.prisma.informationProperty.findMany(
        props?.options
      );
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getInformationPropertyById({ id }: { id: string }) {
    try {
      const property = await this.prisma.informationProperty.findUnique({
        where: { id },
      });
      return property;
    } catch (error) {
      throw error;
    }
  }

  async updateInformationProperty({
    id,
    data,
  }: {
    id: string;
    data: Prisma.InformationPropertyUpdateInput;
  }) {
    try {
      const updatedProperty = await this.prisma.informationProperty.update({
        where: { id },
        data: data,
      });
      return updatedProperty;
    } catch (error) {
      throw error;
    }
  }

  async deleteInformationProperty({ id }: { id: string }) {
    try {
      const deletedProperty = await this.prisma.informationProperty.delete({
        where: { id },
      });
      return deletedProperty;
    } catch (error) {
      throw error;
    }
  }
}

export const informationPropertyManager = new InformationPropertyManager(
  new PrismaClient()
);
