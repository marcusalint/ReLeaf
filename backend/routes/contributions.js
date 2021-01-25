const express = require('express');
const router  = express.Router();
module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log('we hitting the contributions table')
    db.query(`SELECT * FROM contributions`)
    .then(data => {
      const contributions = data.rows
      res.json({ contributions })
    })
    .catch(err => {
      res
        .status(500)
        .json({error: err.message})
    })
  })
  router.post("/", (req, res) => {
    console.log('post route successfully working')
  })
  return router;
};
