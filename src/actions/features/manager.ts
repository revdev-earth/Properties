import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class FeaturesManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createFeature({ data }: { data: Prisma.FeaturesCreateInput }) {
    try {
      const newFeature = await this.prisma.features.create({
        data: data,
      });
      return newFeature;
    } catch (error) {
      throw error;
    }
  }

  async getFeature(props?: { options?: Prisma.FeaturesFindManyArgs }) {
    try {
      const properties = await this.prisma.features.findMany(props?.options);
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getFeatureById({ id }: { id: number }) {
    try {
      const feature = await this.prisma.features.findUnique({
        where: { id },
      });
      return feature;
    } catch (error) {
      throw error;
    }
  }

  async updateFeature({
    id,
    data,
  }: {
    id: number;
    data: Prisma.FeaturesUpdateInput;
  }) {
    try {
      const updatedFeature = await this.prisma.features.update({
        where: { id },
        data: data,
      });
      return updatedFeature;
    } catch (error) {
      throw error;
    }
  }

  async deleteFeature({ id }: { id: number }) {
    try {
      const deletedFeature = await this.prisma.features.delete({
        where: { id },
      });
      return deletedFeature;
    } catch (error) {
      throw error;
    }
  }
}

export const featuresManager = new FeaturesManager(new PrismaClient());
