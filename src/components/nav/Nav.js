import React from 'react';
import './nav.css';
import { Link } from "react-router-dom";

import Home from "../../assets/images/home.svg";
import Logo from "../../assets/images/logo.svg";
import './nav.css';

function Nav(){
    return(
        <header className="header ">
            <div className="header__container flex row even">
                <div className="logo">
                    <img src={Home} alt="Home icon" />
                    <img src={Logo} alt="logo icon" />
                </div>
                
        <nav>
          <ul>
            <li>
                     <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/place-to-stay"> Place to stay</Link>
            </li>
            <li>
              <Link to="/">NFTs</Link>
            </li>
            <li>
              <Link to="/">Community</Link>
            </li>
          </ul>
        </nav>
                <p>Connect wallet</p>
            </div>

        </header>
    )
}

export default Nav