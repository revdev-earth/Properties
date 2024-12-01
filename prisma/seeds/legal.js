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
