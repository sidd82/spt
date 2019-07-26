import React from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";

// CSS Import
import "./mobilesingleflightstyle.css";

// Icons Import
import { MdAvTimer } from "react-icons/md";

const MobileSingleFlight = ({ flight, index, history }) => {
  let timeInMinute = flight.Segments[0][0].Duration;
  return (
    <div className="mob-singleflight-card-spt">
      <div className="mob-singleflight-details-spt">
        <div className="mob-singleflight-flights-spt">
          <div className="mob-singleflight-depart-spt">
            <h6>{moment(flight.Segments[0][0].Origin.DepTime).format("LT")}</h6>
            <p>{flight.Segments[0][0].Origin.Airport.CityName}</p>
          </div>
          <div className="mob-singleflight-gap-spt">2</div>
          <div className="mob-singleflight-arrival-spt">
            <h6>
              {moment(flight.Segments[0][0].Destination.DepTime).format("LT")}
            </h6>
            <p>{flight.Segments[0][0].Destination.Airport.CityName}</p>
          </div>
        </div>
        <div className="mob-singleflight-price-spt">
          <p>{`₹ ${Math.round(flight.Fare.PublishedFare)}`}</p>
          <div
            className="mob-book-button-sf-spt"
            onClick={() => history.push(`/bookflight/${index}`)}
          >
            <p>Book Now</p>
          </div>
        </div>
      </div>
      <div className="mob-singleflight-summary-spt">
        <MdAvTimer size="1.2rem" color="#777777" />
        <p>
          {" "}
          Duration:{" "}
          <span className="mob-singleflight-duration-spt">
            {Math.floor(timeInMinute / 60) + "h " + (timeInMinute % 60) + "m"}
          </span>{" "}
          | {flight.Segments[0][0].StopOver ? "Stop Over" : "Nonstop"}
        </p>
      </div>
      <div className="mob-singleflight-airline-spt">
        <p>{flight.Segments[0][0].Airline.AirlineName}</p>
      </div>
    </div>
  );
};

export default withRouter(MobileSingleFlight);
