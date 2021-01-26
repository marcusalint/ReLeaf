
import {React, useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product'
import axios from 'axios';

// const products = [
//   { id: 1, name: 'Shoes', description: 'Running shoes', price:"$5"},
//   { id: 2, name: 'Macbook', description: 'Apple macbook', price:"$10"},
//   { id: 3, name: 'Clothes', description: 'Help ', price:"$10"}
// ];





const Products = () => {
  const [products, setProducts] = useState([])
  

  useEffect(() => {
  axios.get('http://localhost:3000/api/userProducts/1')
  .then((data) => {
    setProducts(data.data.user_products)
  })
  },[]);

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
        {products.map((product) => {
        
          

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