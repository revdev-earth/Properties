request1 = {
  damageDescription: "Water leakage from the ceiling in the living room.",
  reportDate: new Date("2024-10-01"),
  reportedBy: "Tenant", // Puede ser "Tenant", "Owner", o "Admin"
  status: "Pending", // Otros posibles valores: "In Process", "Completed"
  resolutionDate: null, // Aún no resuelto
  observations: "The ceiling paint is peeling due to the water leakage.",
};

request2 = {
  damageDescription: "Broken window in the kitchen after a storm.",
  reportDate: new Date("2024-09-20"),
  reportedBy: "Owner", // "Owner" en este caso
  status: "In Process", // Otros posibles valores: "Pending", "Completed"
  resolutionDate: null, // Aún no resuelto
  observations:
    "The window frame needs to be replaced due to damage from the storm.",
};

module.exports = { request1, request2 };
