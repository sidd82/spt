import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Initial Store & Reducer
import initialState from "./context/store";
import searchReducer from "./context/reducer/searchReducer";

// Context Provider
import { StateProvider } from "./context/context";

// Component Import
import Home from "./B2C/Home/Home";
import UnderConstruction from "./B2C/Construction/UnderConstruction";
import FlightResults from "./B2C/FlightResults/FlightResults";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={searchReducer}>
      <Router>
        <Route exact path="/" component={UnderConstruction} />
        <Route path="/home" component={Home} />
        <Route path="/flights" component={FlightResults} />
      </Router>
    </StateProvider>
  );
}

export default App;
