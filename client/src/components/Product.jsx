import React, { useState, useEffect }from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import { AddShoppingCart} from "@material-ui/icons";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {toast} from 'react-toastify';
import ProgressBar from './progressbar/index.js';
import 'react-toastify/dist/ReactToastify.css';
import "./Product.scss";

import useStyles from './styles' 
toast.configure();


const Product = ({product, updateProduct}) => {
  // console.log(product.amount_reached, "AMOUNT REACHED IN PRODUCT.JSX")
  const classes = useStyles();

  const price_per_donation = (product.goal/10)
  async function handleToken(token, addresses) {
    console.log(token, addresses)
   // Process Payment 
   const response = await axios.post("http://localhost:3000/api/checkout", {
      token,
      product
    }, function() {
      console.log(token, 'I can access the token material here')
    })
    const {status, price} = response.data
  
    // Check To See If the Payment Went Through
    if (status === 'success') {
      toast('Success! Check emails for details',
      {type: 'success'})
      const a = JSON.parse(response.config.data)
      const productObj = a.product;
      // Posts to contributions table
      // axios.post("http://localhost:3000/api/contributions", {productObj})
      // .then(res => {
      //   console.log(res, 'posting to contributions')
      // }) 
      updateProduct(productObj)

      // Update creator_profile Table
      axios.post("http://localhost:3000/api/creatorProfile" , {productObj})
      .then(res => {
      })
    } else {
      toast('Something went wrong',
      {type: 'error'})
    }
  }
  const getPercentage = function(props) {
    const percent = (product.amount_reached/product.goal)*100;
    return percent;
  }

  // const getTotalRaised = function() {
  //   console.log()
  //   let newArr = 0
  //   const newProductArray= product1.map(element => element.amount_reached + newArr);
  //   return newProductArray
  // }

  // console.log(getTotalRaised(), 'hello this is the total raised from all products');


  // const totalRaised = getTotalRaised(product1)
  return (
    <div className="Product--Container">
      <div className="Card--Content">
      <div class="Card--Left">
        <h2 class="Product--Title">{product.product_title}</h2>
        <p>{product.description}</p>
        <p></p>
      </div>
      <div class="Card--Right">
      </div>
      </div>
      <StripeCheckout
      stripeKey="pk_test_51IBuSOAj9EPpC5TEcXDX4CGoDapFJkSGFryFE06LaZOWzsBf9BBjJU22dAAmcswiJLFrNNdU9aGw2od6hfqNrkD5004yMieTFP"
      token={handleToken}
      amount={price_per_donation*100}
      />
    </div>
  )
}
export default Product

        {/* <CardMedia className={classes.media} image='' title={product.product_title}/>
        <CardContent>
          <div className="product--text--container">
            <img src={product.image} alt="" className="product--image"/>
            <div className={classes.cardcontent} id="product--text">
              <Typography className="product--title">
                <strong>{product.product_title}</strong>
              </Typography>
              <Typography className="product--description">
                {product.description}
              </Typography>
            </div>
            
            <Typography>
              <span>{product.donations_needed} x <strong className="text--bold">${price_per_donation.toLocaleString()}</strong></span>
            </Typography>
          </div>

          <Typography>
            <div className="product--progress">
              <ProgressBar percentage={getPercentage()}/>
              <span className="fund--goal">
                <strong>${product.amount_reached.toLocaleString()} raised</strong> of ${product.goal.toLocaleString()} goal
              </span>
            </div>
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          {/* <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton> */}
        