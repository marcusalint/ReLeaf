import React from 'react'
import './HeadSectionOne.scss'

const HeadSectionOne = ({products, updateProduct, users, profile, goal}) => {
  console.log(profile[0], 'tnew daidos')
  

  return (
    <div className="Section--One">

      <img src="https://images.unsplash.com/photo-1567742940521-26d7040e1fd6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"className="Head--Image"></img>
  <h5 className="User--Location"></h5>

      
    </div>
  )
}

export default HeadSectionOne
