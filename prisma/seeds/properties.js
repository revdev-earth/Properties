// seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Creamos las propiedades con su información de PropertyInformation

  // Primera propiedad
  const property1 = await prisma.property.create({
    data: {
      propertyInformation: {
        create: {
          streetAndNumber: "123 Main St",
          neighborhood: "Downtown",
          cityAndState: "New York, NY",
          postalCode: "10001",
          gpsCoordinates: "40.712776, -74.005974",
          propertyType: "House",
          totalLandArea: 200.0,
          builtArea: 150.0,
          floors: 2,
          orientation: "North",
          age: 5,
          bedrooms: 3,
          bathrooms: 2,
          halfBathrooms: 1,
          kitchen: "Modern kitchen with island",
          livingAndDining: "Open-concept living and dining area",
          additionalRooms: "Office, Laundry room",
          yardOrGarden: "Backyard with lawn",
          parking: 2,
          parkingLocation: "Private garage",
          balconiesAndTerraces: "One balcony, one terrace",
          recreationalAreas: "Community pool and playground",
        },
      },
      propertyLegal: {
        create: {
          deedNumber: "D-123456789",
          notary: "Notary John Doe, Reg. #001, New York",
          deedDate: new Date("2015-08-15"),
          publicRegistry: "PR-0987654321",

          ownerName: "Alice Johnson",
          ownerID: "US123456789",
          ownerAddress: "456 Different St, New York, NY",
          ownerContact: "123-456-7890",

          zoning: "Residential",
          usageRestrictions: "No commercial activities allowed",
          permitsAndLicenses: "Construction permit #56789",
          zoningHistory: "Originally residential",

          leaseContract: null,
          contractDuration: null,
          tenantResponsibilities: null,
          ownerResponsibilities: "Maintenance of exterior structure",

          ownershipChanges: "Transferred from Smith Family in 2015",
          mortgagesOrLiens: "No current liens",
          legalDisputes: "No active disputes",
          auctionHistory: null,

          propertyTax: "CT-123456789",
          specialTaxesOrFees: null,
          debtFreeCertificates: "Certificate issued 2021",

          constructionWarranty: "Expires 2025",
          equipmentWarranties: "HVAC warranty until 2023",
          structuralSafetyCerts: "Seismic safety certified",

          internalRegulations: "Community HOA regulations apply",
          localNorms: "Compliance with NY state property laws",
          environmentalPermits: null,
        },
      },
    },
  });

  // Segunda propiedad
  const property2 = await prisma.property.create({
    data: {
      propertyInformation: {
        create: {
          streetAndNumber: "456 Elm St",
          neighborhood: "Uptown",
          cityAndState: "San Francisco, CA",
          postalCode: "94102",
          propertyType: "Apartment",
          builtArea: 85.0,
          floors: 1,
          orientation: "West",
          age: 10,
          bedrooms: 2,
          bathrooms: 1,
          kitchen: "Compact kitchen with modern appliances",
          livingAndDining: "Integrated living and dining area",
          additionalRooms: "Storage room",
          yardOrGarden: "Small balcony",
          parking: 1,
          parkingLocation: "Underground parking",
          balconiesAndTerraces: "One balcony",
          recreationalAreas: "Gym and rooftop terrace",
        },
      },
      propertyLegal: {
        create: {
          deedNumber: "D-987654321",
          notary: "Notary Jane Smith, Reg. #002, San Francisco",
          deedDate: new Date("2010-06-01"),
          publicRegistry: "PR-1234567890",

          ownerName: "Bob Martinez",
          ownerID: "CA987654321",
          ownerAddress: null,
          ownerContact: "987-654-3210",

          zoning: "Residential",
          usageRestrictions: "No alterations to historical facade",
          permitsAndLicenses: "Occupancy permit #12345",
          zoningHistory: "Originally commercial, converted in 2005",

          leaseContract: "Lease agreement active with tenant",
          contractDuration: "2 years, starting from 2022",
          tenantResponsibilities: "Interior maintenance",
          ownerResponsibilities: "Structural maintenance and repairs",

          ownershipChanges: "Inherited from Martinez Family in 2005",
          mortgagesOrLiens: "Mortgage active, details confidential",
          legalDisputes: "No active legal disputes",
          auctionHistory: null,

          propertyTax: "CT-987654321",
          specialTaxesOrFees: "Historical building fee",
          debtFreeCertificates: "Certificate issued 2022",

          constructionWarranty: null,
          equipmentWarranties: "Elevator warranty until 2024",
          structuralSafetyCerts: "Seismic retrofit certified",

          internalRegulations: "Condominium regulations apply",
          localNorms: "Compliance with SF historic property laws",
          environmentalPermits: "Required due to proximity to protected park",
        },
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
