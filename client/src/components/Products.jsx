import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product'
//Pass in props 
const Products = (props) => {

  // Get the total funds need fo
  const getGoal = function(products) {
    let totalGoal = 0;
    for (const product of products) {
      totalGoal += product.goal;
    }
    return totalGoal
  }


  const totalFundsNeeded = getGoal(products)


  

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