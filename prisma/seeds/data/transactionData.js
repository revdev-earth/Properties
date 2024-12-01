const transactionMaintenanceCrackRepair = {
  type: "expense",
  description: "Payment for crack repair in the main wall",
  amount: 150.0,
  paymentDate: new Date("2024-02-16"),
  dueDate: new Date("2024-02-15"),
  category: "maintenance",
  paymentStatus: "paid",
  paymentNotes: "Payment made for structural repair in property #101.",
};

const transactionRentalMarch2024 = {
  type: "income",
  description: "Monthly rent payment from tenant John Doe",
  amount: 1000.0,
  paymentDate: new Date("2024-03-01"),
  dueDate: new Date("2024-03-01"),
  category: "rental",
  paymentStatus: "paid",
  paymentNotes: "Full payment received for March 2024.",
};

module.exports = {
  transactionMaintenanceCrackRepair,
  transactionRentalMarch2024,
};
