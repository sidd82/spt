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
      <Home />
    </StateProvider>
  );
}

export default App;
