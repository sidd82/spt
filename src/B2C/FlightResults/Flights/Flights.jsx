import React from "react";
import { useStateValue } from "../../../context/context";

// Components Import
import SingleFlight from "./SingleFlight/SingleFlight";

// CSS Imports
import "./flightsstyle.css";

const Flights = () => {
  const [{ search }, dispatch] = useStateValue();
  console.log(search);
  return (
    <div className="flight-results-flight-spt">
      <div className="top-section-wrapper-spt">
        <div className="top-section-flight-spt">
          <div className="top-airline-section-item-flight-spt">
            <p>Airline</p>
          </div>
          <div className="top-depart-section-item-flight-spt">
            <p>Departure</p>
          </div>
          <div className="top-section-item-flight-spt middle-big-spt" />
          <div className="top-arrival-section-item-flight-spt">
            <p>Arrival</p>
          </div>
          <div className="top-duration-section-item-flight-spt">
            <p>Duration</p>
          </div>
          <div className="top-price-section-item-flight-spt">
            <p>Price</p>
          </div>
        </div>
      </div>
      <div className="flight-inner-flight-spt">
        {search &&
          search.map((flight, index) => (
            <SingleFlight key={index} flight={flight} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Flights;
