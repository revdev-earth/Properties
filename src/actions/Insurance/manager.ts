import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class InsuranceManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createInsurance({ data }: { data: Prisma.InsuranceCreateInput }) {
    try {
      const newInsurance = await this.prisma.insurance.create({
        data: data,
      });
      return newInsurance;
    } catch (error) {
      throw error;
    }
  }

  async getInsurances(props?: { options?: Prisma.InsuranceFindManyArgs }) {
    try {
      const properties = await this.prisma.insurance.findMany(props?.options);
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getInsuranceById({ id }: { id: string }) {
    try {
      const insurance = await this.prisma.insurance.findUnique({
        where: { id },
      });
      return insurance;
    } catch (error) {
      throw error;
    }
  }

  async updateInsurance({
    id,
    data,
  }: {
    id: string;
    data: Prisma.InsuranceUpdateInput;
  }) {
    try {
      const updatedInsurance = await this.prisma.insurance.update({
        where: { id },
        data: data,
      });
      return updatedInsurance;
    } catch (error) {
      throw error;
    }
  }

  async deleteInsurance({ id }: { id: string }) {
    try {
      const deletedInsurance = await this.prisma.insurance.delete({
        where: { id },
      });
      return deletedInsurance;
    } catch (error) {
      throw error;
    }
  }
}

export const insuranceManager = new InsuranceManager(new PrismaClient());
