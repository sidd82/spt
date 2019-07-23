import React, { useState, useEffect } from "react";
import { useStoreState } from "easy-peasy";
import moment from "moment";

// CSS Import
import "./flightbookingstyle.css";

// Component Import
import TopBar from "../Symbols/TopBar/TopBar";
import NavBar from "../Symbols/NavBar/NavBar";
import Footer from "../Symbols/Footer/Footer";

const FlightBooking = props => {
  const searchFlight = useStoreState(
    state => state.flights.flightResults[props.match.params.index]
  );
  let timeInMinute = searchFlight.Segments[0][0].Duration;
  let totalTax = searchFlight.Fare.Tax + searchFlight.Fare.OtherCharges;

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);
  });

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
                    <h3>{searchFlight.Segments[0][0].Airline.AirlineName}</h3>
                    <p>{`${searchFlight.Segments[0][0].Airline.AirlineCode}-${
                      searchFlight.Segments[0][0].Airline.FlightNumber
                    }`}</p>
                  </div>

                  {/* Departure Part */}
                  <div className="flightbooking-depart-details-fb-spt">
                    <h3>
                      {searchFlight.Segments[0][0].Origin.Airport.CityName}
                      <span>{` (${
                        searchFlight.Segments[0][0].Origin.Airport.CityCode
                      })`}</span>
                    </h3>
                    <p>
                      {moment(
                        searchFlight.Segments[0][0].Origin.DepTime
                      ).format("MMM Do YY")}
                    </p>
                    <p>
                      {moment(
                        searchFlight.Segments[0][0].Origin.DepTime
                      ).format("LT")}
                    </p>
                  </div>

                  {/* Arrival Part */}
                  <div className="flightbooking-arrival-details-fb-spt">
                    <h3>
                      {searchFlight.Segments[0][0].Destination.Airport.CityName}
                      <span>{` (${
                        searchFlight.Segments[0][0].Destination.Airport.CityCode
                      })`}</span>
                    </h3>
                    <p>
                      {moment(
                        searchFlight.Segments[0][0].Destination.ArrTime
                      ).format("MMM Do YY")}
                    </p>
                    <p>
                      {moment(
                        searchFlight.Segments[0][0].Destination.ArrTime
                      ).format("LT")}
                    </p>
                  </div>

                  {/* Refundable Part */}
                  <div className="flightbooking-refund-details-fb-spt">
                    <h3>
                      {searchFlight.IsRefundable
                        ? "Refundable"
                        : "Nonrefundable"}
                    </h3>
                    <p>Fare Rules</p>
                  </div>

                  {/* Stops Part */}
                  <div className="flightbooking-stops-details-fb-spt">
                    <h3>
                      {searchFlight.Segments[0][0].StopOver
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
            <form>
              <div className="flightbooking-passenger-mainform-fb-spt">
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

              <button onClick={paymentHandler}>Book Now</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FlightBooking;
