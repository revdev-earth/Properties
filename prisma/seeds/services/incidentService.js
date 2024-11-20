incidentService1 = {
  incidentDate: new Date("2024-11-01T08:00:00Z"),
  incidentDescription: "Power outage in area 1.",
  actionsTaken: "Restarted the system, checked the main circuit.",
  compensation: 50.0,
  compensationNotes: "Compensation for the inconvenience.",
  createdAt: new Date(),
  updatedAt: new Date(),
};
incidentService2 = {
  incidentDate: new Date("2024-11-02T09:00:00Z"),
  incidentDescription: "Service disruption due to maintenance.",
  actionsTaken: "Completed system maintenance.",
  compensation: 0.0,
  compensationNotes: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};
incidentService3 = {
  incidentDate: new Date("2024-11-03T10:30:00Z"),
  incidentDescription: "Network failure during peak hours.",
  actionsTaken: "Restarted network equipment and re-routed traffic.",
  compensation: 100.0,
  compensationNotes: "Full compensation offered for downtime.",
  createdAt: new Date(),
  updatedAt: new Date(),
};
// Nuevos 7 registros de incidentes
incidentService4 = {
  incidentDate: new Date("2024-11-04T12:00:00Z"),
  incidentDescription: "Delayed response due to high traffic.",
  actionsTaken: "Prioritized requests based on severity.",
  compensation: 0.0,
  compensationNotes: "No compensation given.",
  createdAt: new Date(),
  updatedAt: new Date(),
};
incidentService5 = {
  incidentDate: new Date("2024-11-05T14:15:00Z"),
  incidentDescription: "System bug causing incorrect data display.",
  actionsTaken: "Bug fixed by software team.",
  compensation: 20.0,
  compensationNotes: "Partial compensation for the error.",
  createdAt: new Date(),
  updatedAt: new Date(),
};
incidentService6 = {
  incidentDate: new Date("2024-11-06T16:00:00Z"),
  incidentDescription: "Emergency maintenance on servers.",
  actionsTaken: "Performed unscheduled maintenance to prevent system failure.",
  compensation: 0.0,
  compensationNotes: "No compensation for emergency downtime.",
  createdAt: new Date(),
  updatedAt: new Date(),
};
incidentService7 = {
  incidentDate: new Date("2024-11-07T17:45:00Z"),
  incidentDescription: "Unexpected outage due to hardware failure.",
  actionsTaken: "Replaced the faulty hardware.",
  compensation: 75.0,
  compensationNotes: "Compensation for extended downtime.",
  createdAt: new Date(),
  updatedAt: new Date(),
};
incidentService8 = {
  incidentDate: new Date("2024-11-08T18:30:00Z"),
  incidentDescription: "Intermittent connectivity issues in certain regions.",
  actionsTaken: "Investigated and resolved regional network issues.",
  compensation: 40.0,
  compensationNotes: "Partial compensation offered for connectivity problems.",
  createdAt: new Date(),
  updatedAt: new Date(),
};
incidentService9 = {
  incidentDate: new Date("2024-11-09T19:00:00Z"),
  incidentDescription: "Data corruption during backup procedure.",
  actionsTaken: "Restored data from backup and ran consistency checks.",
  compensation: 0.0,
  compensationNotes: "No compensation offered, issue resolved promptly.",
  createdAt: new Date(),
  updatedAt: new Date(),
};
incidentService10 = {
  incidentDate: new Date("2024-11-10T09:00:00Z"),
  incidentDescription: "Increased latency during peak usage hours.",
  actionsTaken: "Optimized traffic routing to reduce latency.",
  compensation: 0.0,
  compensationNotes: "No compensation as it was a known peak issue.",
  createdAt: new Date(),
  updatedAt: new Date(),
};

module.exports = {
  incidentService1,
  incidentService2,
  incidentService3,
  incidentService4,
  incidentService5,
  incidentService6,
  incidentService7,
  incidentService8,
  incidentService9,
  incidentService10,
};
