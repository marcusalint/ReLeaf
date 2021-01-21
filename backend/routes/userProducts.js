const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("Making the get request")
    db.query(`SELECT * FROM user_products WHERE user_id = 1;`)
    .then(data => {
        console.log("We are in the Users Products query!")
        console.log(data, "this is the data that we are accessing") 
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