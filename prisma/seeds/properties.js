/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */

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

const {
  pay1Service1,
  pay1Service2,
  pay1Service3,
  pay3Service4,
  pay1Service5,
  pay1Service6,
  pay3Service7,
  pay1Service8,
  pay3Service9,
  pay1Service10,
} = require("./services/paymentServices");
const {
  maintenance1,
  maintenance2,
  maintenance3,
} = require("./maintenance/maintenances");
const {
  maintenanceProperty1,
  maintenanceProperty2,
} = require("./maintenance/maintenanceProperty");
const { provider1, provider2, provider3 } = require("./maintenance/provider");
const {
  maintenanceNote1,
  maintenanceNote2,
  maintenanceNote3,
} = require("./maintenance/notes");
const prisma = new PrismaClient();

async function createProperties() {
  const property1 = await prisma.property.create({
    data: {
      propertyInformation: { create: information1 },
      propertyLegal: { create: legal1 },
      propertyTenant: { create: tenant1 },
      propertyInsurance: { create: [propertyInsurance1, propertyInsurance2] },
      basicService: {
        create: [
          {
            ...service1,
            servicePayment: {
              create: [pay1Service1, pay2Service1, pay3Service1],
            },
          },
          {
            ...service2,
            servicePayment: {
              create: [pay1Service2, pay2Service2, pay3Service2],
            },
          },
          {
            ...service3,
            servicePayment: {
              create: [pay1Service3, pay2Service3, pay3Service3],
            },
          },
          {
            ...service4,
            servicePayment: {
              create: [pay1Service4, pay2Service4, pay3Service4],
            },
          },
          {
            ...service5,
            servicePayment: {
              create: [pay1Service5, pay2Service5, pay3Service5],
            },
          },
        ],
      },
      maintenanceInfoProperty: {
        create: {
          ...maintenanceProperty1,
          maintenance: {
            create: [
              {
                ...maintenance1,
                provider: { create: provider1 },
                maintenanceNotes: { create: maintenanceNote1 },
              },
              {
                ...maintenance2,
                provider: { create: provider2 },
                maintenanceNotes: { create: maintenanceNote2 },
              },
              {
                ...maintenance3,
                provider: { create: provider3 },
                maintenanceNotes: { create: maintenanceNote3 },
              },
            ],
          },
        },
      },
    },
  });

  const property2 = await prisma.property.create({
    data: {
      propertyInformation: { create: information2 },
      propertyLegal: { create: legal2 },
      propertyTenant: { create: tenant2 },
      propertyInsurance: { create: [propertyInsurance3, propertyInsurance4] },
      basicService: {
        create: [
          {
            ...service6,
            servicePayment: {
              create: [pay1Service6, pay2Service6, pay3Service6],
            },
          },
          {
            ...service7,
            servicePayment: {
              create: [pay1Service7, pay2Service7, pay3Service7],
            },
          },
          {
            ...service8,
            servicePayment: {
              create: [pay1Service8, pay2Service8, pay3Service8],
            },
          },
          {
            ...service9,
            servicePayment: {
              create: [pay1Service9, pay2Service9, pay3Service9],
            },
          },
          {
            ...service10,
            servicePayment: {
              create: [pay1Service10, pay2Service10, pay3Service10],
            },
          },
        ],
      },
      maintenanceProperty: {
        create: maintenanceProperty2,
      },
    },
  });
}

createProperties()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
