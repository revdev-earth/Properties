/* eslint-disable @typescript-eslint/no-require-imports */

const { PrismaClient } = require("@prisma/client");

// const { tenant1, tenant2 } = require("./tenants");

const {
  information1,
  // information2
} = require("./information");

const { legalSeed } = require("./legal");
const { unitSeed } = require("./unit");

const {
  insuranceHomeowners,
  insuranceCommercialProperty,
  // insuranceHomeBasic,
  // insuranceFlood,
} = require("./insurance");

const { seedServices } = require("./services/ser");

const {
  economyData,
  architectureData,
  equipmentData,
  maintenance1Data,
  maintenance2Data,

  transactionMaintenanceCrackRepair,
  transactionRentalMarch2024,
} = require("./data");

const prisma = new PrismaClient();

async function createProperties() {
  const property1 = await prisma.property.create({
    data: {
      information: { create: information1 },
      insurances: {
        create: [insuranceHomeowners, insuranceCommercialProperty],
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

  await prisma.transaction.create({
    data: {
      ...transactionMaintenanceCrackRepair,
      economyId: economy1.id,
      maintenanceId: maintenance1.id,
    },
  });

  await prisma.transaction.create({
    data: {
      ...transactionRentalMarch2024,
      economyId: economy1.id,
    },
  });

  await legalSeed({ propertyId: property1.id });

  const unit = await unitSeed({ propertyId: property1.id });

  await seedServices({ propertyId: property1.id, unitId: unit.id });

  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const property2 = await prisma.property.create({
  //   data: {
  //     information: { create: information2 },
  //     insurances: { create: [insuranceHomeBasic, insuranceFlood] },
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
