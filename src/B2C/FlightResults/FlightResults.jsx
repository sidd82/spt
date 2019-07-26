import React from "react";

// CSS Import
import "./flightresultsstyle.css";

// Component Import
import TopBar from "../Symbols/TopBar/TopBar";
import NavBar from "../Symbols/NavBar/NavBar";
import Footer from "../Symbols/Footer/Footer";
import SearchAgainForm from "./SearchAgainForm/SearchAgainForm";
import Filter from "./Filter/Filter";
import Flights from "./Flights/Flights";
import MobFlights from "./Flights/MobFlights";

const FlightResults = () => {
  return (
    <div>
      <div className="main-container-fr-spt">
        <TopBar />

        <NavBar />

        {/* Search Again Form */}
        <div className="search-again-fr-spt">
          <SearchAgainForm />
        </div>

        {/* Flight Results & Filter Area */}
        <div className="flights-wrapper-fr-spt">
          <Filter />

          <Flights />
        </div>

        <Footer />
      </div>

      {/* Mobile Flight Results Area */}
      <div className="mob-flights-wrapper-fr-spt">
        <MobFlights />
      </div>
    </div>
  );
};

export default FlightResults;
