/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");

const {
  electricityTransaction,
  internetTransaction,
  waterTransaction,
  gasTransaction,
  cableTransaction,
} = require("./tran");
const prisma = new PrismaClient();

const electricityService = {
  // Service Information
  type: "Electricity",
  provider: "Electricidad Global S.A.",
  accountNumber: "1234567890",
  paymentResponsible: "Property Owner",

  // Emergency and Support Contacts
  emergencyNumber: "0800-123456",
  supportContactName: "Juan Pérez",
  supportContactPhone: "0800-7654321",
  supportContactEmail: "soporte@electricidadglobal.com",
  supportHours: "Lunes a Viernes, de 9:00 a 18:00",

  // Conditions and Specific Clauses
  disconnectionClause: "El servicio puede ser suspendido tras 30 días de mora.",
  contractConditions: "Penalización del 20% por cancelación anticipada.",
  sharedResponsibilities:
    "El propietario se encarga de la instalación inicial. El inquilino cubre el consumo mensual.",

  // Relationships
  incidents: {
    create: [
      {
        incidentDate: new Date("2023-08-15"),
        incidentDescription: "Apagón en la zona debido a mantenimiento.",
        actionsTaken: "Servicio restablecido en 4 horas.",
        compensation: 15.0,
        compensationNotes: "Descuento aplicado en la siguiente factura.",
      },
    ],
  },
  consumptionAndMeasurements: {
    create: [
      {
        measurementMethod: "Electric meter",
        readingDate: new Date("2023-07-31"),
        readingValue: 98.5,
        readingNotes: "Lectura mensual",
        averageConsumption: 90.0,
      },
    ],
  },

  transactions: { create: [electricityTransaction] },
};

const internetService = {
  // Service Information
  type: "Internet",
  provider: "FiberNet",
  accountNumber: "9876543210",
  paymentResponsible: "Tenant",

  // Emergency and Support Contacts
  emergencyNumber: "0800-987654",
  supportContactName: "María López",
  supportContactPhone: "0800-1122333",
  supportContactEmail: "soporte@fibernet.com",
  supportHours: "Lunes a Domingo, 24 horas",

  // Conditions and Specific Clauses
  disconnectionClause:
    "Se cobrará una tarifa por reconexión si el servicio es desconectado por falta de pago.",
  contractConditions:
    "Contrato de 12 meses. Penalización del 10% por cancelación anticipada.",
  sharedResponsibilities:
    "El inquilino se encarga de los pagos mensuales y del mantenimiento del equipo proporcionado.",

  // Relationships
  incidents: {
    create: [
      {
        incidentDate: new Date("2023-06-10"),
        incidentDescription: "Interrupción del servicio por fallo en el nodo.",
        actionsTaken: "Nodo reparado en 6 horas.",
        compensation: 10.0,
        compensationNotes: "Descuento aplicado en la factura siguiente.",
      },
    ],
  },
  consumptionAndMeasurements: {
    create: [
      {
        measurementMethod: "Internet bandwidth",
        readingDate: new Date("2023-06-30"),
        readingValue: 500.0, // in GB
        readingNotes: "Uso mensual estimado.",
        averageConsumption: 450.0, // in GB
      },
    ],
  },

  transactions: { create: [internetTransaction] },
};

const waterService = {
  // Service Information
  type: "Water",
  provider: "Aguas del Norte",
  accountNumber: "1122334455",
  paymentResponsible: "Property Owner",

  // Emergency and Support Contacts
  emergencyNumber: "0800-333444",
  supportContactName: "Carlos Martínez",
  supportContactPhone: "0800-2233445",
  supportContactEmail: "soporte@aguasdelnorte.com",
  supportHours: "Lunes a Viernes, de 8:00 a 17:00",

  // Conditions and Specific Clauses
  disconnectionClause: "El servicio se suspende tras 60 días de impago.",
  contractConditions:
    "Sin penalización por cancelación, pero se requiere aviso previo de 15 días.",
  sharedResponsibilities:
    "El propietario es responsable de las conexiones de agua. El inquilino debe informar cualquier fuga o desperfecto.",

  // Relationships
  incidents: {
    create: [
      {
        incidentDate: new Date("2023-09-05"),
        incidentDescription: "Fuga en tubería principal.",
        actionsTaken: "Reparación realizada en 2 horas.",
        compensation: null,
        compensationNotes: "No aplicó compensación.",
      },
    ],
  },
  consumptionAndMeasurements: {
    create: [
      {
        measurementMethod: "Water meter",
        readingDate: new Date("2023-09-30"),
        readingValue: 25.5, // in cubic meters
        readingNotes: "Consumo mensual.",
        averageConsumption: 22.0, // in cubic meters
      },
    ],
  },

  transactions: { create: [waterTransaction] },
};

const gasService = {
  // Service Information
  type: "Gas",
  provider: "Gas Natural S.A.",
  accountNumber: "6677889900",
  paymentResponsible: "Tenant",

  // Emergency and Support Contacts
  emergencyNumber: "0800-400500",
  supportContactName: "Ana García",
  supportContactPhone: "0800-2233445",
  supportContactEmail: "soporte@gnatural.com",
  supportHours: "Lunes a Sábado, de 9:00 a 19:00",

  // Conditions and Specific Clauses
  disconnectionClause:
    "Si el servicio es interrumpido por más de 15 días, el inquilino deberá pagar un cargo adicional por reconexión.",
  contractConditions:
    "Contrato mínimo de 6 meses. Cancelación anticipada con penalización del 15%.",
  sharedResponsibilities:
    "El propietario se encarga de la instalación y mantenimiento del medidor. El inquilino paga por el consumo mensual.",

  // Relationships
  incidents: {
    create: [
      {
        incidentDate: new Date("2023-11-15"),
        incidentDescription: "Fuga de gas en la conexión interna.",
        actionsTaken: "Reparación realizada en 3 horas.",
        compensation: null,
        compensationNotes: "No aplicó compensación.",
      },
    ],
  },
  consumptionAndMeasurements: {
    create: [
      {
        measurementMethod: "Gas meter",
        readingDate: new Date("2023-10-31"),
        readingValue: 180.0, // in cubic meters
        readingNotes: "Consumo mensual.",
        averageConsumption: 170.0, // in cubic meters
      },
    ],
  },

  transactions: { create: [gasTransaction] },
};

const cableService = {
  // Service Information
  type: "Cable TV",
  provider: "VisionCable",
  accountNumber: "5566778899",
  paymentResponsible: "Property Owner",

  // Emergency and Support Contacts
  emergencyNumber: "0800-555666",
  supportContactName: "Luis Fernández",
  supportContactPhone: "0800-3445556",
  supportContactEmail: "soporte@visioncable.com",
  supportHours: "Lunes a Viernes, de 10:00 a 19:00",

  // Conditions and Specific Clauses
  disconnectionClause:
    "El servicio puede ser suspendido por falta de pago después de 30 días.",
  contractConditions:
    "Penalización del 10% por cancelación anticipada. Contrato por 12 meses.",
  sharedResponsibilities:
    "El propietario se encarga de la instalación del servicio. El inquilino debe pagar las tarifas mensuales.",

  // Relationships
  incidents: {
    create: [
      {
        incidentDate: new Date("2023-07-01"),
        incidentDescription: "Falla en la señal por problemas climáticos.",
        actionsTaken: "Reparación realizada en 1 día.",
        compensation: 5.0,
        compensationNotes: "Descuento aplicado a la factura mensual.",
      },
    ],
  },

  transactions: { create: [cableTransaction] },
};

async function seedService({ propertyId, unitId, service }) {
  const createdService = await prisma.service.create({
    data: { propertyId, unitId, ...service },
  });

  console.log("Service seeded successfully:", createdService);
}

async function seedServices({ propertyId, unitId }) {
  const services = [
    electricityService,
    internetService,
    waterService,
    gasService,
    cableService,
  ];

  for (const service of services) {
    await seedService({ propertyId, unitId, service });
  }

  console.log("All services seeded successfully.");
}

module.exports = { seedService, seedServices };
