const express = require('express');
const router  = express.Router();
module.exports = (db) => {
  router.get("/", (req, res) => {
   
    db.query(`SELECT * FROM categories;`)
    .then(data => {
        const categories = data.rows;
        res.json({ categories });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.post("/",(req, res) => {
    const value = req.body.state;
    

    return db.query(`insert into categories(name) values('${value}')`)
    .then(data => {
      res.status(200).json({result: true})
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

  })
  return router;
};