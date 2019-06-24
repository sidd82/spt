import React from "react";
import { MdCompareArrows } from "react-icons/md";

// Style Import
import "./mainareastyle.css";

const MainArea = () => {
  return (
    <div className="mainarea-wrapper-spt">
      <div className="mainarea-spt">
        <div className="form-wrapper-spt">
          <div className="formtitle-wrapper-spt">
            <h1>Save on Flights</h1>
            <p>Honest Pricing. Genuine Savings.</p>
            <hr />
          </div>
          <div className="journeytype-wrapper-spt">
            <label className="container-spt">
              OneWay
              <input type="radio" name="radio" value="One Way" />
              <span className="checkmark" />
            </label>
            <label className="container-spt">
              Return
              <input type="radio" name="radio" value="Return" />
              <span className="checkmark" />
            </label>
            <label className="container-spt">
              MultiStop
              <input type="radio" name="radio" value="Multi Stop" />
              <span className="checkmark" />
            </label>
            <label className="container-spt">
              Advance
              <input type="radio" name="radio" value="Advance" />
              <span className="checkmark" />
            </label>
            <label className="container-spt">
              SpecialReturn
              <input type="radio" name="radio" value="Special Return" />
              <span className="checkmark" />
            </label>
          </div>
          <div className="destination-wrapper-spt">
            <div className="departure-wrapper-spt">
              <input type="text" placeholder="From" />
            </div>
            <div className="destinationicon-wrapper-spt">
              <MdCompareArrows size="2rem" />
            </div>
            <div className="arrival-wrapper-spt">
              <input type="text" placeholder="To" />
            </div>
          </div>
          <div className="class-wrapper-spt">4</div>
          <div className="person-wrapper-spt">5</div>
          <div className="submit-wrapper-spt">6</div>
        </div>
        <div className="advertise-wrapper-spt">2</div>
      </div>
    </div>
  );
};

export default MainArea;
