import React from 'react'
import './CampaignPageBottom.scss'
import BottomSectionOne from './BottomSectionOne'
import BottomSectionTwo from './BottomSectionTwo'

const CampaignPageBottom = ({
  products, updateProduct, users, profile, goal
}) => {
  console.log(profile, 'this is conso.e log on camppagebot')
  return (
    <div className="Bottom--Section">
      <div >
        <BottomSectionOne products={products} updateProduct={updateProduct} users={users} profile={profile} goal={goal}/>
      </div>
      <div>
        <BottomSectionTwo products={products} updateProduct={updateProduct} users={users} profile={profile} goal={goal}/>
      </div>
    </div>
  )
}

export default CampaignPageBottom
