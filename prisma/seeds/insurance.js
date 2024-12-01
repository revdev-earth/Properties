const insuranceHomeowners = {
  type: "Homeowners Insurance",
  company: "Global Insurance Corp",
  policyNumber: "POL123456789",
  insuredAmount: 300000.0,
  premiumCost: 1500.0,
  startDate: new Date("2024-01-01"),
  expirationDate: new Date("2025-01-01"),

  // Coverage and exclusions
  mainCoverage: "Fire, Theft, and Natural Disasters",
  thirdPartyCoverage: "Liability up to $100,000",
  equipmentCoverage: "Up to $10,000 for household appliances",
  coverageExclusions: "Earthquakes and Floods",
  applicableDeductibles: "$500 per incident",

  // Emergency contact information
  emergencyContact: "+1234567890",
  insuranceAgentName: "John Doe",
  insuranceAgentContact: "+0987654321",
  claimProcedures: "Contact agent within 24 hours of incident",

  // Renewal and special conditions
  renewalConditions:
    "Automatic renewal unless canceled 30 days before expiration",
  coverageReviews: "Annual review recommended",
  specialClauses: "Must have a security system installed",
};

const insuranceCommercialProperty = {
  type: "Commercial Property Insurance",
  company: "SecureLife Insurance",
  policyNumber: "COM987654321",
  insuredAmount: 500000.0,
  premiumCost: 2500.0,
  startDate: new Date("2024-06-15"),
  expirationDate: new Date("2025-06-15"),

  // Coverage and exclusions
  mainCoverage: "Fire, Theft, Vandalism",
  thirdPartyCoverage: "Liability up to $200,000",
  equipmentCoverage: "Up to $20,000 for industrial equipment",
  coverageExclusions: "Damage due to tenant negligence",
  applicableDeductibles: "$1000 per incident",

  // Emergency contact information
  emergencyContact: "+1234567899",
  insuranceAgentName: "Jane Smith",
  insuranceAgentContact: "+0987654322",
  claimProcedures: "Submit claim through online portal within 48 hours",

  // Renewal and special conditions
  renewalConditions: "Renewal requires updated inspection report",
  coverageReviews: "Semi-annual review recommended",
  specialClauses: "Property must be inspected annually for eligibility",
};

const insuranceHomeBasic = {
  type: "Home Insurance",
  company: "Company A",
  policyNumber: "POL123456",
  insuredAmount: 100000,
  premiumCost: 500,
  startDate: new Date("2024-01-01"),
  expirationDate: new Date("2025-01-01"),

  // Coverage and exclusions
  mainCoverage: "Fire, Theft",
  thirdPartyCoverage: "Yes",
  equipmentCoverage: "Appliances, HVAC",
  coverageExclusions: "Natural disasters",
  applicableDeductibles: "$1000",

  // Emergency contact information
  emergencyContact: "123-456-7890",
  insuranceAgentName: "Agent A",
  insuranceAgentContact: "agentA@insurance.com",
  claimProcedures: "Call emergency number",

  // Renewal and special conditions
  renewalConditions: "Automatic renewal",
  coverageReviews: "Annual",
  specialClauses: "Excludes flood damage",
};

const insuranceFlood = {
  type: "Flood Insurance",
  company: "Company B",
  policyNumber: "POL654321",
  insuredAmount: 50000,
  premiumCost: 300,
  startDate: new Date("2024-06-01"),
  expirationDate: new Date("2025-06-01"),

  // Coverage and exclusions
  mainCoverage: "Flood",
  coverageExclusions: "Non-flood events",
  applicableDeductibles: null,

  // Emergency contact information
  emergencyContact: null,
  insuranceAgentName: null,
  insuranceAgentContact: null,
  claimProcedures: null,

  // Renewal and special conditions
  renewalConditions: null,
  coverageReviews: null,
  specialClauses: null,
};

module.exports = {
  insuranceHomeowners,
  insuranceCommercialProperty,
  insuranceHomeBasic,
  insuranceFlood,
};
