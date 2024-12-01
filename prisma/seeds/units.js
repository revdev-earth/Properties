/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function unitSeed({ propertyId }) {
  const unit = await prisma.unit.create({
    data: {
      propertyId,
      unitType: "Apartment",
      unitNumber: "101",
      isAvailable: true,
      contracts: {
        create: [
          {
            contractType: "Lease Agreement",
            contractName: "Lease Agreement with Tenants",
            contractDuration: "2023-01-01 to 2025-01-01",
            isActive: true,
            tenantResponsibilities: "Maintain the property, pay utilities",
            ownerResponsibilities: "Ensure property is habitable",
            documentLink: "https://example.com/documents/contract-1.pdf",
            tenants: {
              create: [
                {
                  user: {
                    create: {
                      name: "Tenant 1 Name",
                      lastName: "Tenant 1 Last Name",
                      email: "tenant1@example.com",
                      phone: "+123456789",
                      birthDate: new Date("1990-06-15"),
                      address: "Tenant 1 Address",
                    },
                  },
                },
                {
                  user: {
                    create: {
                      name: "Tenant 2 Name",
                      lastName: "Tenant 2 Last Name",
                      email: "tenant2@example.com",
                      phone: "+987654321",
                      birthDate: new Date("1992-07-10"),
                      address: "Tenant 2 Address",
                    },
                  },
                },
              ],
            },
            subTenants: {
              create: [
                {
                  user: {
                    create: {
                      name: "SubTenant 1 Name",
                      lastName: "SubTenant 1 Last Name",
                      email: "subtenant1@example.com",
                      phone: "+123456789",
                      birthDate: new Date("1995-08-25"),
                      address: "SubTenant 1 Address",
                    },
                  },
                },
                {
                  user: {
                    create: {
                      name: "SubTenant 2 Name",
                      lastName: "SubTenant 2 Last Name",
                      email: "subtenant2@example.com",
                      phone: "+987654321",
                      birthDate: new Date("1998-09-30"),
                      address: "SubTenant 2 Address",
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("Seed completed successfully:", unit);
}

module.exports = { unitSeed };
