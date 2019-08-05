import React from "react";

// Importing useStoreState From EasyPeasy To Get State;
import { useStoreState } from "easy-peasy";

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
import FlightsLoading from "../utilsComponents/FlightsLoading";

const FlightResults = () => {
  const isLoading = useStoreState(state => state.ui.isLoading);

  return (
    <div style={{ position: "relative" }}>
      {isLoading && <FlightsLoading />}

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
