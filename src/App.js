import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Initial Store & Reducer
import initialState from "./context/store";
import searchReducer from "./context/reducer/searchReducer";

// Context Provider
import { StateProvider } from "./context/context";

// Component Import
import Home from "./B2C/Home/Home";
import UnderConstruction from "./B2C/Construction/UnderConstruction";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={searchReducer}>
      <Router>
        <Route exact path="/" component={UnderConstruction} />
        <Route path="/home" component={Home} />
      </Router>
    </StateProvider>
  );
}

export default App;
