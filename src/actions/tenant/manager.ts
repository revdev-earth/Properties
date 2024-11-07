import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class TenantManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createTenant({ data }: { data: Prisma.TenantCreateInput }) {
    try {
      const newTenant = await this.prisma.tenant.create({
        data: data,
      });
      return newTenant;
    } catch (error) {
      throw error;
    }
  }

  async getTenants(props?: { options?: Prisma.TenantFindManyArgs }) {
    try {
      const properties = await this.prisma.tenant.findMany(props?.options);
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getTenantById({ id }: { id: number }) {
    try {
      const tenant = await this.prisma.tenant.findUnique({
        where: { id },
      });
      return tenant;
    } catch (error) {
      throw error;
    }
  }

  async updateTenant({
    id,
    data,
  }: {
    id: number;
    data: Prisma.TenantUpdateInput;
  }) {
    try {
      const updatedTenant = await this.prisma.tenant.update({
        where: { id },
        data: data,
      });
      return updatedTenant;
    } catch (error) {
      throw error;
    }
  }

  async deleteTenant({ id }: { id: number }) {
    try {
      const deletedTenant = await this.prisma.tenant.delete({
        where: { id },
      });
      return deletedTenant;
    } catch (error) {
      throw error;
    }
  }
}

export const tenantManager = new TenantManager(new PrismaClient());
