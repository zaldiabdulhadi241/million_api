const { DataTypes } = require("sequelize");
const db = require("../config/Database");

const Siswa = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  { freezeTableName: true }
);

module.exports = Siswa;

(async () => db.sync())();
