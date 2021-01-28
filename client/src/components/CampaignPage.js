import React, { useEffect, useState } from 'react';
import BackToTop from './BackToTop';
import Products from './Products';
import SidePanel from './SidePanel';
import "./CampaignPage.scss";
import axios from 'axios';
import CampaignPageHead from './CampaignPageHead';
import CampaignPageBottom from './CampaignPageBottom';
import MainProgressBar from './MainProgressBar';


export default function CampaignPage(props) {

  const [state, setState] = useState({
    amount_reached: "0",
    goal: "0",
    products: [],
    profile: [],
    users: [],
    contributions: []
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
      const amount_reached = getAmountReached(temp)
       setState((prev) => ({...prev, products:temp, goal:goal, amount_reached:amount_reached}))
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
  useEffect(() => {
    axios.get(`http://localhost:3000/api/contributions/${id}`)
    .then((data) => {
      let contributions = data.data
      console.log(contributions, "Contributions in Campaign Page")
      console.log(data, "Data returned from Contributions GET")
      
      const temp = [...contributions]
      setState((prev) => ({...prev, contributions:temp}))
    })
  },[]);
  console.log(state.contributions, 'state.contributions')

  const getGoal = function(products) {
    let totalGoal = 0;
    for (const product of products) {
      totalGoal += product.goal;
    }
    return totalGoal;
  }
  const getAmountReached = function(products) {
    let totalAmountReached = 0;
    for (const product of products) {
      totalAmountReached += product.amount_reached;
    }
    return totalAmountReached;
  }
  const getPercentage = function(props) {
    const percent = (state.amount_reached/state.goal)*100;
    return percent;
  }

  const updateProduct = (productObj) => {

    axios.post("http://localhost:3000/api/userProducts", {productObj} )
    .then(res => {
      const price_per_donation = productObj.goal/10;
      productObj.amount_reached = productObj.amount_reached + price_per_donation
      productObj.donations_needed = productObj.donations_needed - 1; 
      const id = productObj.id
      const newObj = state.products.filter(product => id === product.id);
      const i = state.products.findIndex(x => x.id === newObj[0].id)
      state.products[i] = productObj
      const temp = [...state.products]
      const newGoal = state.goal + price_per_donation;
      const newAmountReached = state.amount_reached + price_per_donation;
      setState((prev)=>({...prev, products:temp, goal:newGoal, amount_reached:newAmountReached}))
      // setState((prev) => ({...prev, amount_reached, donations_needed}) )
    })
  }

  const getRecentContributions = (obj) => {

    axios.post("http://localhost:3000/api/contributions", {obj})
    .then(data => {
      const newCon = data.data
      console.log(data.data, 'I LOVE CHEESE')
    }) 

  }
  

 

  return ( 
    <div className="layout">
      <BackToTop showBelow={250}/>
      {state.profile.length > 0 && state.products.length > 0 && state.users.length >0 &&
        <div>
        <CampaignPageHead  users={state.users} profile={state.profile} goal={state.goal}/>
        <CampaignPageBottom products={state} updateProduct={updateProduct} users={state.users} profile={state.profile} goal={state.goal} getRecentContributions={getRecentContributions}/>
        </div>
      }
      <MainProgressBar percentage={getPercentage(props)}/>
    </div>
  )
}


      {/* <BackToTop showBelow={250}/> */}
      {/* <SidePanel  users={state.users} profile={state.profile} goal={state.goal}/> */}
      {/* <Products products={state} updateProduct={updateProduct}/> */}