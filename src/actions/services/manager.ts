import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class PropertyBasicServiceManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createPropertyBasicService({
    data,
  }: {
    data: Prisma.PropertyBasicServiceCreateInput;
  }) {
    try {
      const newPropertyBasicService =
        await this.prisma.propertyBasicService.create({
          data: data,
        });
      return newPropertyBasicService;
    } catch (error) {
      throw error;
    }
  }

  async getPropertyBasicServices(props?: {
    options?: Prisma.PropertyBasicServiceFindManyArgs;
  }) {
    try {
      const properties = await this.prisma.propertyBasicService.findMany(
        props?.options
      );
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getPropertyBasicServiceById({ id }: { id: string }) {
    try {
      const property = await this.prisma.propertyBasicService.findUnique({
        where: { id },
      });
      return property;
    } catch (error) {
      throw error;
    }
  }

  async updatePropertyBasicService({
    id,
    data,
  }: {
    id: string;
    data: Prisma.PropertyBasicServiceUpdateInput;
  }) {
    try {
      const updatedPropertyBasicService =
        await this.prisma.propertyBasicService.update({
          where: { id },
          data: data,
        });
      return updatedPropertyBasicService;
    } catch (error) {
      throw error;
    }
  }

  async deletePropertyBasicService({ id }: { id: string }) {
    try {
      const deletedPropertyBasicService =
        await this.prisma.propertyBasicService.delete({
          where: { id },
        });
      return deletedPropertyBasicService;
    } catch (error) {
      throw error;
    }
  }
}

export const propertyBasicServiceManager = new PropertyBasicServiceManager(
  new PrismaClient()
);
