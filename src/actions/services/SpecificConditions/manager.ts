import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class SpecificConditionsManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createSpecificConditions({
    data,
  }: {
    data: Prisma.SpecificConditionsCreateInput;
  }) {
    try {
      const newSpecificConditions = await this.prisma.specificConditions.create(
        {
          data: data,
        }
      );
      return newSpecificConditions;
    } catch (error) {
      throw error;
    }
  }

  async getSpecificConditionss(props?: {
    options?: Prisma.SpecificConditionsFindManyArgs;
  }) {
    try {
      const properties = await this.prisma.specificConditions.findMany(
        props?.options
      );
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getSpecificConditionsById({ id }: { id: number }) {
    try {
      const specificConditions =
        await this.prisma.specificConditions.findUnique({
          where: { id },
        });
      return specificConditions;
    } catch (error) {
      throw error;
    }
  }

  async updateSpecificConditions({
    id,
    data,
  }: {
    id: number;
    data: Prisma.SpecificConditionsUpdateInput;
  }) {
    try {
      const updatedSpecificConditions =
        await this.prisma.specificConditions.update({
          where: { id },
          data: data,
        });
      return updatedSpecificConditions;
    } catch (error) {
      throw error;
    }
  }

  async deleteSpecificConditions({ id }: { id: number }) {
    try {
      const deletedSpecificConditions =
        await this.prisma.specificConditions.delete({
          where: { id },
        });
      return deletedSpecificConditions;
    } catch (error) {
      throw error;
    }
  }
}

export const specificConditionsManager = new SpecificConditionsManager(
  new PrismaClient()
);
