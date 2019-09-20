import React from "react";
import { Accordion, AccordionItem } from "react-sanfona";

// Importing useStoreState From EasyPeasy To Get State;
import { useStoreState } from "easy-peasy";

// CSS Import
import "./mobflightbookingstyle.css";

const MobPassengerBookingForm = props => {
  // This Action is use to get SSR Meal Results of a Flight from Store
  // const ssrMealResults = useStoreState(
  //   state => state.flights.flightSSR.MealDynamic[0]
  // );
  // This Action is use to get SSR Baggage Results of a Flight from Store
  // const ssrBaggageResults = useStoreState(
  //   state => state.flights.flightSSR.Baggage[0]
  // );

  return (
    <div className="mob-passenger-booking-form-wrapper-spt">
      <div className="mob-passenger-booking-form-container-spt">
        <p className="mob-flightbooking-passenger-head-fb-spt">{`Passenger ${props.totalPassenger} (${props.passName})`}</p>
        <form>
          <div className="mob-passenger-passengerbooking-mainform-fb-spt">
            <div className="mob-flightbooking-pass-formwrap-fb-spt">
              <div className="mob-flightbooking-pass-name-fb-spt">
                <p>Full Name</p>
                <input type="text" />
              </div>
            </div>
            <div className="mob-flightbooking-pass-formwrap-fb-spt">
              <div className="mob-flightbooking-pass-dob-fb-spt">
                <p>Date of Birth</p>
                <div className="mob-dob-details-fb-spt">
                  <input type="text" placeholder="Date" />
                  <input type="text" placeholder="Month" />
                  <input type="text" placeholder="Year" />
                </div>
              </div>
            </div>
            {/* <Accordion className="mob-flightbooking-meal-baggage-wrapper-fb-spt">
              <AccordionItem
                title={`+ Meal / Excess Baggage For Passenger ${
                  props.totalPassenger
                }`}
                titleClassName="mob-flightbooking-meal-baggage-title-fb-spt"
                easing="ease"
              >
                <div className="mob-flightbooking-meal-baggage-body-fb-spt">
                  <div className="mob-flightbooking-meal-select-fb-spt">
                    <p>
                      {props.flight.Segments[0][0].Origin.Airport.CityCode} -{" "}
                      {props.flight.Segments[0][0].Destination.Airport.CityCode}
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
                      {props.flight.Segments[0][0].Origin.Airport.CityCode} -{" "}
                      {props.flight.Segments[0][0].Destination.Airport.CityCode}
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
      </div>
    </div>
  );
};

export default MobPassengerBookingForm;
