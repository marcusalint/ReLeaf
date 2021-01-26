<<<<<<< HEAD
import React,{useEffect,useState} from 'react';
import axios from 'axios';
=======
import React, { useEffect, useState } from 'react';
import BackToTop from './BackToTop';
>>>>>>> 885c3bbfdaca8e4a8afcfdb707e18fba9018e8ad
import Products from './Products';
import SidePanel from './SidePanel';
import "./CampaignPage.scss";
import axios from 'axios';


export default function CampaignPage(props) {
  const [products, setProducts] = useState([])
  const [profile, setProfile] = useState([])

  const id = props.location.state.id; // {id: 3} creator_profile_id
  
  useEffect(() => {
    axios.get(`http://localhost:3000/api/creatorProfile/${id}`)
    .then((res) => {
<<<<<<< HEAD
      console.log(res.data)
      console.log(res, "get request to creatorProfile")
=======
>>>>>>> 885c3bbfdaca8e4a8afcfdb707e18fba9018e8ad
      setProfile(res.data.posts)
    })
  },[]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/userProducts/${id}`)
    .then((data) => {
<<<<<<< HEAD
      console.log(data.data)
      setProducts(data.data.user_products)
    })
  },[]);
  console.log(products, "STATE OF PRODUCTS")
  console.log(profile, "STATE OF PROFILE")
=======
      setProducts(data.data.user_products)
    })
  },[]);
  
>>>>>>> 885c3bbfdaca8e4a8afcfdb707e18fba9018e8ad
  return (
    <div className="layout">
      <BackToTop showBelow={250}/>
      <SidePanel profile={profile}/>
    
      <Products className="products" products={products}/>

    </div>
  )
}
