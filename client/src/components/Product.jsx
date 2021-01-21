import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import { AddShoppingCart} from "@material-ui/icons";
import StripeCheckout from 'react-stripe-checkout';

import useStyles from './styles'

const Product = ({product}) => {
  const classes = useStyles();

  function handleToken(token, addresses) {
    console.log(token, addresses)
  }

  return (
    <div className="container">
      <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.product_title}/>
        <CardContent>
          <div className={classes.cardcontent}>
            <Typography variant="h8" gutterBottom>
              {Product.product_title}
            </Typography>
            <Typography variant="h8">
              {Product.product_title}
            </Typography>
          </div>
          <Typography variant="h8" color="testSecondary"> 
          {product.description}
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
      stripekey="pk_test_51IBuSOAj9EPpC5TEcXDX4CGoDapFJkSGFryFE06LaZOWzsBf9BBjJU22dAAmcswiJLFrNNdU9aGw2od6hfqNrkD5004yMieTFP"
      token={handleToken}
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
