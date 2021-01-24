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

