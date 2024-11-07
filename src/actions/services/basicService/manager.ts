import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class BasicServiceManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createBasicService({ data }: { data: Prisma.BasicServiceCreateInput }) {
    try {
      const newBasicService = await this.prisma.basicService.create({
        data: data,
      });
      return newBasicService;
    } catch (error) {
      throw error;
    }
  }

  async getBasicServices(props?: {
    options?: Prisma.BasicServiceFindManyArgs;
  }) {
    try {
      const properties = await this.prisma.basicService.findMany(
        props?.options
      );
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getBasicServiceById({ id }: { id: number }) {
    try {
      const basicService = await this.prisma.basicService.findUnique({
        where: { id },
      });
      return basicService;
    } catch (error) {
      throw error;
    }
  }

  async updateBasicService({
    id,
    data,
  }: {
    id: number;
    data: Prisma.BasicServiceUpdateInput;
  }) {
    try {
      const updatedBasicService = await this.prisma.basicService.update({
        where: { id },
        data: data,
      });
      return updatedBasicService;
    } catch (error) {
      throw error;
    }
  }

  async deleteBasicService({ id }: { id: number }) {
    try {
      const deletedBasicService = await this.prisma.basicService.delete({
        where: { id },
      });
      return deletedBasicService;
    } catch (error) {
      throw error;
    }
  }
}

export const basicServiceManager = new BasicServiceManager(new PrismaClient());
