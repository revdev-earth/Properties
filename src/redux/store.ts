import type {
  Architecture,
  Economy,
  Equipment,
  Maintenance,
  PropertyBasicService,
  PropertyInformation,
  PropertyInsurance,
  PropertyLegal,
  PropertyTenant,
  Setting,
  Transaction,
} from "@prisma/client";

type EconomyWithTransactions = Economy & {
  transactions: Transaction[];
};

type ArchitectureWithMaintenance = Architecture & {
  maintenances: Maintenance[];
  subelements: Architecture[];
};

type EquipmentWithMaintenance = Equipment & {
  maintenances: Maintenance[];
};

export const initialState = {
  property: {
    id: undefined as string | undefined,

    propertyInformation: undefined as PropertyInformation | undefined,

    propertyLegal: undefined as PropertyLegal | undefined,
    propertyTenant: undefined as PropertyTenant | undefined,

    propertyInsurance: [] as PropertyInsurance[],
    basicService: [] as PropertyBasicService[],

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
