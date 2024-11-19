const maintenance1 = {
  type: "preventive", // Type of maintenance: preventive
  task: "Roof inspection and cleaning", // Task description
  frequency: "annual", // Frequency: annual
  maintenanceDate: new Date("2024-04-10"), // Maintenance date
  nextMaintenanceDate: new Date("2025-04-10"), // Next scheduled maintenance date
  damageDescription: null, // No damage description for preventive maintenance
  status: "completed", // Status: completed (no damage to fix, but the maintenance task was done)
  repairCost: null, // No repair cost for preventive maintenance
  costResponsible: "Owner", // Who is responsible for the cost
  warranty: null, // No warranty for preventive maintenance
  observations: "Cleaning of debris and checking for water leaks.", // Additional notes
  createdAt: new Date(), // Set the current date
  updatedAt: new Date(), // Set the current date
};

const maintenance2 = {
  type: "corrective", // Type of maintenance: corrective
  task: "Repair of water leak in the master bathroom", // Task description
  frequency: null, // No frequency for corrective maintenance
  maintenanceDate: new Date("2024-03-20"), // Maintenance date
  nextMaintenanceDate: null, // No next maintenance date for corrective maintenance
  damageDescription: "Water leak in the bathroom pipes", // Damage description
  status: "completed", // Status of the request (completed)
  repairCost: 120, // Repair cost
  costResponsible: "Tenant", // Who is responsible for the cost
  warranty: "6 months", // Warranty on the repair
  observations: "Checked all water connections in the bathroom.", // Additional notes
  createdAt: new Date(), // Set the current date
  updatedAt: new Date(), // Set the current date
};

const maintenance3 = {
  type: "request", // Type of maintenance: request
  task: "Painting of exterior walls", // Task description
  frequency: null, // No frequency for request maintenance
  maintenanceDate: new Date("2024-06-01"), // Maintenance date
  nextMaintenanceDate: null, // No next maintenance date for request maintenance
  damageDescription: "Exterior walls with paint worn out by sun and rain", // Damage description
  status: "in progress", // Status of the request
  repairCost: null, // No repair cost for request maintenance
  costResponsible: "Owner", // Who is responsible for the cost
  warranty: null, // No warranty for request maintenance
  observations:
    "Requesting a high-quality, weather-resistant paint to avoid future damage.", // Additional notes
  createdAt: new Date(), // Set the current date
  updatedAt: new Date(), // Set the current date
};

const maintenance4 = {
  type: "preventive", // Type of maintenance: preventive
  task: "Cleaning and checking of rain gutters", // Task description
  frequency: "quarterly", // Frequency: quarterly
  maintenanceDate: new Date("2024-07-15"), // Maintenance date
  nextMaintenanceDate: new Date("2024-10-15"), // Next scheduled maintenance date
  damageDescription: null, // No damage description for preventive maintenance
  status: "completed", // Status: maintenance completed (no damage to fix)
  repairCost: null, // No repair cost for preventive maintenance
  costResponsible: "Owner", // Who is responsible for the cost
  warranty: null, // No warranty for preventive maintenance
  observations:
    "Cleaning of gutters and checking for obstructions to prevent water leaks.", // Additional notes
  createdAt: new Date(), // Set the current date
  updatedAt: new Date(), // Set the current date
};

const maintenance5 = {
  type: "corrective", // Type of maintenance: corrective
  task: "Repair of water infiltration in the basement", // Task description
  frequency: null, // No frequency for corrective maintenance
  maintenanceDate: new Date("2024-05-05"), // Maintenance date
  nextMaintenanceDate: null, // No next maintenance date for corrective maintenance
  damageDescription: "Water infiltration due to cracks in the basement wall", // Damage description
  status: "pending", // Status of the request (pending)
  repairCost: 300, // Repair cost
  costResponsible: "Owner", // Who is responsible for the cost
  warranty: "1 year", // Warranty on the repair
  observations: "Repair cracks in the wall and apply waterproofing.", // Additional notes
  createdAt: new Date(), // Set the current date
  updatedAt: new Date(), // Set the current date
};

const maintenance6 = {
  type: "preventive", // Type of maintenance: preventive
  task: "Heating system check", // Task description
  frequency: "annual", // Frequency: annual
  maintenanceDate: new Date("2024-11-01"), // Maintenance date
  nextMaintenanceDate: new Date("2025-11-01"), // Next scheduled maintenance date
  damageDescription: null, // No damage description for preventive maintenance
  status: "completed", // Status: preventive maintenance completed (no damage to fix)
  repairCost: null, // No repair cost for preventive maintenance
  costResponsible: "Owner", // Who is responsible for the cost
  warranty: null, // No warranty for preventive maintenance
  observations:
    "Checking of filters, electrical connections, and heating ducts.", // Additional notes
  createdAt: new Date(), // Set the current date
  updatedAt: new Date(), // Set the current date
};

const maintenance7 = {
  type: "corrective", // Type of maintenance: corrective
  task: "Replacement of broken window", // Task description
  maintenanceDate: new Date("2024-08-10"), // Maintenance date
  nextMaintenanceDate: null, // No next maintenance date for corrective maintenance
  damageDescription: "Broken glass in the living room window", // Damage description
  status: "completed", // Status of the request (completed)
  repairCost: 150, // Repair cost
  costResponsible: "Tenant", // Who is responsible for the cost
  warranty: "3 months", // Warranty on the repair
  observations: "Replaced the glass and reinforced the window frame.", // Additional notes
  createdAt: new Date(), // Set the current date
  updatedAt: new Date(), // Set the current date
};

const maintenance8 = {
  type: "request", // Type of maintenance: request
  task: "Repair of leak in garden irrigation pipe", // Task description
  maintenanceDate: new Date("2024-09-05"), // Maintenance date
  nextMaintenanceDate: null, // No next maintenance date for request maintenance
  damageDescription: "Leak in the garden irrigation pipe", // Damage description
  status: "pending", // Status of the request (pending)
  repairCost: null, // No repair cost for request maintenance
  costResponsible: "Owner", // Who is responsible for the cost
  warranty: null, // No warranty for request maintenance
  observations: "Waiting for a repair quote to replace the damaged pipe.", // Additional notes
  createdAt: new Date(), // Set the current date
  updatedAt: new Date(), // Set the current date
};

module.exports = {
  maintenance1,
  maintenance2,
  maintenance3,
  maintenance4,
  maintenance5,
  maintenance6,
  maintenance7,
  maintenance8,
};
