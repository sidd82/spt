import React from "react";
import { MdCompareArrows, MdAddCircle, MdRemoveCircle } from "react-icons/md";
import advertise from "../../../static/adam_taylor_emirates_dubai_mall.png";

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
          <div className="class-wrapper-spt">
            <div className="select-class-spt">
              <select name="classtype">
                <option value="all">All Class</option>
                <option value="economy">Economy</option>
                <option value="premiumeconomy">PremiumEconomy</option>
                <option value="business">Business</option>
                <option value="premiumbusiness">PremiumBusiness</option>
                <option value="first">First</option>
              </select>
            </div>
            <div className="departure-date-spt">
              <input type="date" />
            </div>
          </div>
          <div className="person-wrapper-spt">
            <div className="adult-count-spt">
              <MdRemoveCircle size="1.2rem" color="#484848" />
              <p>
                Adult <span className="adultcounter-spt">0</span>
              </p>
              <MdAddCircle size="1.2rem" color="#484848" />
            </div>
            <div className="children-count-spt">
              <MdRemoveCircle size="1.2rem" color="#484848" />
              <p>
                Children <span className="childrencounter-spt">0</span>
              </p>
              <MdAddCircle size="1.2rem" color="#484848" />
            </div>
            <div className="infant-count-spt">
              <MdRemoveCircle size="1.2rem" color="#484848" />
              <p>
                Infant <span className="infantcounter-spt">0</span>
              </p>
              <MdAddCircle size="1.2rem" color="#484848" />
            </div>
          </div>
          <div className="submit-wrapper-spt">
            <input type="button" class="submit-btn-spt" value="Submit" />
            <input
              type="button"
              class="directflight-btn-spt"
              value="Direct Flight"
            />
          </div>
        </div>
        <div className="advertise-wrapper-spt">
          <div className="image-wrapper-spt">
            <img src={advertise} alt="advertise" width="400px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainArea;
