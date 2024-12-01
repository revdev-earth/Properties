/* eslint-disable @typescript-eslint/no-require-imports */

const { PrismaClient } = require("@prisma/client");

// const { tenant1, tenant2 } = require("./tenants");
const { information1, information2 } = require("./information");
const { legalSeed } = require("./legal");
const { unitSeed } = require("./units");

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
  pay2Service1,
  pay3Service1,
  pay1Service2,
  pay2Service2,
  pay3Service2,
  pay1Service3,
  pay2Service3,
  pay3Service3,
  pay1Service4,
  pay2Service4,
  pay3Service4,
  pay1Service5,
  pay2Service5,
  pay3Service5,
  pay1Service6,
  pay2Service6,
  pay3Service6,
  pay1Service7,
  pay2Service7,
  pay3Service7,
  pay1Service8,
  pay2Service8,
  pay3Service8,
  pay1Service9,
  pay2Service9,
  pay3Service9,
  pay1Service10,
  pay2Service10,
  pay3Service10,
} = require("./services/paymentServices");

const {
  incidentService1,
  incidentService2,
  incidentService3,
  incidentService4,
  incidentService5,
  incidentService6,
  incidentService7,
  incidentService8,
  incidentService9,
  incidentService10,
} = require("./services/incidentService");

const {
  economyData,
  architectureData,
  equipmentData,
  maintenance1Data,
  maintenance2Data,
  transaction1Data,
  transaction2Data,
} = require("./data");

const prisma = new PrismaClient();

async function createProperties() {
  const property1 = await prisma.property.create({
    data: {
      information: { create: information1 },
      insurances: { create: [propertyInsurance1, propertyInsurance2] },
      services: {
        create: [
          {
            ...service1,
            servicePayment: {
              create: [pay1Service1, pay2Service1, pay3Service1],
            },
            incident: {
              create: [incidentService9, incidentService10],
            },
          },
          {
            ...service2,
            servicePayment: {
              create: [pay1Service2, pay2Service2, pay3Service2],
            },
            incident: {
              create: [incidentService1],
            },
          },
          {
            ...service3,
            servicePayment: {
              create: [pay1Service3, pay2Service3, pay3Service3],
            },
            incident: {
              create: [incidentService2],
            },
          },
          {
            ...service4,
            servicePayment: {
              create: [pay1Service4, pay2Service4, pay3Service4],
            },
            incident: {
              create: [incidentService3],
            },
          },
          {
            ...service5,
            servicePayment: {
              create: [pay1Service5, pay2Service5, pay3Service5],
            },
            incident: {
              create: [incidentService4],
            },
          },
        ],
      },
    },
  });

  const economy1 = await prisma.economy.create({
    data: {
      ...economyData,
      propertyId: property1.id,
    },
  });

  const architecture1 = await prisma.architecture.create({
    data: {
      ...architectureData,
      propertyId: property1.id,
    },
  });

  const equipment1 = await prisma.equipment.create({
    data: {
      ...equipmentData,
      propertyId: property1.id,
    },
  });

  const maintenance1 = await prisma.maintenance.create({
    data: {
      ...maintenance1Data,
      architectureId: architecture1.id,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const maintenance2 = await prisma.maintenance.create({
    data: {
      ...maintenance2Data,
      equipmentId: equipment1.id,
    },
  });

  // await prisma.transaction.create({
  //   data: {
  //     ...transaction1Data,
  //     economyId: economy1.id,
  //     relatedMaintenanceId: maintenance1.id,
  //   },
  // });

  await prisma.transaction.create({
    data: {
      ...transaction2Data,
      economyId: economy1.id,
    },
  });

  legalSeed({ propertyId: property1.id });

  unitSeed({ propertyId: property1.id });

  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const property2 = await prisma.property.create({
  //   data: {
  //     information: { create: information2 },
  //     insurances: { create: [propertyInsurance3, propertyInsurance4] },
  //     services: {
  //       create: [
  //         {
  //           ...service6,
  //           servicePayment: {
  //             create: [pay1Service6, pay2Service6, pay3Service6],
  //           },
  //           incident: {
  //             create: [incidentService5],
  //           },
  //         },
  //         {
  //           ...service7,
  //           servicePayment: {
  //             create: [pay1Service7, pay2Service7, pay3Service7],
  //           },
  //           incident: {
  //             create: [incidentService6],
  //           },
  //         },
  //         {
  //           ...service8,
  //           servicePayment: {
  //             create: [pay1Service8, pay2Service8, pay3Service8],
  //           },
  //           incident: {
  //             create: [incidentService7],
  //           },
  //         },
  //         {
  //           ...service9,
  //           servicePayment: {
  //             create: [pay1Service9, pay2Service9, pay3Service9],
  //           },
  //           incident: {
  //             create: [incidentService8],
  //           },
  //         },
  //         {
  //           ...service10,
  //           servicePayment: {
  //             create: [pay1Service10, pay2Service10, pay3Service10],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
}

createProperties()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
