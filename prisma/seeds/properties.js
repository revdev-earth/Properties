// seed.js
const { PrismaClient } = require("@prisma/client");
const { tenant1, tenant2 } = require("./tenants");
const { information1, information2 } = require("./information");
const { legal1, legal2 } = require("./legal");
const { propertyInsurance1, propertyInsurance2 } = require("./insurance");
const { service1, service2 } = require("./services");
const { preventive1, preventive2 } = require("./maintenance/preventive");
const { corrective1, corrective2 } = require("./maintenance/corrective");
const { request1, request2 } = require("./maintenance/resquest");
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
      propertyTenant: {
        create: tenant1,
      },
      propertyInsurance: {
        create: propertyInsurance1,
      },
      basicService: {
        create: service1,
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
      propertyTenant: {
        create: tenant2,
      },
      propertyInsurance: {
        create: propertyInsurance2,
      },
      basicService: {
        create: service2,
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
    },
  });

  console.log("Created properties with legal information:", {
    property1,
    property2,
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
