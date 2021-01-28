import React from 'react'
import './CampaignPageHead.scss'
import HeadSectionOne from './HeadSectionOne'
import HeadSectionTwo from './HeadSectionTwo'

const CampaignPageHead = ({
  products, updateProduct, users, profile, goal
}) => {

  return (
    <div className='Head--Banner'>
      <HeadSectionOne products={products} updateProduct={updateProduct} users={users} profile={profile} goal={goal}/>
      <HeadSectionTwo products={products} updateProduct={updateProduct} users={users} profile={profile} goal={goal}/>
    </div>
  )
}

export default CampaignPageHead
