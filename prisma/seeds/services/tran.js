const electricityTransaction = {
  type: "expense",
  description: "Pago mensual de electricidad",
  category: "utilities",

  dueDate: new Date("2023-08-01"),
  paymentStatus: "paid",
  averageAmount: 100.0,

  paymentDate: new Date("2023-07-31"),
  amount: 98.5,
  paymentNotes: "Descuento aplicado por pago anticipado",
};

const internetTransaction = {
  type: "expense",
  description: "Pago mensual de internet",
  category: "utilities",

  dueDate: new Date("2023-08-01"),
  paymentStatus: "pending",
  averageAmount: 50.0,

  paymentDate: new Date("2023-07-30"),
  amount: 50.0,
  paymentNotes: "Pago realizado en su totalidad",
};

const waterTransaction = {
  type: "expense",
  description: "Pago mensual de agua",
  category: "utilities",

  dueDate: new Date("2023-08-05"),
  paymentStatus: "paid",
  averageAmount: 30.0,

  paymentDate: new Date("2023-08-03"),
  amount: 30.0,
  paymentNotes: "Pago realizado sin descuentos",
};

const gasTransaction = {
  type: "expense",
  description: "Pago mensual de gas",
  category: "utilities",

  dueDate: new Date("2023-08-10"),
  paymentStatus: "paid",
  averageAmount: 40.0,

  paymentDate: new Date("2023-08-09"),
  amount: 40.0,
  paymentNotes: "Incluye cargo por reconexión",
};

const cableTransaction = {
  type: "expense",
  description: "Pago mensual de cable",
  category: "entertainment",

  dueDate: new Date("2023-08-15"),
  paymentStatus: "paid",
  averageAmount: 25.0,

  paymentDate: new Date("2023-08-14"),
  amount: 25.0,
  paymentNotes: "Pago realizado vía transferencia bancaria",
};

module.exports = {
  electricityTransaction,
  internetTransaction,
  waterTransaction,
  gasTransaction,
  cableTransaction,
};
