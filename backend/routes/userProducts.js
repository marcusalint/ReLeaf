const express = require('express');
const router  = express.Router();
module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("Making the get request")
    db.query(`SELECT * FROM user_products`)
    .then(data => {
       
        const user_products = data.rows;
        console.log(data.rows, 'this is the data from data.rows')
        res.json({ user_products });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    console.log(id, 'This is the req params console log')
    db.query(`SELECT * FROM user_products WHERE user_id = ${id};`)
    .then(data => {
       
        const user_products = data.rows;
        console.log(data.rows, 'this is the data from data.rows')
        res.json({ user_products });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}; 