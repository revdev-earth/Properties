const transaction1Data = {
  type: "expense",
  description: "Payment for crack repair",
  amount: 150.0,
  date: new Date("2024-02-16"),
  category: "maintenance",
};

const transaction2Data = {
  type: "income",
  description: "Monthly rent",
  amount: 1000.0,
  date: new Date("2024-03-01"),
  category: "income",
};

module.exports = { transaction1Data, transaction2Data };
