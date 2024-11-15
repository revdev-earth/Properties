import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class PropertyManager {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma;
  }

  async createProperty({ data }: { data: Prisma.PropertyCreateInput }) {
    try {
      return await this.prisma.property.create({
        data: data,
      });
    } catch (error) {
      throw error;
    }
  }

  async getProperties(props?: { options?: Prisma.PropertyFindManyArgs }) {
    try {
      return await this.prisma.property.findMany(props?.options);
    } catch (error) {
      throw error;
    }
  }

  async getPropertyById({
    id,
    options,
  }: {
    id: string;
    options?: Prisma.PropertyFindUniqueArgs;
  }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        ...options,
      });
    } catch (error) {
      throw error;
    }
  }

  async updateProperty({
    id,
    data,
  }: {
    id: string;
    data: Prisma.PropertyUpdateInput;
  }) {
    try {
      return await this.prisma.property.update({
        where: { id },
        data: data,
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteProperty({ id }: { id: string }) {
    try {
      return await this.prisma.property.delete({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  async getPropertiesWithAddress() {
    try {
      return await this.prisma.property.findMany({
        include: {
          propertyInformation: {
            select: {
              streetAndNumber: true,
              neighborhood: true,
              cityAndState: true,
            },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getPropertyInformationByPropertyId({ id }: { id: string }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        include: { propertyInformation: true },
      });
    } catch (error) {
      throw error;
    }
  }

  async getPropertyLegalByPropertyId({ id }: { id: string }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        include: { propertyLegal: true },
      });
    } catch (error) {
      throw error;
    }
  }

  async getPropertyInsuranceByPropertyId({ id }: { id: string }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        include: { propertyInsurance: true },
      });
    } catch (error) {
      throw error;
    }
  }
  async getPropertyTenantByPropertyId({ id }: { id: string }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        include: { propertyTenant: true },
      });
    } catch (error) {
      throw error;
    }
  }

  async getPropertyServicesByPropertyId({ id }: { id: string }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        include: {
          basicService: {
            include: {
              servicePayment: true,
            },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getPropertyPreventiveMaintenanceByPropertyId({ id }: { id: string }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        include: { preventiveMaintenance: true },
      });
    } catch (error) {
      throw error;
    }
  }

  async getPropertyCorrectiveMaintenanceByPropertyId({ id }: { id: string }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        include: { correctiveMaintenance: true },
      });
    } catch (error) {
      throw error;
    }
  }

  async getMaintenanceRequestByPropertyId({ id }: { id: string }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        include: { maintenanceRequest: true },
      });
    } catch (error) {
      throw error;
    }
  }
  async getMaintenanceHistoryByPropertyId({ id }: { id: string }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        include: { inspectionHistory: true },
      });
    } catch (error) {
      throw error;
    }
  }

  async getMaintenanceNotesByPropertyId({ id }: { id: string }) {
    try {
      return await this.prisma.property.findUnique({
        where: { id },
        include: { maintenanceNotes: true },
      });
    } catch (error) {
      throw error;
    }
  }
}

export const propertyManager = new PropertyManager(new PrismaClient());
