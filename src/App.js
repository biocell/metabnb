import Metabnb from "./components/Metabnb";
import { Routes, Route } from "react-router-dom";
import Places from "./components/Places";
import Nav from "./components/nav/Nav";
import { React, useState } from 'react';
import Modal from "./components/Modal";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
    <Nav showModal={showModal} />
      <Modal open={isModalOpen} close={closeModal} />

        <Routes>  
          <Route path='/' element={<Metabnb />} />
          <Route path='/Places' element={<Places />} />
        </Routes>
      
    </div>
  );
}

export default App;
