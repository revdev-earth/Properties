import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class ClaimManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createClaim({ data }: { data: Prisma.ClaimCreateInput }) {
    try {
      const newClaim = await this.prisma.claim.create({
        data: data,
      });
      return newClaim;
    } catch (error) {
      throw error;
    }
  }

  async getClaims(props?: { options?: Prisma.ClaimFindManyArgs }) {
    try {
      const properties = await this.prisma.claim.findMany(props?.options);
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getClaimById({ id }: { id: string }) {
    try {
      const claim = await this.prisma.claim.findUnique({
        where: { id },
      });
      return claim;
    } catch (error) {
      throw error;
    }
  }

  async updateClaim({
    id,
    data,
  }: {
    id: string;
    data: Prisma.ClaimUpdateInput;
  }) {
    try {
      const updatedClaim = await this.prisma.claim.update({
        where: { id },
        data: data,
      });
      return updatedClaim;
    } catch (error) {
      throw error;
    }
  }

  async deleteClaim({ id }: { id: string }) {
    try {
      const deletedClaim = await this.prisma.claim.delete({
        where: { id },
      });
      return deletedClaim;
    } catch (error) {
      throw error;
    }
  }
}

export const claimManager = new ClaimManager(new PrismaClient());
