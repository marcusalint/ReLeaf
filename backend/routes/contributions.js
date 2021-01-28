const express = require('express');
const router  = express.Router();
module.exports = (db) => {
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    console.log('we hitting the contributions table')
    db.query(`SELECT contributions.id, contributions.user_id, contributions.user_products_id FROM contributions JOIN user_products ON user_products_id = user_products.id WHERE creator_profile_id = ${id}`)
    .then(data => {
      const contributions = data.rows
      console.log(data.rows, "Contributions Route, data.rows")
      res.status(200).send(data.rows)
    })
    .catch(err => {
      res
        .status(500)
        .json({error: err.message})
    })
  })
  router.post("/", (req, res) => {
    const product_id =  req.body.product_id;
    const user_id = req.body.user_id;
    console.log(req.body, "CONTRIBUTIOINS TOKEN")

    const queryParams = [user_id, product_id ];
    const queryString = "insert into contributions(user_id, user_products_id) values($1,$2) RETURNING *";
    return db.query(queryString,queryParams)
    .then(data => {
     
      // console.log(data.rows, "PIZZA PIZZA")
      // const contribution_id = data.rows
      res.status(200).send(data.rows)
    })
  })
  return router;

};


