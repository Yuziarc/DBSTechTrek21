const express = require("express");
//const data = require("./data");
const database = require("./database");

router = express.Router();

router.get("/products/all", (request, response) => {
  database.connection.query(`select * from products`, (errors, records) => {
    if (errors) {
    console.log(errors);
    response.status(500).send("An error occurred in the backend");
    } else {
    response.status(200).send(records);
    }
  });
});

router.get("/product/by-cat", (request, response) => {
  database.connection.query(
    `select p.title, p.price, p.description, p.image, p.qty 
    from product as p 
    left join categories as c on p.category_id = c.id where p.category_id = '${request.query.category_id}'`,
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


// router.post("/product/purchase", (request, response) => {
//   database.connection.query(
//     `update products set qty = qty-1 where 
//     product `,
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