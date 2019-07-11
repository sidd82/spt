import React from "react";
import { useStateValue } from "../../context/context";

// CSS Import
import "./flightbookingstyle.css";

// Component Import
import TopBar from "../Symbols/TopBar/TopBar";
import NavBar from "../Symbols/NavBar/NavBar";
import Footer from "../Symbols/Footer/Footer";

const FlightBooking = props => {
  // console.log(props.match.params.index);

  const [{ search }, dispatch] = useStateValue();
  console.log(search[props.match.params.index]);

  return (
    <div>
      <div className="main-container-fb-spt">
        <TopBar />

        <NavBar />

        <div className="flightbooking-wrapper-fb-spt">
          <div className="flightbooking-container-fb-spt">
            <h1>Itinerary</h1>
            <div className="flightbooking-details-wrapper-fb-spt">
              <div className="flightbooking-flightsdetails-fb-spt">
                <div className="flightbooking-title-fb-spt">
                  <h5 className="flightbooking-title-head-fb-spt">Airline</h5>
                  <h5 className="flightbooking-title-head-fb-spt">Departure</h5>
                  <h5 className="flightbooking-title-head-fb-spt">Arrival</h5>
                  <h5 className="flightbooking-title-head-fb-spt">Fare Type</h5>
                  <h5 className="flightbooking-title-head-fb-spt">Stops</h5>
                  <h5 className="flightbooking-title-head-fb-spt">Duration</h5>
                </div>
                <div className="flightbooking-details-fb-spt">1</div>
              </div>
              <div className="flightbooking-flightfare-fb-spt">
                <div className="flightbooking-title-fb-spt">
                  <h5 className="flightbooking-price-head-fb-spt">
                    Fare Summary
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default FlightBooking;
