import React, { useState } from "react";
import classnames from "classnames";
import { MdCompareArrows, MdRemoveCircle, MdAddCircle } from "react-icons/md";

// CSS Import
import "./searchagainformstyle.css";

const SearchAgainForm = () => {
  const [isModifyOpen, setIsModifyOpen] = useState(false);

  const moreOption = () => {
    let isModifyOpenState = !isModifyOpen;
    setIsModifyOpen(isModifyOpenState);
  };

  return (
    <div className="search-form-wrapper-spt">
      <form>
        <div className="search-form-container-spt">
          <div className="type-modify-search-spt">
            <div className="select-type-spt">
              <p>TRIP TYPE</p>
              <select name="type">
                <option value="all">Select Type</option>
                <option value="OneWay">One Way</option>
                <option value="Return">Return</option>
                <option value="MultiStop">Multi Stop</option>
                <option value="Advance">Advance</option>
                <option value="SpecialReturn">Special Return</option>
              </select>
            </div>
          </div>
          <div className="departurefrom-modify-search-spt">
            <p>FROM</p>
            <input
              type="text"
              placeholder="From"
              // onChange={e => setOrigin(e.target.value)}
            />
          </div>
          <div className="destinationicon-wrapper-spt">
            <MdCompareArrows size="1.8rem" color="#484848" />
          </div>
          <div className="arrivalto-modify-search-spt">
            <p>TO</p>
            <input
              type="text"
              placeholder="To"
              // onChange={e => setOrigin(e.target.value)}
            />
          </div>
          <div className="departuredt-modify-search-spt">
            <p>DEPART</p>
            <input
              type="date"
              // onChange={handleDeparture}
              data-placeholder="Departure Date"
            />
          </div>
          <div className="arrivaldt-modify-search-spt">
            <p>RETURN</p>
            <input
              type="date"
              // onChange={handleDeparture}
              data-placeholder="Departure Date"
            />
          </div>
          <div className="passenger-modify-search-spt">
            <p>PASSENGER & CLASS</p>
            <div className="passengercount">
              <p onClick={moreOption}>PASSENGER & CLASS</p>
              <div
                className={classnames("passengercountdisplay-spt", {
                  "passengercountwrapper-spt": isModifyOpen
                })}
              >
                <div className="passengercountcontainer-spt">
                  <div className="passengercountlist1">
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
                    <div className="adult-count-spt">
                      <MdRemoveCircle
                        size="1.2rem"
                        color="#484848"
                        // onClick={() => setAdult(adult - 1)}
                      />
                      <p>
                        Adult <span className="adultcounter-spt">0</span>
                      </p>
                      <MdAddCircle
                        size="1.2rem"
                        color="#484848"
                        // onClick={() => setAdult(adult + 1)}
                      />
                    </div>
                  </div>
                  <div className="passengercountlist2">
                    <div className="children-count-spt">
                      <MdRemoveCircle
                        size="1.2rem"
                        color="#484848"
                        // onClick={() => setAdult(adult - 1)}
                      />
                      <p>
                        Children <span className="childrencounter-spt">0</span>
                      </p>
                      <MdAddCircle
                        size="1.2rem"
                        color="#484848"
                        // onClick={() => setAdult(adult + 1)}
                      />
                    </div>
                    <div className="infant-count-spt">
                      <MdRemoveCircle
                        size="1.2rem"
                        color="#484848"
                        // onClick={() => setAdult(adult - 1)}
                      />
                      <p>
                        Infant <span className="infantcounter-spt">0</span>
                      </p>
                      <MdAddCircle
                        size="1.2rem"
                        color="#484848"
                        // onClick={() => setAdult(adult + 1)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="submit-modify-search-spt">
            <input type="submit" value="SUBMIT" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchAgainForm;
