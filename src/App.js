import Metabnb from "./components/Metabnb";
import { Routes, Route } from "react-router-dom";
import Places from "./components/Places";
import Wallet from "./components/Wallet";
import { React } from 'react';


function App() {
  return (
    <div className="App">
  
        <Routes>  
          <Route path='/' element={<Metabnb />} />
          <Route path='/Places' element={<Places />} />
          <Route path='/Wallet' element={<Wallet />} />
        </Routes>
      
    </div>
  );
}

export default App;
