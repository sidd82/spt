import React from "react";
import "./flightsloadingstyle.css";

import Loader from "react-loader-spinner";

const FlightsLoading = () => {
  return (
    <div className="flight-loading-spt">
      <div className="loader-loading-sp">
        <Loader type="Plane" color="#0092CF" height="80" width="80" />
        <h1>Wait! We are finding better deals for you</h1>
      </div>
    </div>
  );
};

export default FlightsLoading;
