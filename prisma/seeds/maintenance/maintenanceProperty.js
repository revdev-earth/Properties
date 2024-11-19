maintenanceProperty1 = {
  propertyId: "property1", // Foreign key to the Property model
  annualBudget: 1000, // Annual budget for maintenance
  accumulatedCosts: 250, // Total maintenance costs accumulated so far
  costDistribution: "Owner: 70%, Tenant: 30%", // Breakdown of costs
};
maintenanceProperty2 = {
  propertyId: "property2",
  annualBudget: 1500,
  accumulatedCosts: 600,
  costDistribution: "Owner: 50%, Tenant: 50%",
};

module.exports = { maintenanceProperty1, maintenanceProperty2 };
