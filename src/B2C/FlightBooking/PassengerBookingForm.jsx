import React from "react";

// CSS Import
import "./flightbookingstyle.css";

const PassengerBookingForm = props => {
  return (
    <div className="passenger-booking-form-wrapper-spt">
      <p className="flightbooking-passenger-head-fb-spt">{`Passenger ${
        props.totalPassenger
      } (${props.passName})`}</p>
      <form>
        <div className="passenger-passengerbooking-mainform-fb-spt">
          <div className="flightbooking-pass-formwrap-fb-spt">
            <div className="flightbooking-pass-name-fb-spt">
              <p>Full Name</p>
              <input type="text" />
            </div>
          </div>
          <div className="flightbooking-pass-formwrap-fb-spt">
            <div className="flightbooking-pass-dob-fb-spt">
              <p>Date of Birth</p>
              <div className="dob-details-fb-spt">
                <input type="text" placeholder="Date" />
                <input type="text" placeholder="Month" />
                <input type="text" placeholder="Year" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PassengerBookingForm;
