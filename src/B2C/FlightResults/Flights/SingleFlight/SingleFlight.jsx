import React from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";

// Importing useStoreState From EasyPeasy To Get State;
import { useStoreState } from "easy-peasy";

// Importing useStoreAction From EasyPeasy To Dispatch Action & Accessing State
import { useStoreActions } from "easy-peasy";

// CSS Import
import "./singleflightstyle.css";

// Icons Import
import {
  MdCloudDownload,
  MdPictureAsPdf,
  MdAssessment,
  MdAccessTime,
  MdInsertInvitation,
  MdPlace
} from "react-icons/md";

const SingleFlight = ({ flight, index, history }) => {
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

  // console.log(flight.Fare.PublishedFare);
  return (
    <div className="single-flight-wrapper-spt">
      {/* Airline Part */}
      <div className="single-flight-spt">
        <div className="airline-area-sf-spt">
          <p>{flight.Segments[0].Airline.AirlineName}</p>
        </div>

        <div className="airline-area-sf-spt airline-flex-sf-spt">
          <div className="airline-share-sf-spt">
            <MdCloudDownload color="#212121" />
          </div>
          <div className="airline-share-sf-spt">
            <MdPictureAsPdf color="#212121" />
          </div>
          <div className="airline-share-sf-spt">
            <MdAssessment color="#212121" />
          </div>
        </div>

        <div className="airline-area-sf-spt">
          <div className="refundable-sf-spt">
            <p>{flight.IsRefundable ? "Refundable" : "Nonrefundable"}</p>
          </div>
        </div>
        <div className="airline-area-sf-spt">
          <h6>More Details...</h6>
        </div>
      </div>

      {/* Departure Part */}
      <div className="single-flight-spt">
        <div className="departure-area-sf-spt">
          <div className="icon-departure-sf-spt">
            <MdInsertInvitation size="1.2rem" color="#707070" />
          </div>
          <div className="title-departure-sf-spt">
            <p>
              {moment(flight.Segments[0].Origin.DepTime).format("MMM Do YY")}
            </p>
          </div>
        </div>

        <div className="departure-area-sf-spt">
          <div className="icon-departure-sf-spt">
            <MdAccessTime size="1.2rem" color="#707070" />
          </div>
          <div className="text-departure-sf-spt">
            <p>{moment(flight.Segments[0].Origin.DepTime).format("LT")}</p>
          </div>
        </div>

        <div className="departure-area-sf-spt">
          <div className="icon-departure-sf-spt">
            <MdPlace size="1.2rem" color="#707070" />
          </div>
          <div className="text-departure-sf-spt">
            <p>{flight.Segments[0].Origin.Airport.CityName}</p>
          </div>
        </div>
      </div>

      {/* Icon Part */}
      <div className="single-flight-spt middle-big-single-spt">
        <div className="icon-area-sf-spt">
          <p>1</p>
        </div>
      </div>

      {/* Arrival Part */}
      <div className="single-flight-spt">
        <div className="arrival-area-sf-spt">
          <div className="icon-arrival-sf-spt">
            <MdInsertInvitation size="1.2rem" color="#707070" />
          </div>
          <div className="title-arrival-sf-spt">
            <p>
              {moment(flight.Segments[0].Destination.ArrTime).format(
                "MMM Do YY"
              )}
            </p>
          </div>
        </div>

        <div className="arrival-area-sf-spt">
          <div className="icon-arrival-sf-spt">
            <MdAccessTime size="1.2rem" color="#707070" />
          </div>
          <div className="text-arrival-sf-spt">
            <p>{moment(flight.Segments[0].Destination.ArrTime).format("LT")}</p>
          </div>
        </div>

        <div className="arrival-area-sf-spt">
          <div className="icon-arrival-sf-spt">
            <MdPlace size="1.2rem" color="#707070" />
          </div>
          <div className="text-arrival-sf-spt">
            <p>{flight.Segments[0].Destination.Airport.CityName}</p>
          </div>
        </div>
      </div>

      {/* Duration Part */}
      <div className="single-flight-spt">
        <div className="duration-area-sf-spt">
          <div className="text-duration-sf-spt">
            {Math.floor(timeInMinute / 60) + "h " + (timeInMinute % 60) + "m"}
          </div>
        </div>
        <div className="duration-area-sf-spt">
          <div className="text-duration-sf-spt">
            <p>{flight.Segments[0].StopOver ? "Stop Over" : "Nonstop"}</p>
          </div>
        </div>
        <br />
      </div>

      {/* Price Part */}
      <div className="single-flight-spt">
        <div className="price-area-sf-spt">
          <h4>{`₹ ${Math.round(flight.Fare.PublishedFare)}`}</h4>
        </div>
        <div className="price-area-sf-spt">
          <div
            className="book-button-sf-spt"
            onClick={() => {
              handleFareRules();
              // handleFareQuote();
            }}
          >
            <p>Book Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SingleFlight);
