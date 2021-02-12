import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {toast} from 'react-toastify';
import ProgressBar from './progressbar/ProgressBar.js';
import styled, { keyframes } from 'styled-components';
import { getPercentageProducts } from '../helpers/helpers';






import 'react-toastify/dist/ReactToastify.css';
import "./Product.scss";



import useStyles from './styles' 
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
import { red } from '@material-ui/core/colors';

toast.configure();




const Product = ({product, updateProduct, users, getRecentContributions}) => {

  const price_per_donation = (product.goal/10)
  async function handleToken(token, addresses) {
    console.log(token, addresses)
   // Process Payment 
   const response = await axios.post("http://localhost:3000/api/checkout", {
      token,
      product
    }, function() {
      // console.log(token, 'I can access the token material here')

    })

    // console.log(token.created, 'this is time payment made')
    const {status, price} = response.data

    
  
    // Check To See If the Payment Went Through
    if (status === 'success') {
      toast('Success! Check emails for details',
      {type: 'success'})
      const a = JSON.parse(response.config.data)
      const productObj = a.product;
      const b = JSON.parse(response.config.data)
      // console.log(b, 'this is b')
      const recentpayment = b.token.created

      // Posts to contributions table
      const user_id = users[0].id
      const product_id = productObj.id
      // axios.post("http://localhost:3000/api/contributions", {product_id, user_id})
      // .then(res => {
      //   console.log(res, 'posting to contributions')
      // }) 
      getRecentContributions(b.token)
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

  // console.log(token)
  // const getRecentContributions = function(props) {
  //   contributorsArr = []

  // }

  

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
        <p>$ {price_per_donation}</p>
        <p></p>
      </div>
      <div class="Card--Right">
      </div>
      </div>
      <div className="product--progress">
              <ProgressBar percentage={getPercentageProducts(product)}/>
              <span className="fund--goal">
                <strong>${product.amount_reached.toLocaleString()} raised</strong> of ${product.goal.toLocaleString()} goal
              </span>
            </div>
      <StripeCheckout
      
      label='Donate'
      stripeKey="pk_test_51IBuSOAj9EPpC5TEcXDX4CGoDapFJkSGFryFE06LaZOWzsBf9BBjJU22dAAmcswiJLFrNNdU9aGw2od6hfqNrkD5004yMieTFP"
      token={handleToken}
      amount={price_per_donation*100}
      />
    </div>

  )
}
export default Product

  //  <CardMedia className={classes.media} image='' title={product.product_title}/>
  //       <CardContent>
  //         <div className="product--text--container">
  //           <img src={product.image} alt="" className="product--image"/>
  //           <div className={classes.cardcontent} id="product--text">
  //             <Typography className="product--title">
  //               <strong>{product.product_title}</strong>
  //             </Typography>
  //             <Typography className="product--description">
  //               {product.description}
  //             </Typography>
  //           </div>
            
  //           <Typography>
  //             <span>{product.donations_needed} x <strong className="text--bold">${price_per_donation.toLocaleString()}</strong></span>
  //           </Typography>
  //         </div>

  //         <Typography>
           
  //         </Typography>
  //       </CardContent>
  //       <CardActions disableSpacing className={classes.cardActions}>
  //         {/* <IconButton aria-label="Add to Cart">
  //           <AddShoppingCart />
  //         </IconButton> 