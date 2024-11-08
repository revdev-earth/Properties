import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class MeterReadingManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createMeterReading({ data }: { data: Prisma.MeterReadingCreateInput }) {
    try {
      const newMeterReading = await this.prisma.meterReading.create({
        data: data,
      });
      return newMeterReading;
    } catch (error) {
      throw error;
    }
  }

  async getMeterReadings(props?: {
    options?: Prisma.MeterReadingFindManyArgs;
  }) {
    try {
      const properties = await this.prisma.meterReading.findMany(
        props?.options
      );
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getMeterReadingById({ id }: { id: string }) {
    try {
      const meterReading = await this.prisma.meterReading.findUnique({
        where: { id },
      });
      return meterReading;
    } catch (error) {
      throw error;
    }
  }

  async updateMeterReading({
    id,
    data,
  }: {
    id: string;
    data: Prisma.MeterReadingUpdateInput;
  }) {
    try {
      const updatedMeterReading = await this.prisma.meterReading.update({
        where: { id },
        data: data,
      });
      return updatedMeterReading;
    } catch (error) {
      throw error;
    }
  }

  async deleteMeterReading({ id }: { id: string }) {
    try {
      const deletedMeterReading = await this.prisma.meterReading.delete({
        where: { id },
      });
      return deletedMeterReading;
    } catch (error) {
      throw error;
    }
  }
}

export const meterReadingManager = new MeterReadingManager(new PrismaClient());
