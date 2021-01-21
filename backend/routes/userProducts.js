const express = require('express');
const router  = express.Router();
module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM user_products WHERE user_id = 1;`)
    .then(data => {
        const user_products = data.rows;
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