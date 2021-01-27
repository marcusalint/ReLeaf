import React, { useEffect, useState } from 'react';
import BackToTop from './BackToTop';
import Products from './Products';
import SidePanel from './SidePanel';
import "./CampaignPage.scss";
import axios from 'axios';
import CampaignPageHead from './CampaignPageHead';
import CampaignPageBottom from './CampaignPageBottom';


export default function CampaignPage(props) {

  const [state, setState] = useState({
    goal: "0",
    products: [],
    profile: [],
    users: []
  });
  console.log(state.products.length, "What's the length?")
  const id = props.location.state.id; // {id: 3} creator_profile_id
  
  useEffect(() => {
    axios.get(`http://localhost:3000/api/creatorProfile/${id}`)
    .then((res) => {
      let profile = res.data.posts
      const temp = [...profile]
       setState((prev) => ({...prev, profile:temp}))
       console.log(profile, "PROFILE STATE SET");
    })
  },[]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/userProducts/${id}`)
    .then((data) => {
      let products = data.data.user_products
      // console.log(products)
     
      const temp = [...products]
      const goal = getGoal(temp);
       setState((prev) => ({...prev, products:temp, goal:goal}))
       console.log(products, "PRODUCTS STATE SET")
    })
  },[]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/users/${id}`)
    .then((data) => {
      let users = data.data.users
      
      const temp = [...users]
      setState((prev) => ({...prev, users:temp}))
      console.log(users, "USERS STATE SET")
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
<<<<<<< HEAD
      <section>
        <CampaignPageHead products={state} updateProduct={updateProduct} users={state.users} profile={state.profile} goal={state.goal} />
      </section>
      <section>
        <CampaignPageBottom products={state} updateProduct={updateProduct} users={state.users} profile={state.profile} goal={state.goal}/>
      </section>
=======
      <BackToTop showBelow={250}/>
      {state.profile.length > 0 && state.products.length > 0 && state.users.length >0 &&
        <div>
        <SidePanel  users={state.users} profile={state.profile} goal={state.goal}/>
        <Products className="products" products={state} updateProduct={updateProduct}/>
        </div>
      }
>>>>>>> ab8de872c3ebab2c996e97c0b4e3887239a073ea
    </div>
  )
}


      {/* <BackToTop showBelow={250}/> */}
      {/* <SidePanel  users={state.users} profile={state.profile} goal={state.goal}/> */}
      {/* <Products products={state} updateProduct={updateProduct}/> */}