import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class BillingDetailsManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createBillingDetails({
    data,
  }: {
    data: Prisma.BillingDetailsCreateInput;
  }) {
    try {
      const newBillingDetails = await this.prisma.billingDetails.create({
        data: data,
      });
      return newBillingDetails;
    } catch (error) {
      throw error;
    }
  }

  async getBillingDetailss(props?: {
    options?: Prisma.BillingDetailsFindManyArgs;
  }) {
    try {
      const properties = await this.prisma.billingDetails.findMany(
        props?.options
      );
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getBillingDetailsById({ id }: { id: number }) {
    try {
      const billingDetails = await this.prisma.billingDetails.findUnique({
        where: { id },
      });
      return billingDetails;
    } catch (error) {
      throw error;
    }
  }

  async updateBillingDetails({
    id,
    data,
  }: {
    id: number;
    data: Prisma.BillingDetailsUpdateInput;
  }) {
    try {
      const updatedBillingDetails = await this.prisma.billingDetails.update({
        where: { id },
        data: data,
      });
      return updatedBillingDetails;
    } catch (error) {
      throw error;
    }
  }

  async deleteBillingDetails({ id }: { id: number }) {
    try {
      const deletedBillingDetails = await this.prisma.billingDetails.delete({
        where: { id },
      });
      return deletedBillingDetails;
    } catch (error) {
      throw error;
    }
  }
}

export const billingDetailsManager = new BillingDetailsManager(
  new PrismaClient()
);
