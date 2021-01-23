const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("GET DEM POSTS")
    db.query(`SELECT * FROM creator_profile;`)
    .then(data => {
        const posts = data.rows;
        res.json({ posts });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.post("/", (req, res) => {
    const goal = req.body.productObj.goal;
    const donations_needed = req.body.productObj.donations_needed;
    const price_of_donation = goal/donations_needed;
    const amount_reached = req.body.productObj.amount_reached;
    const id = req.body.productObj.id;
    db.query(`UPDATE creator_profile SET amount_reached = ${amount_reached + price_of_donation}, number_of_donations = ${number_of_donations + 10} WHERE id = ${id};`)
    .then(data => {
        const posts = data.rows;
        res.json({ posts });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.post("/",(req, res) => {
    const value = req.body.title;
     //console.log(value);
    const queryParams = [req.body.state.title,req.body.state.description, req.body.state.image, req.body.state.total_goal,1];
    const queryString = "insert into creator_profile(title,description,image,total_goal,user_id) values($1,$2,$3,$4,$5)";
    return db.query(queryString,queryParams)
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


