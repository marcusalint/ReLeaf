import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product'
//Pass in props 
const Products = (props) => {

  return (
    <main>
    <Grid container justify="center" spacing={4}> 
        {props.products.map((product) => {
          return (
            <Grid item key={product.id}>
            <Product product={product}/>
          </Grid>
          )
        })}
    </Grid>
  </main>
  )
}

export default Products;