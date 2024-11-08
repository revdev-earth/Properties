import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class Incidentanager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createIncident({ data }: { data: Prisma.IncidentCreateInput }) {
    try {
      const newIncident = await this.prisma.incident.create({
        data: data,
      });
      return newIncident;
    } catch (error) {
      throw error;
    }
  }

  async getIncidents(props?: { options?: Prisma.IncidentFindManyArgs }) {
    try {
      const properties = await this.prisma.incident.findMany(props?.options);
      return properties;
    } catch (error) {
      throw error;
    }
  }

  async getIncidentById({ id }: { id: string }) {
    try {
      const incident = await this.prisma.incident.findUnique({
        where: { id },
      });
      return incident;
    } catch (error) {
      throw error;
    }
  }

  async updateIncident({
    id,
    data,
  }: {
    id: string;
    data: Prisma.IncidentUpdateInput;
  }) {
    try {
      const updatedIncident = await this.prisma.incident.update({
        where: { id },
        data: data,
      });
      return updatedIncident;
    } catch (error) {
      throw error;
    }
  }

  async deleteIncident({ id }: { id: string }) {
    try {
      const deletedIncident = await this.prisma.incident.delete({
        where: { id },
      });
      return deletedIncident;
    } catch (error) {
      throw error;
    }
  }
}

export const incidentManager = new Incidentanager(new PrismaClient());
