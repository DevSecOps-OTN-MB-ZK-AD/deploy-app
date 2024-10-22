"use strict";

const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/db.js");
let sequelize;

sequelize = new Sequelize(process.env.AZURE_POSTGRESQL_DATABASE, 
  process.env.AZURE_POSTGRESQL_USER, 
  process.env.AZURE_POSTGRESQL_PASSWORD, 
  {
    host: process.env.AZURE_POSTGRESQL_HOST,
    port: process.env.AZURE_POSTGRESQL_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, 
      },
    },
  });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

sequelize
  .sync( /*{ force: true }*/ ) // Force To re-initialize tables on each run
  .then(() => {
    console.log("It worked!");
  })
  .catch(err => {
    console.error("An error occurred while creating the table:", err);
  });
const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf(".") !== 0 && file !== "index.js")
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes); // Pass sequelize instance and DataTypes
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
