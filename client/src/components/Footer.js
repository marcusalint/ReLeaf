import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faSnapchatGhost, faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faFacebookF, faTwitter, faSnapchatGhost); 
const Footer = () => {
  return (
    <div class="footer-dark">
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Fundraising</a></li>
                        <li><a href="#">Contributing</a></li>
                        <li><a href="#">Testimonials</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Careers</a></li>


                    </ul>
                </div>
                <div class="col-md-6 item text">
                    <h3>Releaf</h3>
                    <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Help Centre</a></li>
                    </ul>
                </div>
                <div class="col item social"><FontAwesomeIcon className="social-icon" size="2x" icon={faFacebookF} /><FontAwesomeIcon className="social-icon" size="2x" icon={faTwitter} /><FontAwesomeIcon className="social-icon" size="2x" icon={faSnapchatGhost} /><FontAwesomeIcon className="social-icon" size="2x" icon={faInstagram} /></div>
            </div>
            <p class="copyright">Releaf © 2021</p>
        </div>
    </footer>
</div>
  );
}

export default Footer;