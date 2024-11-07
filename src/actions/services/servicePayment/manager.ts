import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class ServicePaymentManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createServicePayment({
    data,
  }: {
    data: Prisma.ServicePaymentCreateInput;
  }) {
    try {
      const newServicePayment = await this.prisma.servicePayment.create({
        data: data,
      });
      return newServicePayment;
    } catch (error) {
      throw error;
    }
  }

  async getServicePayments(props?: {
    options?: Prisma.ServicePaymentFindManyArgs;
  }) {
    try {
      const properties = await this.prisma.servicePayment.findMany(
        props?.options
      );
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getServicePaymentById({ id }: { id: number }) {
    try {
      const servicePayment = await this.prisma.servicePayment.findUnique({
        where: { id },
      });
      return servicePayment;
    } catch (error) {
      throw error;
    }
  }

  async updateServicePayment({
    id,
    data,
  }: {
    id: number;
    data: Prisma.ServicePaymentUpdateInput;
  }) {
    try {
      const updatedServicePayment = await this.prisma.servicePayment.update({
        where: { id },
        data: data,
      });
      return updatedServicePayment;
    } catch (error) {
      throw error;
    }
  }

  async deleteServicePayment({ id }: { id: number }) {
    try {
      const deletedServicePayment = await this.prisma.servicePayment.delete({
        where: { id },
      });
      return deletedServicePayment;
    } catch (error) {
      throw error;
    }
  }
}

export const servicePaymentManager = new ServicePaymentManager(
  new PrismaClient()
);
