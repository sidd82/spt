import React from "react";

// CSS Import
import "./mobflightbookingstyle.css";

const MobPassengerBookingForm = props => {
  return (
    <div className="mob-passenger-booking-form-wrapper-spt">
      <div className="mob-passenger-booking-form-container-spt">
        <p className="mob-flightbooking-passenger-head-fb-spt">{`Passenger ${
          props.totalPassenger
        } (${props.passName})`}</p>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default MobPassengerBookingForm;
