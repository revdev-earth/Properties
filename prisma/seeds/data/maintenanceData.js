const maintenance1Data = {
  category: "architecture",
  type: "corrective",
  description: "Repair of a crack in the main wall",
  maintenanceDate: new Date("2024-02-15"),
  costResponsible: "owner",
  repairCost: 150.0,
  status: "completed",
};

const maintenance2Data = {
  category: "equipment",
  type: "preventive",
  description: "Technical inspection of the air conditioner",
  maintenanceDate: new Date("2024-02-20"),
  costResponsible: "tenant",
  repairCost: 50.0,
  status: "pending",
};

module.exports = { maintenance1Data, maintenance2Data };
