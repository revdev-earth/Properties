import type {
  Architecture,
  Economy,
  Equipment,
  Maintenance,
  Service as ServicePrisma,
  Information,
  Insurance,
  Legal,
  Tenant,
  Setting,
  Transaction,
  ServicePayment,
  IncidentService,
} from "@prisma/client";

export type Service = ServicePrisma & {
  servicePayment: ServicePayment[];
  incident: IncidentService[];
};

export type EconomyWithTransactions = Economy & {
  transactions: Transaction[];
};

export type ArchitectureWithMaintenance = Architecture & {
  maintenances: Maintenance[];
  subelements: Architecture[];
};

export type EquipmentWithMaintenance = Equipment & {
  maintenances: Maintenance[];
};

export const initialState = {
  property: {
    id: undefined as string | undefined,

    information: undefined as Information | undefined,

    legal: undefined as Legal | undefined,
    tenant: undefined as Tenant | undefined,

    insurances: [] as Insurance[],
    services: [] as Service[],

    economy: undefined as EconomyWithTransactions | undefined,

    equipments: [] as EquipmentWithMaintenance[],
    architectures: [] as ArchitectureWithMaintenance[],

    notifications: [] as Notification[],
    Setting: [] as Setting[],

    createdAt: undefined as string | undefined,
    updatedAt: undefined as string | undefined,
  },
};

export type InitialState = typeof initialState;
export type State = InitialState;
