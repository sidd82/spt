import React from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";

// Importing useStoreState From EasyPeasy To Get State;
import { useStoreState } from "easy-peasy";

// Components Import
import MobileSingleFlight from "./SingleFlight/MobileSingleFlight";

// CSS Import
import "./mobflightsstyle.css";

// Icons Import
import { MdFlight, MdArrowBack, MdArrowForward, MdTune } from "react-icons/md";

const MobFlights = ({ history }) => {
  // Getting The Global State
  const flightResults = useStoreState(state => state.flights.flightResults);
  const traveller = useStoreState(state => state.ui.userSearchData);

  // Assigning Flights Details To Variables
  const departTitle = flightResults[0].Segments[0][0].Origin.Airport.CityName;
  const arrivalTitle =
    flightResults[0].Segments[0][0].Destination.Airport.CityName;
  const bookingDate = moment(
    flightResults[0].Segments[0][0].Destination.ArrTime
  ).format("ddd, D MMM");
  const travellerCount =
    traveller.AdultCount + traveller.ChildCount + traveller.InfantCount;

  return (
    <div className="mob-flights-wrapper-fr-spt">
      <div className="mob-flights-navbar-fr-spt">
        <div className="mob-flights-navdetails-fr-spt">
          <div
            className="mob-flights-icon-fr-spt"
            onClick={() => history.push(`/home`)}
          >
            <MdArrowBack color="#777777" size="1.5rem" />
          </div>
          <div className="mob-flights-details-fr-spt">
            <div className="mob-flights-title-fr-spt">
              <p>{departTitle}</p>
              <MdArrowForward color="#484848" />
              <p>{arrivalTitle}</p>
            </div>
            <div className="mob-flights-subtitle-fr-spt">
              <p>
                {bookingDate} | {flightResults.length} Flights |{" "}
                {travellerCount} Traveller
              </p>
            </div>
          </div>
        </div>
        <div className="mob-flights-navfilter-fr-spt">
          <MdTune color="#777777" />
          <p>Filter</p>
        </div>
      </div>
      <div className="mob-flights-search-fr-spt">
        <div className="mob-flights-modifysearch-btn-spt">
          <MdFlight
            color="#ffffff"
            size="1.2rem"
            className="mob-flighticon-rotate-spt"
          />{" "}
          <p>Modify Search</p>
        </div>
      </div>
      <div className="mob-flights-display-fr-spt">
        <div className="mob-flights-results-fr-spt">
          {flightResults &&
            flightResults.map((flight, index) => (
              <MobileSingleFlight key={index} flight={flight} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MobFlights);
