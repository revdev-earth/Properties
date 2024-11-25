/* eslint-disable @typescript-eslint/no-require-imports */

const architectureData = require("./architectureData");
const economyData = require("./economyData");
const equipmentData = require("./equipmentData");
const maintenanceData = require("./maintenanceData");
const transactionData = require("./transactionData");

module.exports = {
  ...architectureData,
  ...economyData,
  ...equipmentData,
  ...maintenanceData,
  ...transactionData,
};
