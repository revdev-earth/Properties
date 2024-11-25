const legal1 = {
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
};

const legal2 = {
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
};

module.exports = { legal1, legal2 };
