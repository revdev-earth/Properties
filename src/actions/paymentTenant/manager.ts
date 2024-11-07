import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class PaymentTenantManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createPaymentTenant({
    data,
  }: {
    data: Prisma.PaymentTenantCreateInput;
  }) {
    try {
      const newPaymentTenant = await this.prisma.paymentTenant.create({
        data: data,
      });
      return newPaymentTenant;
    } catch (error) {
      throw error;
    }
  }

  async getPaymentTenants(props?: {
    options?: Prisma.PaymentTenantFindManyArgs;
  }) {
    try {
      const properties = await this.prisma.paymentTenant.findMany(
        props?.options
      );
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getPaymentTenantById({ id }: { id: number }) {
    try {
      const paymentTenant = await this.prisma.paymentTenant.findUnique({
        where: { id },
      });
      return paymentTenant;
    } catch (error) {
      throw error;
    }
  }

  async updatePaymentTenant({
    id,
    data,
  }: {
    id: number;
    data: Prisma.PaymentTenantUpdateInput;
  }) {
    try {
      const updatedPaymentTenant = await this.prisma.paymentTenant.update({
        where: { id },
        data: data,
      });
      return updatedPaymentTenant;
    } catch (error) {
      throw error;
    }
  }

  async deletePaymentTenant({ id }: { id: number }) {
    try {
      const deletedPaymentTenant = await this.prisma.paymentTenant.delete({
        where: { id },
      });
      return deletedPaymentTenant;
    } catch (error) {
      throw error;
    }
  }
}

export const paymentTenantManager = new PaymentTenantManager(
  new PrismaClient()
);
