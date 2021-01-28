import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product'
import { fadeIn } from 'react-animations'


const Products = (props) => {
  const state = props.products.products
  const users = props.users
  console.log(props.getRecentContributions, "PRODUCTS")
  return (
    <main>
    <Grid container spacing={4}> 
        {state.map((product) => {
          return (
            <Grid item key={product.id}>
            <Product product={product} updateProduct={props.updateProduct} users={users} getRecentContributions={props.getRecentContributions}/>
          </Grid>
          )
        })}
    </Grid>
  </main>
  )
}

export default Products;