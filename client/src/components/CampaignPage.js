import React from 'react';

import Products from './Products';
import SidePanel from './SidePanel';
import "./CampaignPage.scss";



export default function CampaignPage(props) {
  return (
    <div className="layout">
      <SidePanel />
     
      <Products />
     
    </div>
  )
}
