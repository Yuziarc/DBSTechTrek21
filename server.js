const express = require("express");
const cors = require("cors");
const products = require("./products");
const customers = require("./customers");
const categories = require("./categories")

server = express();
server.use(express.json());
server.use(cors());

server.use(products.router);
server.use(customers.router);
server.use(categories.router);

server.listen(3001, (errors) => {
  if (errors) {
    console.log("Server couldn't start. Error: " + errors);
  } else {
    console.log("Server started on port 3001");
  }
});
