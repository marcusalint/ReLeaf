import React, { useEffect, useState } from 'react';
import BackToTop from './BackToTop';
import Products from './Products';
import SidePanel from './SidePanel';
import "./CampaignPage.scss";
import axios from 'axios';


export default function CampaignPage(props) {

  const [state, setState] = useState({
    goal: "0",
    products: [],
    profile: [],
    users: []
  });

  const id = props.location.state.id; // {id: 3} creator_profile_id
  
  useEffect(() => {
    axios.get(`http://localhost:3000/api/creatorProfile/${id}`)
    .then((res) => {
      let profile = res.data.posts
      const temp = [...profile]
       setState((prev) => ({...prev, profile:temp}))
       console.log(state);
    })
  },[]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/userProducts/${id}`)
    .then((data) => {
      let products = data.data.user_products
      console.log(products)
     
      const temp = [...products]
      const goal = getGoal(temp);
       setState((prev) => ({...prev, products:temp, goal:goal}))
    })
  },[]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/users/${id}`)
    .then((data) => {
      let users = data.data.users
      console.log(users)
    
      const temp = [...users]
       setState((prev) => ({...prev, users:temp}))
    })
  },[]);

  const getGoal = function(products) {
    console.log(products);
    let totalGoal = 0;
    for (const product of products) {
      totalGoal += product.goal;
    }
    return totalGoal;
  }
  const updateProduct = (productObj) => {

    axios.post("http://localhost:3000/api/userProducts", {productObj} )
    .then(res => {
      console.log(res, "RESPONSE FROM POST TO USERPRODUCTS")
      const price_per_donation = productObj.goal/10;
      productObj.amount_reached = productObj.amount_reached + price_per_donation
      productObj.donations_needed = productObj.donations_needed - 1; 
      const id = productObj.id
      const newObj = state.products.filter(product => id === product.id);
      console.log(newObj, "NEWOBJECT")
      const i = state.products.findIndex(x => x.id === newObj[0].id)
      state.products[i] = productObj
      const temp = [...state.products]
      const newGoal = state.goal + price_per_donation;
      setState((prev)=>({...prev, products:temp, goal:newGoal}))
      // setState((prev) => ({...prev, amount_reached, donations_needed}) )
    })
  }

 

  return ( 
    <div className="layout">
      <BackToTop showBelow={250}/>
  
      <SidePanel  users={state.users} profile={state.profile} goal={state.goal}/>
      <Products className="products" products={state} updateProduct={updateProduct}/>
    </div>
  )
}
