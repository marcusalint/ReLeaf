import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import { AddShoppingCart} from "@material-ui/icons";





import useStyles from './styles'

const Product = ({product}) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.product_title}/>
        <CardContent>
          <div className={classes.cardcontent}>
            <Typography variant="h5" gutterBottom>
              {Product.product_title}
            </Typography>
            <Typography variant="h5">
              {Product.product_title}
            </Typography>
          </div>
          <Typography variant="h2" color="testSecondary"> 
          {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add tp Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>

      </Card>
    </div>
  )
}

export default Product
