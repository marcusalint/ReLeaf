import React, { useState }from 'react';
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
  const [product1, setProduct] = useState(
    {
      amount_reached: product.amount_reached
    }
  )
  console.log(product1)
  let price_per_donation = (product.goal/product.donations_needed)
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


      // Posts to contributions table
      // axios.post("http://localhost:3000/api/contributions", {productObj})
      // .then(res => {
      //   console.log(res, 'posting to contributions')
      // }) 

      // Update user_products Table After Payment Success
      axios.post("http://localhost:3000/api/userProducts", { productObj })
      .then(res => {
        const amount = product1.amount_reached;
        product1.amount_reached = amount + price_per_donation;
        console.log(res.config.data, "This is the UPDATED value to set state")
        setProduct((prev) => ({...prev, amount_reached: product1.amount_reached}) )
        console.log()
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
  console.log(product1, "PRODUCT1 STATE")
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
    </div>
  )
}
export default Product




// import React, { useState }from 'react';
// import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
// import { AddShoppingCart} from "@material-ui/icons";
// import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios'
// import {toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// // import "./styles.css"
// import useStyles from './styles'
// toast.configure();

// const Product = ({product}) => {
//   const [product1, setProduct] = useState(
//     {
//       amount_reached: product.amount_reached
//     }
//   )
  
//   let price_per_donation = (product.goal/product.donations_needed)
  
//   const classes = useStyles();
//   async function handleToken(token, addresses) {
    
//     // Payment Processing Gateway
//    const response = await axios.post("http://localhost:3000/api/checkout", {
//       token,
//       product
//     }, function() {
//       console.log(token, 'I can access the token material here')
//     })
//     const {status, price} = response.data

//     if (status === 'success') {
//       toast('Success! Check emails for details', 
//       {type: 'success'})
//       console.log('transaction was successful')
      
//       let a = JSON.parse(response.config.data)
//       let productObj = a.product;
      
    
      
//       console.log(Object.keys(productObj), 'these are the product keys')

//       axios.post("http://localhost:3000/api/creatorProfile" , {productObj})
//       .then(res => {
//         console.log(productObj, 'yeah man we are getting the right response line 47')
//       })
//       axios.post("http://localhost:3000/api/userProducts", { productObj })
//       .then(res => {
//         const amount = product1.amount_reached;
//         product1.amount_reached = amount + price_per_donation;
//         console.log(res.config.data, "This is the UPDATED value to set state")
//         setProduct((prev) => ({...prev, amount_reached: product1.amount_reached}) )
//         console.log()
//       })
//       .then(res => {
//         console.log(res, 'hello i can hit my then statement here')
//       })

//     } else {
//       toast('Something went wrong', 
//       {type: 'error'})
//     }


    
//   }
//   return (
//     <div className="container">
//       <Card className={classes.root}>
//         <CardMedia className={classes.media} image='' title={product.product_title}/>
//         <CardContent>
//           <div className={classes.cardcontent}>
//             <Typography>
//               {product.product_title}
//             </Typography>
//             <Typography >
//               {product.description}
//             </Typography>
//           </div>
//           <Typography> 
//             {price_per_donation}
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing className={classes.cardActions}>
//           <IconButton aria-label="Add to Cart">
//             <AddShoppingCart />
//           </IconButton>
//         </CardActions>
//       </Card>
//       <StripeCheckout 
//         stripeKey="pk_test_51IBuSOAj9EPpC5TEcXDX4CGoDapFJkSGFryFE06LaZOWzsBf9BBjJU22dAAmcswiJLFrNNdU9aGw2od6hfqNrkD5004yMieTFP"
//         token={handleToken}
//         amount={price_per_donation*100}
//       />
//     </div>
//   )
// }
// export default Product













