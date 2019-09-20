import React from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";

// Importing useStoreState From EasyPeasy To Get State;
import { useStoreState } from "easy-peasy";

// Importing useStoreAction From EasyPeasy To Dispatch Action & Accessing State
import { useStoreActions } from "easy-peasy";

// CSS Import
import "./mobilesingleflightstyle.css";

// Icons Import
import { MdFlightTakeoff, MdAvTimer } from "react-icons/md";

const MobileSingleFlight = ({ flight, index, history }) => {
  // This Action is use to get Fare Rule of a Flight from Store
  const getFlightsFareRules = useStoreActions(
    actions => actions.flights.getFlightsFareRules
  );

  // This Action is use to get Fare Quote of a Flight from Store
  const getFlightsFareQuote = useStoreActions(
    actions => actions.flights.getFlightsFareQuote
  );

  const toggleIsLoading = useStoreActions(
    actions => actions.ui.toggleIsLoading
  );

  // This Action is use to get Trace ID of a Flight from Store
  const flightTraceID = useStoreState(state => state.flights.traceId);
  const flightTokenID = useStoreState(state => state.flights.tokenId);

  let timeInMinute = flight.Segments[0].Duration;

  // Handle method for Requesting Fare Rules
  const handleFareRules = () => {
    toggleIsLoading(true);
    const fareRulesData = {
      TokenId: flightTokenID,
      TraceId: flightTraceID,
      ResultIndex: flight.ResultIndex
    };

    // Creating A Payload To Send Because We Have To Send To Thunk Action
    const payload = {
      flightRules: fareRulesData,
      history: history,
      index: index
    };

    // Calling The Actions
    getFlightsFareRules(payload);
  };

  // Handle method for Requesting Fare Quote
  const handleFareQuote = () => {
    const fareQuoteData = {
      EndUserIp: "",
      TokenId: "",
      TraceId: flightTraceID,
      ResultIndex: flight.ResultIndex
    };

    const ssrData = {
      EndUserIp: "",
      TokenId: "",
      TraceId: flightTraceID,
      ResultIndex: flight.ResultIndex
    };

    // Creating A Payload To Send Because We Have To Send To Thunk Action
    const payload = {
      flightQuote: fareQuoteData,
      flightSSR: ssrData,
      history: history,
      index: index
    };
    // Calling The Actions
    getFlightsFareQuote(payload);
  };

  return (
    <div className="mob-singleflight-card-spt">
      <div className="mob-singleflight-details-spt">
        <div className="mob-singleflight-flights-spt">
          <div className="mob-singleflight-depart-spt">
            <h6>{moment(flight.Segments[0].Origin.DepTime).format("LT")}</h6>
            <p>{flight.Segments[0].Origin.Airport.CityName}</p>
          </div>
          <div className="mob-singleflight-gap-spt">
            <MdFlightTakeoff
              size="1.2rem"
              color="#777777"
              className="mobile-flighttakeoff-icon-spt"
            />
            <hr />
          </div>
          <div className="mob-singleflight-arrival-spt">
            <h6>
              {moment(flight.Segments[0].Destination.DepTime).format("LT")}
            </h6>
            <p>{flight.Segments[0].Destination.Airport.CityName}</p>
          </div>
        </div>
        <div className="mob-singleflight-price-spt">
          <p>{`₹ ${Math.round(flight.Fare.PublishedFare)}`}</p>
          <div
            className="mob-book-button-sf-spt"
            onClick={() => {
              handleFareRules();
              // handleFareQuote();
            }}
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
          | {flight.Segments[0].StopOver ? "Stop Over" : "Nonstop"}
        </p>
      </div>
      <div className="mob-singleflight-airline-spt">
        <p>{flight.Segments[0].Airline.AirlineName}</p>
      </div>
    </div>
  );
};

export default withRouter(MobileSingleFlight);
