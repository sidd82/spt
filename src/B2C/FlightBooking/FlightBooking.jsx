import React, { useState } from "react";
import classnames from "classnames";
import moment from "moment";
import { MdClose } from "react-icons/md";
import { Accordion, AccordionItem } from "react-sanfona";

// Importing useStoreState From EasyPeasy To Get State;
import { useStoreState } from "easy-peasy";

// CSS Import
import "./flightbookingstyle.css";

// Component Import
import TopBar from "../Symbols/TopBar/TopBar";
import NavBar from "../Symbols/NavBar/NavBar";
import Footer from "../Symbols/Footer/Footer";
import PassengerBookingForm from "./PassengerBookingForm";
import MobFlightBooking from "./MobFlightBooking";
import FareRules from "./FareRules";
import FlightConfirmation from "./FlightConfirmation";

const FlightBooking = props => {
  // This Action is use to get Search Results of a Flight from Store
  const searchFlight = useStoreState(
    state => state.flights.flightResults[0].Result[props.match.params.index]
  );
  console.log(searchFlight);
  // This Action is use to get SSR Meal Results of a Flight from Store
  // const ssrMealResults = useStoreState(
  //   state => state.flights.flightSSR.MealDynamic[0]
  // );
  // This Action is use to get SSR Baggage Results of a Flight from Store
  // const ssrBaggageResults = useStoreState(
  //   state => state.flights.flightSSR.Baggage[0]
  // );
  // This Action is use to get Travellers Number in a Flight from Store
  const userSearchData = useStoreState(state => state.ui.userSearchData);

  // Converting Time from the Result of a Flight from Store
  let timeInMinute = searchFlight.Segments[0].Duration;

  // Adding Taxes to get total amount of the flight
  let totalTax = searchFlight.Fare.Tax + searchFlight.Fare.OtherCharges;

  // Global Variable used for counting total number of travellers
  let count = 1;

  // Local State
  const [isFareRuleModal, setIsFareRuleModal] = useState(false);

  // Method to toggle open
  const modalOpen = () => {
    let isModalOpen = true;
    setIsFareRuleModal(isModalOpen);
  };

  // Method to toggle close
  const modalClose = () => {
    let isModalOpen = false;
    setIsFareRuleModal(isModalOpen);
  };

  const createPassengerForm = (name, countName) => {
    const passName = name;
    const passengerForm = [];
    let passengerCount;

    if (countName === "adultCount") {
      passengerCount = userSearchData.AdultCount - 1;
    } else if (countName === "childCount") {
      passengerCount = userSearchData.ChildCount;
    } else if (countName === "infantCount") {
      passengerCount = userSearchData.InfantCount;
    }

    for (let i = 0; i < passengerCount; i++) {
      count = count + 1;
      passengerForm.push(
        <PassengerBookingForm
          adult={passengerCount}
          passName={passName}
          totalPassenger={count}
          flight={searchFlight}
          key={count}
        />
      );
    }
    return passengerForm;
  };

  const handleSubmit = () => {
    // props.history.push("/confirmbooking");
  };

  // Keep In Mind Last Line
  // console.log(search[props.match.params.index]);

  return (
    <div>
      <div className="main-container-fb-spt">
        <TopBar />

        <NavBar />

        <div className="flightbooking-wrapper-fb-spt">
          <div className="flightbooking-container-fb-spt">
            {/* Itinerary Part */}
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
                <div className="flightbooking-details-fb-spt">
                  {/* Airline Part */}
                  <div className="flightbooking-airline-details-fb-spt">
                    <h3>{searchFlight.Segments[0].Airline.AirlineName}</h3>
                    <p>{`${searchFlight.Segments[0].Airline.AirlineCode}-${searchFlight.Segments[0].Airline.FlightNumber}`}</p>
                  </div>

                  {/* Departure Part */}
                  <div className="flightbooking-depart-details-fb-spt">
                    <h3>
                      {searchFlight.Segments[0].Origin.Airport.CityName}
                      <span>{` (${searchFlight.Segments[0].Origin.Airport.CityCode})`}</span>
                    </h3>
                    <div>
                      <p>
                        {moment(searchFlight.Segments[0].Origin.DepTime).format(
                          "MMM Do YY"
                        )}
                      </p>
                      <p>
                        {moment(searchFlight.Segments[0].Origin.DepTime).format(
                          "LT"
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Arrival Part */}
                  <div className="flightbooking-arrival-details-fb-spt">
                    <h3>
                      {searchFlight.Segments[0].Destination.Airport.CityName}
                      <span>{` (${searchFlight.Segments[0].Destination.Airport.CityCode})`}</span>
                    </h3>
                    <div>
                      <p>
                        {moment(
                          searchFlight.Segments[0].Destination.ArrTime
                        ).format("MMM Do YY")}
                      </p>
                      <p>
                        {moment(
                          searchFlight.Segments[0].Destination.ArrTime
                        ).format("LT")}
                      </p>
                    </div>
                  </div>

                  {/* Refundable Part */}
                  <div className="flightbooking-refund-details-fb-spt">
                    <h3>
                      {searchFlight.IsRefundable
                        ? "Refundable"
                        : "Nonrefundable"}
                    </h3>
                    <p onClick={modalOpen}>Fare Rules</p>
                    <div
                      className={classnames("flightbooking-modal-wrapper-spt", {
                        "flightbooking-modal-display-spt": isFareRuleModal
                      })}
                    >
                      <div className="flightbooking-modal-container-spt">
                        <MdClose
                          size="2rem"
                          color="#707070"
                          className="fb-close-modal-spt"
                          onClick={modalClose}
                        />
                        <FareRules />
                      </div>
                    </div>
                  </div>

                  {/* Stops Part */}
                  <div className="flightbooking-stops-details-fb-spt">
                    <h3>
                      {searchFlight.Segments[0].StopOver
                        ? "Stop Over"
                        : "Nonstop"}
                    </h3>
                  </div>

                  {/* Duration Part */}
                  <div className="flightbooking-duration-details-fb-spt">
                    <h3>
                      {Math.floor(timeInMinute / 60) +
                        "h " +
                        (timeInMinute % 60) +
                        "m"}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flightbooking-flightfare-fb-spt">
                <div className="flightbooking-title-fb-spt">
                  <h5 className="flightbooking-price-head-fb-spt">
                    Fare Summary
                  </h5>
                </div>
                <div className="flightbooking-price-details-fb-spt">
                  <div className="flightbooking-price-baseprice-fb-spt">
                    <h3>Base Fare</h3>
                    <p>{`₹ ${Math.round(searchFlight.Fare.BaseFare)}`}</p>
                  </div>
                  <div className="flightbooking-price-tax-fb-spt">
                    <h3>TAX</h3>
                    <p>{`₹ ${Math.round(totalTax)}`}</p>
                  </div>
                  <div className="flightbooking-price-totalprice-fb-spt">
                    <h3>Total</h3>
                    <p>{`₹ ${Math.round(searchFlight.Fare.PublishedFare)}`}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Itinerary Part */}
            <p className="flightbooking-passenger-head-fb-spt">
              Passenger 1 (Adult)
            </p>
            <form onSubmit={handleSubmit()}>
              <div className="flightbooking-passenger-mainform-fb-spt">
                <div className="flightbooking-passenger-formcontainer-fb-spt">
                  <div className="flightbooking-pass-formwrap-fb-spt">
                    <div className="flightbooking-pass-name-fb-spt">
                      <p>Full Name</p>
                      <input type="text" />
                    </div>

                    <div className="flightbooking-pass-mobile-fb-spt">
                      <p>Mobile</p>
                      <input type="text" />
                    </div>

                    <div className="flightbooking-pass-email-fb-spt">
                      <p>Email</p>
                      <input type="email" />
                    </div>

                    <div className="flightbooking-pass-dob-fb-spt">
                      <p>Date of Birth</p>
                      <div className="dob-details-fb-spt">
                        <input type="text" placeholder="Date" />
                        <input type="text" placeholder="Month" />
                        <input type="text" placeholder="Year" />
                      </div>
                    </div>
                  </div>
                  <div className="flightbooking-pass-formwrap-fb-spt">
                    <div className="flightbooking-pass-address-fb-spt">
                      <p>Address (Line 1)</p>
                      <input type="text" />
                    </div>

                    <div className="flightbooking-pass-address-fb-spt">
                      <p>Address (Line 2)</p>
                      <input type="text" />
                    </div>

                    <div className="flightbooking-pass-city-fb-spt">
                      <p>City</p>
                      <input type="text" />
                    </div>

                    <div className="flightbooking-pass-postal-fb-spt">
                      <div className="country-details-fb-spt">
                        <p>Country</p>
                        <input type="text" />
                      </div>
                      <div className="postal-details-fb-spt">
                        <p>Postal Code</p>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Accordion className="flightbooking-meal-baggage-wrapper-fb-spt">
                  <AccordionItem
                    title="+ Meal / Excess Baggage For Passenger 1"
                    titleClassName="flightbooking-meal-baggage-title-fb-spt"
                  >
                    <div className="flightbooking-meal-baggage-body-fb-spt">
                      <div className="flightbooking-meal-select-fb-spt">
                        <p>
                          {searchFlight.Segments[0][0].Origin.Airport.CityCode}{" "}
                          -{" "}
                          {
                            searchFlight.Segments[0][0].Destination.Airport
                              .CityCode
                          }
                        </p>
                        <select name="classtype">
                          {ssrMealResults.map(meal => (
                            <option value={meal.Code}>
                              Qty {meal.Quantity} | {meal.Code} | {meal.Price}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flightbooking-baggage-select-fb-spt">
                        <p>
                          {searchFlight.Segments[0][0].Origin.Airport.CityCode}{" "}
                          -{" "}
                          {
                            searchFlight.Segments[0][0].Destination.Airport
                              .CityCode
                          }
                        </p>
                        <select name="classtype">
                          {ssrBaggageResults.map(baggage => (
                            <option value={baggage.Weight}>
                              {baggage.Weight} Kg | ₹ {baggage.Price}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </AccordionItem>
                </Accordion> */}
              </div>

              {/* Passengers Part */}
              {createPassengerForm("Adult", "adultCount").map(e => e)}
              {createPassengerForm("Child", "childCount").map(e => e)}
              {createPassengerForm("Infant", "infantCount").map(e => e)}

              <div className="flightbooking-btn-container-fb-spt">
                <button className="flightbooking-seatmap-btn-fb-spt">
                  Select Seat
                </button>
                <button
                  className="flightbooking-booking-btn-fb-spt"
                  // onClick={props.history.push("/confirmbooking")}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
      <MobFlightBooking
        className="mob-flightbooking-display-spt"
        searchFlight={searchFlight}
      />
    </div>
  );
};

export default FlightBooking;
