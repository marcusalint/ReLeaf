import React from 'react'
import './HeadSectionTwo.scss'
import MainProgressBar from './MainProgressBar';


import {InstagramIcon, TwitterIcon, FacebookIcon} from '@material-ui/icons/Instagram';

const HeadSectionTwo = ({products, updateProduct, users, profile, goal, state}) => {
  const getPercentage = function(props) {
    const percent = (state.amount_reached/goal)*100;
    return percent;
  }
  console.log(Object.keys(profile), 'this is the profiel')


  return (
    <div className="Section--Two">
      <h1 className="Title">{profile[0].title}</h1>
      <p className="Description">{profile[0].description}</p>
      <MainProgressBar percentage={getPercentage()}/>
      
      <h2 className></h2>
      <h2></h2>
         
      
      
      

  
    </div>
  )
}

export default HeadSectionTwo
