import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product'

const Products = (props) => {
  const state = props.products.products
  
  return (
    <main>
    <Grid container justify="center" spacing={4}> 
        {state.map((product) => {
          return (
            <Grid item key={product.id}>
            <Product product={product} updateProduct={props.updateProduct}/>
          </Grid>
          )
        })}
    </Grid>
  </main>
  )
}

export default Products;