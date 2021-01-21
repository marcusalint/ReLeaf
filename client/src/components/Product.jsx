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
            <Typography>
              {Product.product_title}
            </Typography>
            <Typography>
              {Product.product_title}
            </Typography>
          </div>
          <Typography> 
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
      stripeKey="pk_test_51I6hkfKOSKL0JejWWdM5Q7z0rI12q1tnP06rUIjlLFIAqciOHrwaDAwIxkHSgVrhRld9fUXrm8Hf3Fxbd3qJ4Syq002ujDH8Il"
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
