import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class ExteriorManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createExterior({ data }: { data: Prisma.ExteriorCreateInput }) {
    try {
      const newExterior = await this.prisma.exterior.create({
        data: data,
      });
      return newExterior;
    } catch (error) {
      throw error;
    }
  }

  async getExterior(props?: { options?: Prisma.ExteriorFindManyArgs }) {
    try {
      const properties = await this.prisma.exterior.findMany(props?.options);
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getExteriorById({ id }: { id: number }) {
    try {
      const exterior = await this.prisma.exterior.findUnique({
        where: { id },
      });
      return exterior;
    } catch (error) {
      throw error;
    }
  }

  async updateExterior({
    id,
    data,
  }: {
    id: number;
    data: Prisma.ExteriorUpdateInput;
  }) {
    try {
      const updatedExterior = await this.prisma.exterior.update({
        where: { id },
        data: data,
      });
      return updatedExterior;
    } catch (error) {
      throw error;
    }
  }

  async deleteExterior({ id }: { id: number }) {
    try {
      const deletedExterior = await this.prisma.exterior.delete({
        where: { id },
      });
      return deletedExterior;
    } catch (error) {
      throw error;
    }
  }
}

export const exteriorManager = new ExteriorManager(new PrismaClient());
