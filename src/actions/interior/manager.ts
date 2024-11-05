import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class InteriorManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createInterior({ data }: { data: Prisma.InteriorCreateInput }) {
    try {
      const newInterior = await this.prisma.interior.create({
        data: data,
      });
      return newInterior;
    } catch (error) {
      throw error;
    }
  }

  async getInterior(props?: { options?: Prisma.InteriorFindManyArgs }) {
    try {
      const properties = await this.prisma.interior.findMany(props?.options);
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getInteriorById({ id }: { id: number }) {
    try {
      const interior = await this.prisma.interior.findUnique({
        where: { id },
      });
      return interior;
    } catch (error) {
      throw error;
    }
  }

  async updateInterior({
    id,
    data,
  }: {
    id: number;
    data: Prisma.InteriorUpdateInput;
  }) {
    try {
      const updatedInterior = await this.prisma.interior.update({
        where: { id },
        data: data,
      });
      return updatedInterior;
    } catch (error) {
      throw error;
    }
  }

  async deleteInterior({ id }: { id: number }) {
    try {
      const deletedInterior = await this.prisma.interior.delete({
        where: { id },
      });
      return deletedInterior;
    } catch (error) {
      throw error;
    }
  }
}

export const interiorManager = new InteriorManager(new PrismaClient());
