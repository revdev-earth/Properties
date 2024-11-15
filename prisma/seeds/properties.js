// seed.js
const { PrismaClient } = require("@prisma/client");
const { tenant1, tenant2 } = require("./tenants");
const { information1, information2 } = require("./information");
const { legal1, legal2 } = require("./legal");
const {
  propertyInsurance1,
  propertyInsurance2,
  propertyInsurance3,
  propertyInsurance4,
} = require("./insurance");
const {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  service7,
  service8,
  service9,
  service10,
} = require("./services/services");
const { preventive1, preventive2 } = require("./maintenance/preventive");
const { corrective1, corrective2 } = require("./maintenance/corrective");
const { request1, request2 } = require("./maintenance/resquest");
const { inspectionHistory2 } = require("./maintenance/inspectionHistory");
const {
  noteMaintenance1,
  noteMaintenance2,
  noteMaintenance4,
  noteMaintenance3,
} = require("./maintenance/notes");
const { pay1Service1 } = require("./services/paymentServices");
const prisma = new PrismaClient();

async function main() {
  // Creamos las propiedades con su información de PropertyInformation

  // Primera propiedad
  const property1 = await prisma.property.create({
    data: {
      propertyInformation: {
        create: information1,
      },
      propertyLegal: {
        create: legal1,
      },
      propertyTenant: {
        create: tenant1,
      },
      propertyInsurance: {
        create: [propertyInsurance1, propertyInsurance2],
      },
      basicService: {
        create: [
          {
            ...service1,
            servicePayment: {
              create: [pay1Service1],
            },
          },
          {
            ...service2,
            servicePayment: {
              create: [pay1Service1],
            },
          },
          {
            ...service3,
            servicePayment: {
              create: [pay1Service1],
            },
          },
          {
            ...service4,
            servicePayment: {
              create: [pay1Service1],
            },
          },
          {
            ...service5,
            servicePayment: {
              create: [pay1Service1],
            },
          },
        ],
      },
      preventiveMaintenance: {
        create: preventive1,
      },
      correctiveMaintenance: {
        create: corrective1,
      },
      maintenanceRequest: {
        create: request1,
      },
      inspectionHistory: {
        create: inspectionHistory1,
      },
      maintenanceNotes: {
        create: noteMaintenance1,
      },
      maintenanceNotes: {
        create: noteMaintenance2,
      },
    },
  });

  const property2 = await prisma.property.create({
    data: {
      propertyInformation: {
        create: information2,
      },
      propertyLegal: {
        create: legal2,
      },
      propertyTenant: {
        create: tenant2,
      },
      propertyInsurance: {
        create: [propertyInsurance3, propertyInsurance4],
      },
      basicService: {
        create: [service6, service7, service8, service9, service10],
      },
      preventiveMaintenance: {
        create: preventive2,
      },
      correctiveMaintenance: {
        create: corrective2,
      },
      maintenanceRequest: {
        create: request2,
      },
      inspectionHistory: {
        create: inspectionHistory2,
      },
      maintenanceNotes: {
        create: noteMaintenance3,
      },
      maintenanceNotes: {
        create: noteMaintenance4,
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
