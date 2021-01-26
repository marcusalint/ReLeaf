import React, { useEffect, useState } from 'react';
import BackToTop from './BackToTop';
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
      setProfile(res.data.posts)
    })
  },[]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/userProducts/${id}`)
    .then((data) => {
      setProducts(data.data.user_products)
    })
  },[]);
  
  return (
    <div className="layout">
      <BackToTop showBelow={250}/>
      <SidePanel profile={profile}/>
    
      <Products className="products" products={products}/>

    </div>
  )
}
