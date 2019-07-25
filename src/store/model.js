import { thunk, action } from "easy-peasy";
import axios from "axios";

const flightsModel = {
  // This Result Will Not Changed Once Set. Will Used For Filtring.
  flightResultMain: [],
  // Will Be Used On FrontEnd To Show To User.
  flightResults: [],
  // Trace Id For Booking
  traceId: "",
  // The Thunk Function To Get Flight Data
  getFlights: thunk(async (actions, payload, { getStoreActions }) => {
    const response = await axios.post(
      "https://savepertrip.in/api/search",
      payload.flightRequest
    );
    // Firing A Action After Getting Data
    actions.addFlights(response.data.Response.Results[0]);
    // Fiering A Set TraceId Action
    actions.addTraceId(response.data.Response.TraceId);
    // Pushing To Flights Screen
    payload.history.push("/flights");
    getStoreActions().ui.toggleIsLoading(false);
  }),
  addFlights: action((state, payload) => {
    // Setting Main Flight State
    state.flightResultMain = payload;
    // Setting State For Flight Filterization
    state.flightResults = payload;
  }),
  addTraceId: action((state, payload) => {
    state.traceId = payload;
  })
};

const uiModel = {
  isLoading: false,
  userSearchData: {},
  toggleIsLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  addUserSearchData: action((state, payload) => {
    state.userSearchData = payload;
  })
};

const model = {
  flights: flightsModel,
  ui: uiModel
};

export default model;
