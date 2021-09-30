const express = require("express");
//const data = require("./data");
const database = require("./database");

router = express.Router();

router.get("/customers/by-username", (request, response) => {
  database.connection.query(
    `select * from customers where username = '${request.query.username}'`,
    (errors, records) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("An error occurred in the backend");
      } else {
        response.status(200).send(records);
      }
    }
  );
});

// router.post("/transaction/add", (request, response) => {
//  // let account = request.body;
//   //data.add_account(account);
//   //response.send("Added successfully!");
//   let transactions = request.body;
//   database.connection.query(
//     `insert into transactions (account_id, transaction_date, transaction_type, to_account, transaction_amt)
//     values ('${transactions.account_id}', NOW(), '${transactions.transaction_type}', '${transactions.to_account}', '${transactions.transaction_amt}')`,
//     (errors, records) => {
//       if (errors) {
//         console.log(errors);
//         response.status(500).send("Some error occurred at the backend");
//       } else {
//         response.status(200).send("Created new transaction!");
//       }
//     }
//   );
//  });

module.exports = { router };