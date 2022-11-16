import React from "react";
import Navbar from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

function  Places() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <p>Restaurant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>fantastic city</p>
        <p>Beach</p>
        <p>Cabins</p>
        <p>Off-grid</p>
        <p>Farm </p>
        <img src="./images/location-btn.png" alt="location" />
      </div>
      <div>
        <img src="./images/feature-img5.png" alt="place-to-go" />
        <img src="./images/feature-img6.png" alt="place-to-go" />
        <img src="./images/feature-img7.png" alt="place-to-go" />
        <img src="./images/feature-img8.png" alt="place-to-go" />
        <img src="./images/feature-img1.png" alt="place-to-go" />
        <img src="./images/feature-img2.png" alt="place-to-go" />
        <img src="./images/feature-img3.png" alt="place-to-go" />
        <img src="./images/feature-img4.png" alt="place-to-go" />
        <img src="./images/place-img1.png" alt="place-to-go" />
        <img src="./images/place-img2.png" alt="place-to-go" />
        <img src="./images/place-img3.png" alt="place-to-go" />
        <img src="./images/place-img4.png" alt="place-to-go" />
        <img src="./images/place-img5.png" alt="place-to-go" />
        <img src="./images/place-img6.png" alt="place-to-go" />
        <img src="./images/place-img7.png" alt="place-to-go" />
        <img src="./images/place-img8.png" alt="place-to-go" />
      </div>
      <Footer />
    </div>
  );
};

export default Places;
