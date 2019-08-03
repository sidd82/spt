import React from "react";

// CSS Import
import "./flightbookingstyle.css";

// Importing useStoreState From EasyPeasy To Get State;
import { useStoreState } from "easy-peasy";

const FareRules = () => {
  const fareRules = useStoreState(state => state.flights.flightFarerules);

  const htmlFarerules = () => {
    return { __html: fareRules.FareRuleDetail };
  };
  return (
    <div className="fb-modal-wrapper-spt">
      <h5 className="fb-modal-fareruletitle-spt">
        {fareRules.Origin} - {fareRules.Destination}
      </h5>
      <div
        dangerouslySetInnerHTML={htmlFarerules()}
        className="fb-modal-fareruledetails-spt"
      />
    </div>
  );
};

export default FareRules;
