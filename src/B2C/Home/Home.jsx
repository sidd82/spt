import React from "react";

// Style Import
import "./homestyle.css";

// Component Importt
import TopBar from "../Symbols/TopBar/TopBar";
import NavBar from "../Symbols/NavBar/NavBar";
import MainArea from "../Home/MainArea/MainArea";
import Footer from "../Symbols/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="main-container-spt">
        <TopBar />

        <NavBar />

        <MainArea />

        <div className="infoarea-wrapper-spt">
          <h1>Info Area</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
