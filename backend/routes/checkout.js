const express = require('express');
const router  = express.Router();

const stripe = require('stripe')('sk_test_51IBuSOAj9EPpC5TEKkqfZUeS1mDvOf4BOXFtMZ5BLCIQaixHBgypeB2QDPogyVXKkpsWPUfntjBvUBJMRAEYYuXU00W0ulh1NR');
// const express = require('stripe');
const { v4: uuidV4 } = require('uuid');

// Checkout Endpoint Gives Back Payment Token on Payment Success
module.exports = (db) => {
  router.post("/", async (req, res) => {
    console.log("Request:", req.body);

    let error;
    let status;
    try {
      const { product, token } = req.body;
      // console.log(req.body, 'this is the req body')
      
      const customers = await stripe.customers.create({
        email: token.email,
        source: token.id
      });

      const idempotencyKey = uuidV4();
      
      const charge = await stripe.charges.create(
        {
          amount: product.goal * 100,
          currency: "usd",
          customer: customers.id,
          receipt_email: token.email,
          description: `Purchased the ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotencyKey
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
      console.log(error)
    }
    
    res.json({ error, status });
  });
  return router
};