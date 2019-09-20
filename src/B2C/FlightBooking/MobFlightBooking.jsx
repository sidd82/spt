import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { MdClose } from "react-icons/md";
import { Accordion, AccordionItem } from "react-sanfona";

// CSS Import
import "./mobflightbookingstyle.css";

// Importing useStoreState From EasyPeasy To Get State;
import { useStoreState } from "easy-peasy";

// Icons Import
import { MdArrowBack, MdShare, MdInfoOutline } from "react-icons/md";

// Components Import
import MobPassengerBookingForm from "./MobPassengerBookingForm";
import FareRules from "./FareRules";

const MobFlightBooking = ({ history, searchFlight }) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);
  });

  // This Action is use to get SSR Meal Results of a Flight from Store
  // const ssrMealResults = useStoreState(
  //   state => state.flights.flightSSR.MealDynamic[0]
  // );
  // This Action is use to get SSR Baggage Results of a Flight from Store
  // const ssrBaggageResults = useStoreState(
  //   state => state.flights.flightSSR.Baggage[0]
  // );

  let timeInMinute = searchFlight.Segments[0].Duration;
  const userSearchData = useStoreState(state => state.ui.userSearchData);
  let totalTax = searchFlight.Fare.Tax + searchFlight.Fare.OtherCharges;
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
        <MobPassengerBookingForm
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

  const paymentHandler = e => {
    e.preventDefault();

    let options = {
      key: "rzp_test_2g4ouZkn05v9CF",
      amount: +searchFlight.Fare.PublishedFare * 100,
      name: "Rahul",
      description: "flight",
      handler: res => {
        alert(res.razorpay_payment_id);
      },
      prefill: {
        name: "Kartish pitale",
        email: "pitale.kartish@gmail.com"
      },
      notes: {
        address: "Hello world"
      }
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
  };
  // console.log(searchFlight);

  return (
    <div className="mob-flightbooking-wrapper-fb-spt">
      <div className="mob-flightbooking-navbar-fb-spt">
        <div className="mob-flightbooking-navtitle-fb-spt">
          <div
            className="mob-flightbooking-icon-fb-spt"
            onClick={() => history.push(`/flights`)}
          >
            <MdArrowBack color="#777777" size="1.5rem" />
          </div>
          <p>Review Your Flight</p>
        </div>
        <div className="mob-flightbooking-navshare-fb-spt">
          <MdShare color="#777777" size="1.2rem" />
        </div>
      </div>
      <div className="mob-flightbooking-mindetails-fb-spt">
        <div className="mob-flightbooking-mindepart-fb-spt">
          <h6>DEPART</h6>
          <p>
            {moment(searchFlight.Segments[0].Origin.DepTime).format(
              "ddd, D MMM"
            )}
          </p>
        </div>
        <div className="mob-flightbooking-mindestination-fb-spt">
          <h6>
            {searchFlight.Segments[0].Origin.Airport.CityCode} -{" "}
            {searchFlight.Segments[0].Destination.Airport.CityCode}
          </h6>
          <p>
            {searchFlight.Segments[0].StopOver ? "Stop Over" : "Nonstop"} |{" "}
            {Math.floor(timeInMinute / 60) + "h " + (timeInMinute % 60) + "m"}
          </p>
        </div>
      </div>
      <div className="mob-flightbooking-maindetails-fb-spt">
        <div className="mob-flightbooking-flightdetails-fb-spt">
          <p>
            {searchFlight.Segments[0].Airline.AirlineName}
            {"  "}
            <span>{`${searchFlight.Segments[0].Airline.AirlineCode}-${searchFlight.Segments[0].Airline.FlightNumber}`}</span>
          </p>
        </div>
        <div className="mob-flightbooking-traveldetails-fb-spt">
          <div className="mob-flightbooking-departdetails-fb-spt">
            <h5>
              {moment(searchFlight.Segments[0].Origin.DepTime).format("LT")}
            </h5>
            <h6>
              {moment(searchFlight.Segments[0].Origin.DepTime).format(
                "ddd, D MMM YY"
              )}
            </h6>
            <p>{searchFlight.Segments[0].Origin.Airport.CityName}</p>
          </div>
          <div className="mob-flightbooking-gapdetails-fb-spt">
            <h6>
              {Math.floor(timeInMinute / 60) + "h " + (timeInMinute % 60) + "m"}
            </h6>
            <hr />
            <p onClick={modalOpen}>Fare Rules</p>
            <div
              className={classnames("flightbooking-modal-wrapper-spt", {
                "flightbooking-modal-display-spt": isFareRuleModal
              })}
            >
              <div className="flightbooking-modal-container-spt">
                <MdClose
                  size="1.5rem"
                  color="#707070"
                  className="fb-close-modal-spt"
                  onClick={modalClose}
                />
                <FareRules />
              </div>
            </div>
          </div>
          <div className="mob-flightbooking-arrivaldetails-fb-spt">
            <h5>
              {moment(searchFlight.Segments[0].Destination.DepTime).format(
                "LT"
              )}
            </h5>
            <h6>
              {moment(searchFlight.Segments[0].Destination.DepTime).format(
                "ddd, D MMM YY"
              )}
            </h6>
            <p>{searchFlight.Segments[0].Destination.Airport.CityName}</p>
          </div>
        </div>
      </div>

      <div className="mob-flightbooking-form-wrapper-spt">
        <form className="mob-flightbooking-form-container-spt">
          {/* Itinerary Part */}
          <p className="mob-flightbooking-passenger-head-fb-spt">
            Passenger 1 (Adult)
          </p>
          <div className="mob-flightbooking-passenger-mainform-fb-spt">
            <div className="mob-flightbooking-pass-formwrap-fb-spt">
              <div className="mob-flightbooking-pass-name-fb-spt">
                <p>Full Name</p>
                <input type="text" />
              </div>

              <div className="mob-flightbooking-pass-mobile-fb-spt">
                <p>Mobile</p>
                <input type="text" />
              </div>

              <div className="mob-flightbooking-pass-email-fb-spt">
                <p>Email</p>
                <input type="email" />
              </div>

              <div className="mob-flightbooking-pass-dob-fb-spt">
                <p>Date of Birth</p>
                <div className="mob-dob-details-fb-spt">
                  <input type="text" placeholder="Date" />
                  <input type="text" placeholder="Month" />
                  <input type="text" placeholder="Year" />
                </div>
              </div>
            </div>
            <div className="mob-flightbooking-pass-formwrap-fb-spt">
              <div className="mob-flightbooking-pass-address-fb-spt">
                <p>Address (Line 1)</p>
                <input type="text" />
              </div>

              <div className="mob-flightbooking-pass-address-fb-spt">
                <p>Address (Line 2)</p>
                <input type="text" />
              </div>

              <div className="mob-flightbooking-pass-city-fb-spt">
                <p>City</p>
                <input type="text" />
              </div>

              <div className="mob-flightbooking-pass-postal-fb-spt">
                <div className="mob-country-details-fb-spt">
                  <p>Country</p>
                  <input type="text" />
                </div>
                <div className="mob-postal-details-fb-spt">
                  <p>Postal Code</p>
                  <input type="text" />
                </div>
              </div>
            </div>
            {/* <Accordion className="mob-flightbooking-meal-baggage-wrapper-fb-spt">
              <AccordionItem
                title="+ Meal / Excess Baggage For Passenger 1"
                titleClassName="mob-flightbooking-meal-baggage-title-fb-spt"
              >
                <div className="mob-flightbooking-meal-baggage-body-fb-spt">
                  <div className="mob-flightbooking-meal-select-fb-spt">
                    <p>
                      {searchFlight.Segments[0][0].Origin.Airport.CityCode} -{" "}
                      {searchFlight.Segments[0][0].Destination.Airport.CityCode}
                    </p>
                    <select name="classtype">
                      {ssrMealResults.map(meal => (
                        <option value={meal.Code}>
                          Qty {meal.Quantity} | {meal.Code} | {meal.Price}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mob-flightbooking-baggage-select-fb-spt">
                    <p>
                      {searchFlight.Segments[0][0].Origin.Airport.CityCode} -{" "}
                      {searchFlight.Segments[0][0].Destination.Airport.CityCode}
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
        </form>

        {/* Passengers Part */}
        {createPassengerForm("Adult", "adultCount").map(e => e)}
        {createPassengerForm("Child", "childCount").map(e => e)}
        {createPassengerForm("Infant", "infantCount").map(e => e)}
      </div>

      <div className="mob-flightbooking-pricesticky-spt">
        <div className="mob-flightbooking-pricedetails-spt">
          <div className="mob-flightbooking-price-spt">
            <h6>
              {`₹ ${Math.round(searchFlight.Fare.PublishedFare)} `}
              <span className="mob-flightbooking-info-spt">
                <MdInfoOutline color="#ffffff" size="1rem" />
              </span>
            </h6>
            <p>
              For {count} {count === 1 ? "Adult" : "Travellers"}
            </p>
          </div>
          <div
            className="mob-flightbooking-bookbtn-spt"
            onClick={paymentHandler}
          >
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MobFlightBooking);
