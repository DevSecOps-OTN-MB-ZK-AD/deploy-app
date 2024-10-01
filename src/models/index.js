"use strict";

const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/db.js");
let sequelize;

if (process.env.DATABASE_URL) {
  const dbUrl = process.env.DATABASE_URL;
  const urlPattern = /^(postgres):\/\/(.*):(.*)@(.*):(\d+)\/(.*)$/; // Match PostgreSQL URL format
  const match = dbUrl.match(urlPattern);

  if (match) {
    const dialect = match[1];
    const username = match[2];
    const password = match[3];
    const host = match[4];
    const port = match[5];
    const database = match[6];

    sequelize = new Sequelize(database, username, password, {
      host: host,
      port: port,
      dialect: dialect,
    });
  } else {
    console.error("DATABASE_URL format is incorrect.");
    process.exit(1);
  }
} else {
  sequelize = new Sequelize("db", "db", "db", {
    host: "db",
    dialect: "postgres",
  });
}

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
