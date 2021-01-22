// import React from "react";
// import Button from '@material-ui/core/Button';

// export default function Home(props) {
//   return(
//     <div>
//       <h2>This is the Home Page here</h2>
//       <Button 
//       variant="contained" 
//       color="primary" 
//       href="/home">
//         Create a Fund
//       </Button>
//       <Button 
//       variant="contained" 
//       color="primary" 
//       href="/random">
//         Contribute to a Fund
//       </Button>
//     </div>
//   )
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';
import { faQuestion, faCogs, faUsers } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
  render() {
    return (
      <div >

        <div className="Img-Container">
          <img className="Home-image" alt="" src="https://www.oreilly.com/radar/wp-content/uploads/sites/3/2019/07/radar-se-os-natural-disaster-crop.jpg" />
          <h1 className="create-profile">Create your Profile</h1>
          <Link to={'/create_funds'}>
            <button className="btn-profile">
              <span>Create Profile</span><em></em>
            </button>
          </Link>

          <img className="Home-image" alt="" src="https://image.freepik.com/free-photo/couple-holding-hands-grey-background_23-2148219108.jpg"/>
          <h1 className="contributor">I am here to Contribute</h1>
          <Link to={'/create_funds'}>
            <button className="btn-contributor">
              <span>Contribute</span><em></em>
            </button>
          </Link>
        </div>
        <h6 className="welcome">Welcome to Releaf</h6>

        <section className="description">
          <div className="section-description">
            <h1>Releaf Crowdfunding</h1>
            <div className="content-wrap">
              <span className="Font-icon"><FontAwesomeIcon size="3x" icon={faQuestion} /></span>
              <div className="content">
                <h4>What is Releaf Crowdfunding?</h4>
                <p>Crowdfunding is a fundraising method that helps individuals raise money for any cause through an online donation page.</p></div>
            </div>
            <div className="content-wrap">
              <span className="Font-icon"><FontAwesomeIcon size="3x" icon={faUsers} /></span>
              <div className="content">
                <h4>What are the benefits of Releaf</h4>
                <p>Releaf allows you to create your own campaign for raising a natural disaster fund for your friends and family. It also lets you contribute to other campaigns around the world</p></div>
            </div>
            <div className="content-wrap">
              <span className="Font-icon"><FontAwesomeIcon size="3x" icon={faCogs} /></span>
              <div className="content">
                <h4>How I begin?</h4>
                <p>First, you’ll want to create your profile for campaign. To create your campaign, you simply set a fundraising goal, give a title and description, and upload an image. Your campaign page will be created</p>
              </div>
            </div>

          </div>
          <div className="section-image">
            <img alt="" src="https://dontmesswithtaxes.typepad.com/.a/6a00d8345157c669e201b8d109d5f5970c-800wi" />
            <button className="description-contribute">
              <span>Start your own campaign</span><em></em>
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Home;
