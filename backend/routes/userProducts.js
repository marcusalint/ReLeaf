const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("Making the get request")
    db.query(`SELECT * FROM user_products`)
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
  router.get("/:id", (req, res) => {
    const id = req.params.id;
   
    db.query(`SELECT * FROM user_products WHERE user_id = ${id};`)
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

  // Update Amount Raised for Product on Payment Success
  router.post("/", (req, res) => {
    const goal = req.body.productObj.goal;
    const donations_needed = req.body.productObj.donations_needed;
    const price_of_donation = goal/donations_needed;
    const amount_reached = req.body.productObj.amount_reached;
    const id = req.body.productObj.id;
    const number_of_donations = req.body.productObj.number_of_donations;
    
    db.query(`UPDATE user_products SET amount_reached = ${amount_reached + price_of_donation}, number_of_donations = ${number_of_donations + 10} WHERE id = ${id}`)
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

