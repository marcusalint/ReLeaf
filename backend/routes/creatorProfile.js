const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
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
  router.get("/:id", (req, res) => {
    console.log("CREATOR PROFILE ROUTE")
    const id = req.params.id;
    console.log(id,"This is the id");
    db.query(`SELECT * FROM creator_profile WHERE user_id = ${id};`)
    .then(data => {
      console.log(data.data);
        const posts = data.rows;
        res.json({ posts });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  // Updates The Total Amount of Money Raised 
  router.post("/", (req, res) => {
    console.log(req.body, 'this is the response back after hitting creatorProfile111')
    console.log(Object.keys(req.body.productObj), 'these are the productObj keys')

    const productObj = req.body.productObj;

    // Destructuring Assignment For ProductObj 
    const {id, product_title, goal, amount_reached, description, category_id, user_id, created_at, image, accomplished, creator_profile_id, number_of_donations, donations_needed} = productObj;

    const price_of_donation = goal/10;

     db.query(`SELECT amount_raised FROM creator_profile WHERE user_id = ${user_id}`)
      .then(data => {

        amount_raised = data.rows[0].amount_raised

        
        console.log(data.rows, 'data.rows on line 34 ')
        console.log(amount_raised, 'this is amount raised')
        // res.json({ creator_profileData });
        // console.log(creatorProfile.amount_raised, 'this is the amount raised')
         db.query(`Update creator_profile SET amount_raised = ${amount_raised + price_of_donation} where user_id = ${user_id}`)
          .then(data => {
            console.log(data, 'data log on')

      // res.json({ creator_profileData }, 'helo');
    })
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


