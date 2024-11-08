import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class ConsumptionDetailsManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createConsumptionDetails({
    data,
  }: {
    data: Prisma.ConsumptionDetailsCreateInput;
  }) {
    try {
      const newConsumptionDetails = await this.prisma.consumptionDetails.create(
        {
          data: data,
        }
      );
      return newConsumptionDetails;
    } catch (error) {
      throw error;
    }
  }

  async getConsumptionDetailss(props?: {
    options?: Prisma.ConsumptionDetailsFindManyArgs;
  }) {
    try {
      const properties = await this.prisma.consumptionDetails.findMany(
        props?.options
      );
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getConsumptionDetailsById({ id }: { id: string }) {
    try {
      const consumptionDetails =
        await this.prisma.consumptionDetails.findUnique({
          where: { id },
        });
      return consumptionDetails;
    } catch (error) {
      throw error;
    }
  }

  async updateConsumptionDetails({
    id,
    data,
  }: {
    id: string;
    data: Prisma.ConsumptionDetailsUpdateInput;
  }) {
    try {
      const updatedConsumptionDetails =
        await this.prisma.consumptionDetails.update({
          where: { id },
          data: data,
        });
      return updatedConsumptionDetails;
    } catch (error) {
      throw error;
    }
  }

  async deleteConsumptionDetails({ id }: { id: string }) {
    try {
      const deletedConsumptionDetails =
        await this.prisma.consumptionDetails.delete({
          where: { id },
        });
      return deletedConsumptionDetails;
    } catch (error) {
      throw error;
    }
  }
}

export const consumptionDetailsManager = new ConsumptionDetailsManager(
  new PrismaClient()
);
