import React from 'react';
import './footer.css';
import Home from "../../images/footerhome.svg";
import Logo from "../../images/footerlogo.svg";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Twitter from "../../images/twitter.svg";


function Footer() {
    return(
        <div className='fill'>
    <footer className='even'>
        <div className="left-column">
            <div className='logo'>
              <img src={Home} alt="Home icon" />
              <img src={Logo} alt="logo icon" />
          </div>
          <div className="social-media flex btw">
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="instagram" />
          <img src={Twitter} alt="twitter" />
          </div>
          <h6>&copy; 2022 metabnb </h6>
        </div>
        <div className="right-column even">
          <div className='flex-start'>
            <h3>Community</h3>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landords</p>
            <p>Discord</p>
          </div>
          <div className='flex-start'>
            <h3>Places</h3>
            <p>Castle</p>
            <p>Farms</p>
            <p>Beach</p>
            <p>Learn more</p>
          </div>
          <div className='flex-start'>
            <h3>About us</h3>
            <p>Road map</p>
            <p>Creators</p>
            <p>Carrer</p>
            <p>Contact us</p>
          </div>
        </div>
        </footer>
    </div>
    )
}

export default Footer;