import React from "react";

// Initial Store & Reducer
import initialState from "./context/store";
import searchReducer from "./context/reducer/searchReducer";

// Context Provider
import { StateProvider } from "./context/context";

// Component Import
import Home from "./B2C/Home/Home";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={searchReducer}>
      <div className="construction">
        <h1>This site is in under construction</h1>
      </div>
    </StateProvider>
  );
}

export default App;
