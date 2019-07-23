import React from "react";

// Style Import
import "./homestyle.css";

// External Library Import
import {
  MdLocalOffer,
  MdMonetizationOn,
  MdSecurity,
  MdHelpOutline
} from "react-icons/md";

// Component Import
import TopBar from "../Symbols/TopBar/TopBar";
import NavBar from "../Symbols/NavBar/NavBar";
import MainArea from "../Home/MainArea/MainArea";
import Footer from "../Symbols/Footer/Footer";
import FlightsLoading from "../utilsComponents/FlightsLoading";

const Home = () => {
  return (
    <div>
      <FlightsLoading />

      <div className="main-container-spt">
        <TopBar />

        <NavBar />

        <MainArea />

        <div className="infoarea-wrapper-spt">
          <div className="infoare-spt">
            <div className="infos-wrapper-spt">
              <MdLocalOffer size="2rem" color="#0092CF" />
              <h3>DEALS FOR EVERY BUDGET</h3>
              <p>Incredible prices on hotels, flights, car</p>
              <p>and packages worldwide.</p>
            </div>

            <div className="infos-wrapper-spt">
              <MdMonetizationOn size="2rem" color="#0092CF" />
              <h3>BILLONS SAVED</h3>
              <p>We have allready saved travellers </p>
              <p>billons of dollars!</p>
            </div>

            <div className="infos-wrapper-spt">
              <MdSecurity size="2rem" color="#0092CF" />
              <h3>BEST PRICE GUARANTED</h3>
              <p>Find a lower price? We'll refund you</p>
              <p>100% of the difference.</p>
            </div>

            <div className="infos-wrapper-spt">
              <MdHelpOutline size="2rem" color="#0092CF" />
              <h3>HELP 24/7</h3>
              <p>We are always here for you - reach us</p>
              <p>24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
