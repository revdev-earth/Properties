/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function legalSeed({ propertyId }) {
  const legal = await prisma.legal.create({
    data: {
      propertyId,
      titleDocuments: {
        create: [
          {
            deedNumber: "67890",
            notary: "Lic. María García",
            deedDate: new Date("2022-05-20"),
            publicRegistry: "Registry Code: 1234567890",
            documentLink: "https://example.com/documents/title-1.pdf",
            isCurrent: true,
          },
        ],
      },
      owners: {
        create: [
          {
            user: {
              create: {
                name: "Owner Name",
                lastName: "Owner Last Name",
                email: "owner@example.com",
                phone: "+123456789",
                birthDate: new Date("1980-05-20"),
                address: "Owner Address",
              },
            },
          },
        ],
      },
      usages: {
        create: [
          {
            zoning: "Residential",
            usageRestrictions: "No commercial activity allowed",
            permitsAndLicenses: "Construction Permit: 2021-XYZ",
            zoningHistory: "Changed from agricultural to residential in 1990",
            documentLink: "https://example.com/documents/usage-1.pdf",
          },
        ],
      },
      units: {
        create: [
          {
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
                  tenantResponsibilities:
                    "Maintain the property, pay utilities",
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
        ],
      },
      legalHistories: {
        create: [
          {
            ownershipChanges:
              "Transferred from Luis Martínez to Juan Pérez on 2015-07-01",
            mortgagesOrLiens: "None",
            legalDisputes: "None",
            auctionHistory: "None",
            documentLink: "https://example.com/documents/legal-history-1.pdf",
          },
        ],
      },
      fiscalDetails: {
        create: [
          {
            propertyTax: "Cadastral Account: 123456789, Status: Up-to-date",
            specialTaxesOrFees: "Waste Management Fee: Paid",
            debtFreeCertificates: "Issued: 2023-10-15",
            documentLink: "https://example.com/documents/fiscal-detail-1.pdf",
          },
        ],
      },
      policiesAndWarranties: {
        create: [
          {
            constructionWarranty: "10 years (expires 2031)",
            equipmentWarranties: "HVAC warranty valid until 2026",
            structuralSafetyCerts: "Seismic safety certificate issued in 2021",
            documentLink: "https://example.com/documents/warranty-1.pdf",
          },
        ],
      },
      regulationsAndNorms: {
        create: [
          {
            internalRegulations:
              "Condominium rules: Noise restrictions, parking limits",
            localNorms: "Height restriction: 3 floors",
            environmentalPermits: "None required",
            documentLink: "https://example.com/documents/regulation-1.pdf",
          },
        ],
      },
    },
  });

  console.log("Seed Legal completed successf:", legal);
}

module.exports = { legalSeed };
