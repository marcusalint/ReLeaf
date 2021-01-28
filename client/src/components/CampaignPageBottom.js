import React from 'react'
import './CampaignPageBottom.scss'
import BottomSectionOne from './BottomSectionOne'
// import BottomSectionTwo from './BottomSectionTwo'

const CampaignPageBottom = ({
  products, updateProduct, users, profile, goal, getRecentContributions
}) => {
  console.log("CAMPAIGN PAGE BOTTOM")
  return (
    <>
    <div className="Bottom--Section">
      <div >
        <BottomSectionOne products={products} updateProduct={updateProduct} users={users} profile={profile} goal={goal} getRecentContributions={getRecentContributions}/>
      </div>
    </div>
    </>
  )
}

export default CampaignPageBottom

