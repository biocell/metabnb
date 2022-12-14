import { React, useState} from 'react';
import './nav.css';
import { Link } from "react-router-dom";

import Home from "../../images/home.svg";
import Logo from "../../images/logo.svg";

function Nav({ showModal }){
  const [click, setClick] = useState(false)

  const handleClick = () => {
      setClick(!click)
  }
    return(
        <header className="header" onClick={handleClick}>
            <div className="header__container flex row even">
                <div className="logo">
                    <img src={Home} alt="Home icon" />
                    <img src={Logo} alt="logo icon" />
                </div>
                
        <nav>
          <ul>
            <li>
                     <Link style={{textDecoration: 'none' , 
color: '#000'}} to="/">Home</Link>
            </li>
            <li>
              <Link style={{textDecoration: 'none' , 
color: '#000'}} to="../Places"> Place to stay</Link>
            </li>
            <li>
              <Link style={{textDecoration: 'none' , 
color: '#000'}} to="/">NFTs</Link>
            </li>
            <li>
              <Link style={{textDecoration: 'none', 
color: '#000'}} to="/">Community</Link>
            </li>
          </ul>
        </nav>
                <a style={{textDecoration: 'none'}} href="/">
                    <span className="connect">
                       
                       <Link style={{textDecoration: 'none' , 
color: '#fff'}} to={"../Modal"}> Connect wallet</Link>
                    </span>
                </a>
            </div>

        </header>
    )
}

export default Nav