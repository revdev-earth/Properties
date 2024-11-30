/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedTenant({
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
  return tenant;
}

async function seedSubTenant({
  name,
  lastName,
  email,
  phone,
  address,
  contracts,
}) {
  const subTenant = await prisma.user.create({
    data: {
      name,
      lastName,
      email,
      phone,
      address,
      subTenant: {
        create: {
          contracts: {
            create: contracts,
          },
        },
      },
    },
  });

  console.log("SubTenant created:", subTenant);
  return subTenant;
}

async function seedWorker({
  name,
  lastName,
  email,
  phone,
  address,
  specialty,
  certifications,
  availability,
  maintenances,
}) {
  const worker = await prisma.user.create({
    data: {
      name,
      lastName,
      email,
      phone,
      address,
      worker: {
        create: {
          specialty,
          certifications,
          availability,
          maintenances: {
            create: maintenances,
          },
        },
      },
    },
  });

  console.log("Worker created:", worker);
  return worker;
}

async function seedAdmin({
  name,
  lastName,
  email,
  phone,
  address,
  permissions,
  properties,
  contracts,
}) {
  const admin = await prisma.user.create({
    data: {
      name,
      lastName,
      email,
      phone,
      address,
      admin: {
        create: {
          permissions,
          properties: {
            create: properties,
          },
          contracts: {
            create: contracts,
          },
        },
      },
    },
  });

  console.log("Admin created:", admin);
  return admin;
}

module.exports = { seedTenant, seedSubTenant, seedWorker, seedAdmin };
