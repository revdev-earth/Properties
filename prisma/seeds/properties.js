// seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Creamos dos propiedades con su información respectiva

  // Primera propiedad
  const property1 = await prisma.property.create({
    data: {
      informationProperty: {
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
    },
  });

  // Segunda propiedad
  const property2 = await prisma.property.create({
    data: {
      informationProperty: {
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
    },
  });

  console.log("Created properties:", { property1, property2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
