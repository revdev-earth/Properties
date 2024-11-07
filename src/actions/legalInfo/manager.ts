import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class LegalInfoManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createLegalInfo({ data }: { data: Prisma.LegalInfoCreateInput }) {
    try {
      const newLegalInfo = await this.prisma.legalInfo.create({
        data: data,
      });
      return newLegalInfo;
    } catch (error) {
      throw error;
    }
  }

  async getLegalInfo(props?: { options?: Prisma.LegalInfoFindManyArgs }) {
    try {
      const properties = await this.prisma.legalInfo.findMany(props?.options);
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getLegalInfoById({ id }: { id: number }) {
    try {
      const legalInfo = await this.prisma.legalInfo.findUnique({
        where: { id },
      });
      return legalInfo;
    } catch (error) {
      throw error;
    }
  }

  async updateLegalInfo({
    id,
    data,
  }: {
    id: number;
    data: Prisma.LegalInfoUpdateInput;
  }) {
    try {
      const updatedLegalInfo = await this.prisma.legalInfo.update({
        where: { id },
        data: data,
      });
      return updatedLegalInfo;
    } catch (error) {
      throw error;
    }
  }

  async deleteLegalInfo({ id }: { id: number }) {
    try {
      const deletedLegalInfo = await this.prisma.legalInfo.delete({
        where: { id },
      });
      return deletedLegalInfo;
    } catch (error) {
      throw error;
    }
  }
}

export const legalInfoManager = new LegalInfoManager(new PrismaClient());
