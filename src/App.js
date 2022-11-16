
import './App.css';
import Footer from './components/footer/Footer';
import Nav from "./components/nav/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='hero__section'>
        <div className='left-column'>
        <h1 className='mb1'>Rent a <span className='gradient'>Place</span> away from <span className='gradient'>Home</span> in the <span className='gradient'>Metaverse</span></h1>
        <p className='mb1'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        
      <form action="" id="search">
          <input type="search" className="search" placeholder="Search for location" />
          <button type="submit" className="search-btn">Search</button>
      </form>
      </div>
      <div>
       <img src="./images/heroimgs.svg" alt="Hero images" />
      </div>
     </div>
     <div className="nav-2">
      <div className='nav__container'>
          <img src="./images/mbtoken.svg" alt="mbg token img" />
          <img src="./images/metamask.svg" alt="meta mask img" />
          <img src="./images/opensea.svg" alt="open sea img" />
      </div>
     </div>
     
  <div id="inspiration">
      <h1>Inspiration for your next adventure</h1>

    <div className='grid repeat-4'>
        <div>
        <img src="./images/4048.svg" alt="dessert" />
        </div>
        <div>
        <img src="./images/4049.svg" alt="dessert" />
        </div>
        <div>
        <img src="./images/4050.svg" alt="dessert" />      
        </div>
        <div>
        <img src="./images/4051.svg" alt="dessert" />
        </div>
    </div>

    <div className='grid repeat-4'>
      <div >
      <img src="./images/8040.svg" alt="dessert" />
      </div>
      <div>
      <img src="./images/9440.svg" alt="dessert" />
      </div>
      <div>
      <img src="./images/5040.svg" alt="dessert" />      
      </div>
      <div>
      <img src="./images/5140.svg" alt="dessert" />
      </div>
    </div>

  </div>

  <div id="nft">
    <div className="nft__section">
      <div id='left-column'>
        <h3>Metabnb NFTs</h3>
          <p>
           Discover our NFT gift cards collection. Loyal<br /> customers gets amazing
           gift cards which are traded as NFTs. These NFTs gives our cutomer
           access to loads of our exclusive services.
          </p>
      <button>Learn More</button>
      </div> 
    </div>
    <div className='nft__img'>
      <img src="./images/nft.svg" alt=" nft" />
    </div>
  </div>
      <Footer />
    </div>
  );
}

export default App;
