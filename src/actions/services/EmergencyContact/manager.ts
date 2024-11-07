import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class EmergencyContactManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createEmergencyContact({
    data,
  }: {
    data: Prisma.EmergencyContactCreateInput;
  }) {
    try {
      const newEmergencyContact = await this.prisma.emergencyContact.create({
        data: data,
      });
      return newEmergencyContact;
    } catch (error) {
      throw error;
    }
  }

  async getEmergencyContacts(props?: {
    options?: Prisma.EmergencyContactFindManyArgs;
  }) {
    try {
      const properties = await this.prisma.emergencyContact.findMany(
        props?.options
      );
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getEmergencyContactById({ id }: { id: number }) {
    try {
      const emergencyContact = await this.prisma.emergencyContact.findUnique({
        where: { id },
      });
      return emergencyContact;
    } catch (error) {
      throw error;
    }
  }

  async updateEmergencyContact({
    id,
    data,
  }: {
    id: number;
    data: Prisma.EmergencyContactUpdateInput;
  }) {
    try {
      const updatedEmergencyContact = await this.prisma.emergencyContact.update(
        {
          where: { id },
          data: data,
        }
      );
      return updatedEmergencyContact;
    } catch (error) {
      throw error;
    }
  }

  async deleteEmergencyContact({ id }: { id: number }) {
    try {
      const deletedEmergencyContact = await this.prisma.emergencyContact.delete(
        {
          where: { id },
        }
      );
      return deletedEmergencyContact;
    } catch (error) {
      throw error;
    }
  }
}

export const emergencyContactManager = new EmergencyContactManager(
  new PrismaClient()
);
