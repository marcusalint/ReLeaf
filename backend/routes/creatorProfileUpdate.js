const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  // Updates The Total Amount of Money Raised 
router.post("/hello", (req, res) => {
  console.log(req.body, 'this is the response back after hitting creatorProfile111')
  console.log(Object.keys(req.body.productObj), 'these are the productObj keys')

  const productObj = req.body.productObj;

  // Destructuring Assignment For ProductObj 
  const {id, product_title, goal, amount_reached, description, category_id, user_id, created_at, image, accomplished, creator_profile_id, number_of_donations, donations_needed} = productObj;

  const price_of_donation = goal/donations_needed;
  console.log('line 14')

   db.query(`SELECT amount_raised FROM creator_profile WHERE user_id = ${user_id}`)
    .then(data => {
      const creator_profileData = data.rows;
      console.log(data.rows, 'data.rows on line 34 ')
      const amount_raised = creator_profileData.amount_raised
      console.log(amount_raised, 'this is amount raised')
      // res.json({ creator_profileData });
      // console.log(creatorProfile.amount_raised, 'this is the amount raised')
      res.status(200)
       db.query(`Update creator_profile SET amount_raised = ${amount_raised + price_of_donation} where user_id = ${user_id}`)
        .then(data => {
          console.log(data, 'data log on 41')

  })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

  });
  return router;
};

