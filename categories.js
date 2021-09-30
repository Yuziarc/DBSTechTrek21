const express = require("express");
//const data = require("./data");
const database = require("./database");

router = express.Router();

router.get("/categories/all", (request, response) => {
  database.connection.query(`select * from categories`, (errors, records) => {
    if (errors) {
    console.log(errors);
    response.status(500).send("An error occurred in the backend");
    } else {
    response.status(200).send(records);
    }
  });
});

module.exports = { router };