/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function tenantSeed({
  name,
  lastName,
  email,
  phone,
  birthDate,
  address,
  transactions,
  insurances,
  contracts,
}) {
  const tenant = await prisma.user.create({
    data: {
      name,
      lastName,
      email,
      phone,
      birthDate: new Date(birthDate),
      address,
      tenant: {
        create: {
          transactions: {
            create: transactions,
          },
          insurances: {
            create: insurances,
          },
          contracts: {
            create: contracts,
          },
        },
      },
    },
  });

  console.log("Tenant created:", tenant);
}

const tenant1 = async ({ contractId }) => {
  return await tenantSeed({
    name: "John",
    lastName: "Doe",
    email: "tenant@example.com",
    phone: "123-456-7890",
    birthDate: "1985-05-15",
    address: "123 Main Street, Apartment 4A",
    transactions: [
      { amount: 1500.0, description: "January Rent", date: "2023-01-01" },
      { amount: 1500.0, description: "February Rent", date: "2023-02-01" },
    ],
    insurances: [
      {
        insuranceType: "Home",
        insuranceCompany: "ABC Insurance",
        policyNumber: "POLICY12345",
        startDate: "2023-01-01",
        expirationDate: "2024-01-01",
        insuredAmount: 100000.0,
        premiumCost: 500.0,
        mainCoverage: "Fire, Theft, Natural Disasters",
      },
    ],
    contracts: { connect: { id: contractId } },
  });
};

module.exports = { tenant1 };
