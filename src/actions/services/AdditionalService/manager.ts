import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class AdditionalServiceManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createAdditionalService({
    data,
  }: {
    data: Prisma.AdditionalServiceCreateInput;
  }) {
    try {
      const newAdditionalService = await this.prisma.additionalService.create({
        data: data,
      });
      return newAdditionalService;
    } catch (error) {
      throw error;
    }
  }

  async getAdditionalServices(props?: {
    options?: Prisma.AdditionalServiceFindManyArgs;
  }) {
    try {
      const properties = await this.prisma.additionalService.findMany(
        props?.options
      );
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getAdditionalServiceById({ id }: { id: number }) {
    try {
      const additionalService = await this.prisma.additionalService.findUnique({
        where: { id },
      });
      return additionalService;
    } catch (error) {
      throw error;
    }
  }

  async updateAdditionalService({
    id,
    data,
  }: {
    id: number;
    data: Prisma.AdditionalServiceUpdateInput;
  }) {
    try {
      const updatedAdditionalService =
        await this.prisma.additionalService.update({
          where: { id },
          data: data,
        });
      return updatedAdditionalService;
    } catch (error) {
      throw error;
    }
  }

  async deleteAdditionalService({ id }: { id: number }) {
    try {
      const deletedAdditionalService =
        await this.prisma.additionalService.delete({
          where: { id },
        });
      return deletedAdditionalService;
    } catch (error) {
      throw error;
    }
  }
}

export const additionalServiceManager = new AdditionalServiceManager(
  new PrismaClient()
);
