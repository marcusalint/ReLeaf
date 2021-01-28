import React from 'react'
import './HeadSectionTwo.scss'

const HeadSectionTwo = ({products, updateProduct, users, profile, goal}) => {
  return (
    <div className="Section--Two">
      <h1 className="Title">{profile[0].title}</h1>
      <p className="Description">{profile[0].description}</p>
      
      

  
    </div>
  )
}

export default HeadSectionTwo
