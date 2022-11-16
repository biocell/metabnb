
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
        <input className="search" type="text" placeholder="Search for location" /><p>Search</p>
      </div>
     
     

      <div>
       <img src="./images/heroimgs.svg" alt="Hero images" />
      </div>
      </div>
    <div>
      <p>Inspiration for your next adventure</p>
    </div>
      <Footer />
    </div>
  );
}

export default App;
