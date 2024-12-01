import type {
  Architecture,
  Economy,
  Equipment,
  Maintenance,
  Service as ServicePrisma,
  Information,
  Insurance,
  Legal as LegalPrisma,
  Tenant as TenantPrisma,
  Setting,
  Transaction,
  IncidentService,
  Contract as ContractPrisma,
  FiscalDetail,
  LegalHistory,
  Owner as OwnerPrisma,
  PolicyAndWarranty,
  RegulationAndNorm,
  TitleDocument,
  Usage,
  Unit as UnitPrisma,
  SubTenant as SubTenantPrisma,
  User,
  ConsumptionAndMeasurement,
} from "@prisma/client";

export type Service = ServicePrisma & {
  consumptionAndMeasurements: ConsumptionAndMeasurement[];
  incidents: IncidentService[];
  insurances: Insurance[];
  transactions: Transaction[];
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

export type Unit = UnitPrisma & {
  contracts: Contract[];
  services: Service[];
};

export type Contract = ContractPrisma & {
  tenants: Tenant[];
  subTenants: SubTenant[];
};

export type Owner = OwnerPrisma & {
  user: User;
};

export type Tenant = TenantPrisma & {
  user: User;
};

export type SubTenant = SubTenantPrisma & {
  user: User;
};

export type Legal = LegalPrisma & {
  fiscalDetails: FiscalDetail[];
  legalHistories: LegalHistory[];
  owners: Owner[];
  policiesAndWarranties: PolicyAndWarranty[];
  regulationsAndNorms: RegulationAndNorm[];
  titleDocuments: TitleDocument[];
  usages: Usage[];
};

export const initialState = {
  property: {
    id: undefined as string | undefined,

    information: undefined as Information | undefined,

    legal: undefined as Legal | undefined,

    insurances: [] as Insurance[],
    services: [] as Service[],

    economy: undefined as EconomyWithTransactions | undefined,

    equipments: [] as EquipmentWithMaintenance[],
    architectures: [] as ArchitectureWithMaintenance[],

    notifications: [] as Notification[],
    Setting: [] as Setting[],

    units: [] as Unit[],

    createdAt: undefined as string | undefined,
    updatedAt: undefined as string | undefined,
  },
};

export type InitialState = typeof initialState;
export type State = InitialState;
