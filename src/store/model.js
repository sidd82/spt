import { thunk, action } from "easy-peasy";
import axios from "axios";

const flightsModel = {
  // This Result Will Not Changed Once Set. Will Used For Filtring.
  flightResultMain: [],
  // Will Be Used On FrontEnd To Show To User.
  flightResults: [],
  // The Thunk Function To Get Flight Data
  getFlights: thunk(async (actions, payload) => {
    const response = await axios.post(
      "https://savepertrip.in/api/search",
      payload.flightRequest
    );
    // Firing A Action After Getting Data
    actions.addFlights(response.data.Response.Results[0]);
    // Pushing To Flights Screen
    payload.history.push("/flights");
  }),
  addFlights: action((state, payload) => {
    // Setting Main Flight State
    state.flightResultMain = payload;
    // Setting State For Flight Filterization
    state.flightResults = payload;
  })
};

const model = {
  flights: flightsModel
};

export default model;
