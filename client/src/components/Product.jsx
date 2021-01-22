import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import { AddShoppingCart} from "@material-ui/icons";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import {toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
// import "./styles.css"

import useStyles from './styles'

toast.configure();

const Product = ({product}) => {
  const classes = useStyles();

  async function handleToken(token, addresses) {
    console.log(token, addresses)
   const response = await axios.post("http://localhost:3000/api/checkout", {
      token,
      product
    })
    const {status} = response.data
    console.log(response.data)
    if (status === 'success') {
      toast('Success! Check emails for details', 
      {type: 'success'})
      console.log('transaction was successful')
    } else {
      toast('Something went wrong', 
      {type: 'error'})
    }
  }

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
          {product.goal}
          {console.log(product.goal)}
          </Typography>
          {/* <Typography variant="h8" color="testSecondary"> 
          {product}
          </Typography> */}
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
      amount={product.goal*100}
      />
    </div>

    // <div>
    //   <h1>{Product.product_title}</h1>
    //   <h1>{Product.goal}</h1>
    //   <h1>{Product.description}</h1>
    //   <h1>{Product.amount_reached}</h1>
    //   <h1>{Product.user_id}</h1>
    //   <h1>{Product.accomplished}</h1>
    //   <h1>{Product.number_of_donations}</h1>
    // </div>
  )
}

export default Product
