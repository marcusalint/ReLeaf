import React, { useState }from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import { AddShoppingCart} from "@material-ui/icons";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {toast} from 'react-toastify';
import ProgressBar from './progressbar/index.js';
import 'react-toastify/dist/ReactToastify.css';
// import "./Product.scss";
// import "./styles.css"
import useStyles from './styles' 
toast.configure();


const Product = ({product}) => {
  const [product1, setProduct] = useState(
    {
      amount_reached: product.amount_reached,
      donations_needed: product.donations_needed
    }
  )
  console.log(product1)
  let price_per_donation = (product.goal/10)
  console.log(price_per_donation)
  const classes = useStyles();
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
    console.log(response.data, 'this is the response data')
    console.log(price, 'this is the price')
    // Check To See If the Payment Went Through
    if (status === 'success') {
      toast('Success! Check emails for details',
      {type: 'success'})
    // console.log(response)
      let a = JSON.parse(response.config.data)
      let productObj = a.product;

      axios.post("http://localhost:3000/api/userProducts", { productObj })
      .then(res => {
        const amount_reached = product1.amount_reached + price_per_donation;
        const donations_needed = product1.donations_needed - 1; 
        console.log(res.config.data, "This is the UPDATED value to set state")
        setProduct((prev) => ({...prev, amount_reached, donations_needed}) )
      })
      // Update creator_profile Table
      axios.post("http://localhost:3000/api/creatorProfile" , {productObj})
      .then(res => {
        console.log(productObj, 'yeah man we are getting the right response line 47')
      })
    } else {
      toast('Something went wrong',
      {type: 'error'})
    }
  }

  const getPercentage = function(props) {
    const percent = (product1.amount_reached/product.goal)*100;
    return percent;
  }

  // const getTotalRaised = function() {
  //   console.log()
  //   const newProductArray= product1.map(element => element.amount_reached);
  // }


  // const totalRaised = getTotalRaised(product1)
  return (
    <div className="container">
      <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.product_title}/>
        <CardContent>
          <div className={classes.cardcontent}>
            <Typography>
              {product.product_title}
            </Typography>
            <Typography >
              {product.product_title}
            </Typography>
          </div>
          <Typography >
          </Typography>
          <Typography>
          {price_per_donation}
          {console.log(price_per_donation)}
          </Typography>
          {/* <Typography variant="h8" color="testSecondary">
          {product}
          </Typography> */}
          <ProgressBar percentage={getPercentage()}/>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
      <StripeCheckout
      stripeKey="pk_test_51IBuSOAj9EPpC5TEcXDX4CGoDapFJkSGFryFE06LaZOWzsBf9BBjJU22dAAmcswiJLFrNNdU9aGw2od6hfqNrkD5004yMieTFP"
      token={handleToken}
      amount={price_per_donation*100}
      />
      <h1>THIS IS A TEST OF WHETHER THIS WILL RENDER ON THE SCREEN{product1.amount_reached}</h1>
      <h1>{product1.donations_needed}</h1>
    </div>
  )
}
export default Product