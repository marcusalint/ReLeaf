import React from 'react'
import './HeadSectionOne.scss'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';


const HeadSectionOne = ({products, updateProduct, users, profile, goal, state}) => {
  console.log(profile[0], 'tnew daidos')
  console.log(users[0], 'this is users console log')
  


  return (
    <div className="Section--One">
      <img src="https://images.unsplash.com/photo-1567742940521-26d7040e1fd6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80" className="Head--Image"></img>

      {/* <img src={users[0].image} className="Head--Image"></img> THIS WORKS BUT MUST ADD PRODUCTS TO CREATOR_PROFILES 4, 5, AND 6 FOR THEM TO RENDER*/}
  <h5 className="User--Location">{users[0].location}</h5>
    <div className="Icons">
  <button className="Share--Button">Share</button>
       <InstagramIcon/>
       <TwitterIcon />
       <FacebookIcon />
   </div>


    
  


      
    </div>
  )
}

export default HeadSectionOne
