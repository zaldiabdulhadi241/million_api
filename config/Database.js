require("dotenv").config();

const { Sequelize } = require("sequelize");

// Env
const { DIALECT, HOST } = process.env;

const db = new Sequelize("infinite_db", "root", "", {
  host: HOST,
  dialect: DIALECT,
});

module.exports = db;
