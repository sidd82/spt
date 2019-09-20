import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Component Import
import Home from "./B2C/Home/Home";
import UnderConstruction from "./B2C/Construction/UnderConstruction";
import FlightResults from "./B2C/FlightResults/FlightResults";
import FlightBooking from "./B2C/FlightBooking/FlightBooking";
import FlightConfirmation from "./B2C/FlightBooking/FlightConfirmation";

function App() {
  return (
    <Router>
      <Route exact path="/" component={UnderConstruction} />
      <Route path="/home" component={Home} />
      <Route path="/flights" component={FlightResults} />
      <Route path="/bookflight/:index" component={FlightBooking} />
      <Route path="/confirmbooking" component={FlightConfirmation} />
    </Router>
  );
}

export default App;
