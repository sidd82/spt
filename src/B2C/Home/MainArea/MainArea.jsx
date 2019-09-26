import React, { useState } from "react";
import classnames from "classnames";
import moment from "moment";
import { withRouter } from "react-router-dom";
import {
  MdCompareArrows,
  MdAddCircle,
  MdRemoveCircle,
  MdFlightTakeoff,
  MdFlightLand
} from "react-icons/md";
import advertise from "../../../static/adam_taylor_emirates_dubai_mall.png";

// Importing useStoreAction From EasyPeasy To Dispatch Action & Accessing State
import { useStoreActions } from "easy-peasy";

// Style Import
import "./mainareastyle.css";

const MainArea = props => {
  // Getting Dispatch Method To Get Flights
  const getFlights = useStoreActions(actions => actions.flights.getFlights);
  const toggleIsLoading = useStoreActions(
    actions => actions.ui.toggleIsLoading
  );
  const addUserSearchData = useStoreActions(
    actions => actions.ui.addUserSearchData
  );

  // Local State
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);
  const [directFlight, setDirectFlight] = useState(false);
  const [journeyType, setjourneyType] = useState(4);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [cabinClass, setCabinClass] = useState(1);
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTimePlaceholder, setDepartureTimePlaceholder] = useState(
    "Departure"
  );
  const [arrivalTimePlaceholder, setArrivalTimePlaceholder] = useState(
    "Arrival"
  );

  const [isOneWay, setIsOneWay] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    toggleIsLoading(true);
    const searchInputData = {
      AdultCount: adult,
      ChildCount: child,
      InfantCount: infant
    };
    const searchData = {
      AdultCount: adult,
      ChildCount: child,
      InfantCount: infant,
      DirectFlight: directFlight,
      AirTripType: journeyType,
      PreferredAirlines: null,
      CabinType: cabinClass,
      Segments:
        journeyType.toString() === "1"
          ? [
              {
                Origin: origin,
                Destination: destination,
                DepartureDateTime: departureTime
              }
            ]
          : [
              {
                Origin: origin,
                Destination: destination,
                DepartureDateTime: departureTime
              },
              {
                Origin: destination,
                Destination: origin,
                DepartureDateTime: arrivalTime
              }
            ]
    };

    // Creating A Payload To Send Because We Have To Send Two Things To Thunk Action
    // One: Flight Request Data & Two: History Object To Push
    const payload = {
      flightRequest: searchData,
      history: props.history
    };

    // Calling The Actions
    getFlights(payload);
    addUserSearchData(searchInputData);
  };

  const handleJourneyType = e => {
    if (e.target.value === "OneWay") {
      setIsOneWay(false);
      setjourneyType(1);
    } else if (e.target.value === "Return") {
      setIsOneWay(true);
      setjourneyType(2);
    } else if (e.target.value === "MultiStop") {
      setjourneyType(3);
    } else if (e.target.value === "Advance") {
      setjourneyType(4);
    } else if (e.target.value === "SpecialReturn") {
      setjourneyType(5);
    }
  };

  const handleCabinClass = e => {
    if (e.target.value === "all") {
      setCabinClass(0);
    } else if (e.target.value === "economy") {
      setCabinClass(1);
    } else if (e.target.value === "premiumeconomy") {
      setCabinClass(3);
    } else if (e.target.value === "business") {
      setCabinClass(4);
    } else if (e.target.value === "premiumbusiness") {
      setCabinClass(5);
    } else if (e.target.value === "first") {
      setCabinClass(6);
    }
  };

  const handleDeparture = e => {
    setDepartureTimePlaceholder(moment(e.target.value).format("ll"));
    setDepartureTime(e.target.value + "T00: 00: 00");
  };

  const handleArrival = e => {
    setArrivalTimePlaceholder(moment(e.target.value).format("ll"));
    setArrivalTime(e.target.value + "T00: 00: 00");
  };

  return (
    <>
      <div className="mainarea-wrapper-spt">
        <form onSubmit={handleSubmit}>
          <div className="mainarea-spt">
            <div className="form-wrapper-spt">
              <div className="formtitle-wrapper-spt">
                <h1>Save on Flights</h1>
                <p>Honest Pricing. Genuine Savings.</p>
                <hr />
              </div>
              <div className="journeytype-wrapper-spt">
                <label className="container-spt">
                  One Way
                  <input
                    type="radio"
                    name="radio"
                    value="OneWay"
                    onClick={handleJourneyType}
                  />
                  <span className="checkmark" />
                </label>
                <label className="container-spt">
                  Return
                  <input
                    type="radio"
                    name="radio"
                    value="Return"
                    onClick={handleJourneyType}
                  />
                  <span className="checkmark" />
                </label>
                <label className="container-spt">
                  Multi Stop
                  <input
                    type="radio"
                    name="radio"
                    value="MultiStop"
                    onClick={handleJourneyType}
                  />
                  <span className="checkmark" />
                </label>
                <label className="container-spt">
                  Advance
                  <input
                    type="radio"
                    name="radio"
                    value="Advance"
                    onClick={handleJourneyType}
                  />
                  <span className="checkmark" />
                </label>
                <label className="container-spt">
                  Special Return
                  <input
                    type="radio"
                    name="radio"
                    value="SpecialReturn"
                    onClick={handleJourneyType}
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="destination-wrapper-spt">
                <div className="departure-wrapper-spt">
                  <input
                    type="text"
                    placeholder="From"
                    onChange={e => setOrigin(e.target.value)}
                  />
                </div>
                <div className="destinationicon-wrapper-spt">
                  <MdCompareArrows size="2rem" />
                </div>
                <div className="arrival-wrapper-spt">
                  <input
                    type="text"
                    placeholder="To"
                    onChange={e => setDestination(e.target.value)}
                  />
                </div>
              </div>
              <div className="class-wrapper-spt">
                <div className="select-class-spt">
                  <select name="classtype" onChange={handleCabinClass}>
                    <option value="all">All Class</option>
                    <option value="economy">Economy</option>
                    <option value="premiumeconomy">PremiumEconomy</option>
                    <option value="business">Business</option>
                    <option value="premiumbusiness">PremiumBusiness</option>
                    <option value="first">First</option>
                  </select>
                </div>
                <div className="departure-date-spt">
                  <input
                    type="date"
                    onChange={handleDeparture}
                    data-placeholder={departureTimePlaceholder}
                  />
                </div>
                {isOneWay && (
                  <div className="arrival-date-spt">
                    <input
                      type="date"
                      onChange={handleArrival}
                      data-placeholder={arrivalTimePlaceholder}
                    />
                  </div>
                )}
              </div>
              <div className="person-wrapper-spt">
                <div className="adult-count-spt">
                  <MdRemoveCircle
                    size="1.2rem"
                    color="#484848"
                    onClick={() => setAdult(adult - 1)}
                  />
                  <p>
                    Adult <span className="adultcounter-spt">{adult}</span>
                  </p>
                  <MdAddCircle
                    size="1.2rem"
                    color="#484848"
                    onClick={() => setAdult(adult + 1)}
                  />
                </div>
                <div className="children-count-spt">
                  <MdRemoveCircle
                    size="1.2rem"
                    color="#484848"
                    onClick={() => setChild(child - 1)}
                  />
                  <p>
                    Children{" "}
                    <span className="childrencounter-spt">{child}</span>
                  </p>
                  <MdAddCircle
                    size="1.2rem"
                    color="#484848"
                    onClick={() => setChild(child + 1)}
                  />
                </div>
                <div className="infant-count-spt">
                  <MdRemoveCircle
                    size="1.2rem"
                    color="#484848"
                    onClick={() => setInfant(infant - 1)}
                  />
                  <p>
                    Infant <span className="infantcounter-spt">{infant}</span>
                  </p>
                  <MdAddCircle
                    size="1.2rem"
                    color="#484848"
                    onClick={() => setInfant(infant + 1)}
                  />
                </div>
              </div>
              <div className="submit-wrapper-spt">
                <input
                  type="button"
                  className="directflight-btn-spt"
                  value="Direct Flight"
                />
                <input
                  type="submit"
                  className="submit-btn-spt"
                  value="Submit"
                />
              </div>
            </div>
            <div className="advertise-wrapper-spt">
              <div className="image-wrapper-spt">
                <img src={advertise} alt="advertise" width="400px" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        className={classnames("mob-mainarea-wrapper-spt", {
          "mob-mainarea-roundtrip-wrapper-spt": isOneWay
        })}
      >
        <div className="mob-mainarea-spt">
          <form onSubmit={handleSubmit} className="mob-form-wrapper-spt">
            <div className="formtitle-wrapper-spt">
              <h1>Save on Flights</h1>
              <p>Honest Pricing. Genuine Savings.</p>
              <hr />
            </div>

            <div className="mob-journeytype-wrapper-spt">
              <div className="journeytype-list-spt">
                <label className="container-spt">
                  One Way
                  <input
                    type="radio"
                    name="radio"
                    value="OneWay"
                    onClick={handleJourneyType}
                  />
                  <span className="checkmark" />
                </label>
                <label className="container-spt">
                  Return
                  <input
                    type="radio"
                    name="radio"
                    value="Return"
                    onClick={handleJourneyType}
                  />
                  <span className="checkmark" />
                </label>
                <label className="container-spt">
                  Multi Stop
                  <input
                    type="radio"
                    name="radio"
                    value="MultiStop"
                    onClick={handleJourneyType}
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="journeytype-list-spt">
                <label className="container-spt">
                  Advance
                  <input
                    type="radio"
                    name="radio"
                    value="Advance"
                    onClick={handleJourneyType}
                  />
                  <span className="checkmark" />
                </label>
                <label className="container-spt">
                  Special Return
                  <input
                    type="radio"
                    name="radio"
                    value="SpecialReturn"
                    onClick={handleJourneyType}
                  />
                  <span className="checkmark" />
                </label>
              </div>
            </div>

            <div className="departure-wrapper-spt">
              <span>
                <MdFlightTakeoff color="#484848" />
              </span>
              <input
                type="text"
                placeholder="From"
                onChange={e => setOrigin(e.target.value)}
              />
            </div>

            <div className="arrival-wrapper-spt">
              <span>
                <MdFlightLand color="#484848" />
              </span>
              <input
                type="text"
                placeholder="To"
                onChange={e => setDestination(e.target.value)}
              />
            </div>

            <div className="select-class-spt">
              <select name="classtype" onChange={handleCabinClass}>
                <option value="all">All Class</option>
                <option value="economy">Economy</option>
                <option value="premiumeconomy">PremiumEconomy</option>
                <option value="business">Business</option>
                <option value="premiumbusiness">PremiumBusiness</option>
                <option value="first">First</option>
              </select>
            </div>
            <div className="departure-date-spt">
              <input
                type="date"
                onChange={handleDeparture}
                data-placeholder={departureTimePlaceholder}
              />
            </div>
            {isOneWay && (
              <div className="arrival-date-spt">
                <input
                  type="date"
                  onChange={handleArrival}
                  data-placeholder={arrivalTimePlaceholder}
                />
              </div>
            )}

            <div className="mob-person-wrapper-spt">
              <div className="adult-count-spt">
                <MdRemoveCircle
                  size="1rem"
                  color="#484848"
                  onClick={() => setAdult(adult - 1)}
                />
                <p>
                  Adult <span className="adultcounter-spt">{adult}</span>
                </p>
                <MdAddCircle
                  size="1rem"
                  color="#484848"
                  onClick={() => setAdult(adult + 1)}
                />
              </div>
              <div className="children-count-spt">
                <MdRemoveCircle
                  size="1rem"
                  color="#484848"
                  onClick={() => setChild(child - 1)}
                />
                <p>
                  Children <span className="childrencounter-spt">{child}</span>
                </p>
                <MdAddCircle
                  size="1rem"
                  color="#484848"
                  onClick={() => setChild(child + 1)}
                />
              </div>
            </div>
            <div className="mob-person-wrapper-spt">
              <div className="infant-count-spt">
                <MdRemoveCircle
                  size="1rem"
                  color="#484848"
                  onClick={() => setInfant(infant - 1)}
                />
                <p>
                  Infant <span className="infantcounter-spt">{infant}</span>
                </p>
                <MdAddCircle
                  size="1rem"
                  color="#484848"
                  onClick={() => setInfant(infant + 1)}
                />
              </div>
            </div>

            <div className="submit-wrapper-spt">
              <input
                type="button"
                className="directflight-btn-spt"
                value="Direct Flight"
              />
              <input type="submit" className="submit-btn-spt" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default withRouter(MainArea);
