import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Products from './Products';
import SidePanel from './SidePanel';
import "./CampaignPage.scss";



export default function CampaignPage(props) {
  const [products, setProducts] = useState([])
  const [profile, setProfile] = useState([])

  const id = props.location.state.id; // {id: 3} creator_profile_id
  
  useEffect(() => {
    axios.get(`http://localhost:3000/api/creatorProfile/${id}`)
    .then((res) => {
      console.log(res.data)
      console.log(res, "get request to creatorProfile")
      setProfile(res.data.posts)
    })
  },[]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/userProducts/${id}`)
    .then((data) => {
      console.log(data.data)
      setProducts(data.data.user_products)
    })
  },[]);
  console.log(products, "STATE OF PRODUCTS")
  console.log(profile, "STATE OF PROFILE")
  return (
    <div className="layout">
      <SidePanel />
     
      <Products />
     
    </div>
  )
}
