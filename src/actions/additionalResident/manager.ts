import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class AdditionalResidentManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createAdditionalResident({
    data,
  }: {
    data: Prisma.AdditionalResidentCreateInput;
  }) {
    try {
      const newAdditionalResident = await this.prisma.additionalResident.create(
        {
          data: data,
        }
      );
      return newAdditionalResident;
    } catch (error) {
      throw error;
    }
  }

  async getAdditionalResidents(props?: {
    options?: Prisma.AdditionalResidentFindManyArgs;
  }) {
    try {
      const properties = await this.prisma.additionalResident.findMany(
        props?.options
      );
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getAdditionalResidentById({ id }: { id: number }) {
    try {
      const additionalResident =
        await this.prisma.additionalResident.findUnique({
          where: { id },
        });
      return additionalResident;
    } catch (error) {
      throw error;
    }
  }

  async updateAdditionalResident({
    id,
    data,
  }: {
    id: number;
    data: Prisma.AdditionalResidentUpdateInput;
  }) {
    try {
      const updatedAdditionalResident =
        await this.prisma.additionalResident.update({
          where: { id },
          data: data,
        });
      return updatedAdditionalResident;
    } catch (error) {
      throw error;
    }
  }

  async deleteAdditionalResident({ id }: { id: number }) {
    try {
      const deletedAdditionalResident =
        await this.prisma.additionalResident.delete({
          where: { id },
        });
      return deletedAdditionalResident;
    } catch (error) {
      throw error;
    }
  }
}

export const additionalResidentManager = new AdditionalResidentManager(
  new PrismaClient()
);
