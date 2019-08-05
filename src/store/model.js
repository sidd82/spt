import { thunk, action } from "easy-peasy";
import axios from "axios";
import { URI } from "../config/serverProxy";

const flightsModel = {
  // This Result Will Not Changed Once Set. Will Used For Filtring.
  flightResultMain: [],
  // Will Be Used On FrontEnd To Show To User.
  flightResults: [],
  // This is use to store fare rules of flights.
  flightFarerules: [],
  // This is use to store fare quote of flights.
  flightFarequote: {},
  // This is use to store SSR of flights.
  flightSSR: {},
  // This is use to store isPriceChanged of flights.
  isPriceChanged: null,
  // Trace Id For Booking
  traceId: "",

  // The Thunk Function To Get Flight Data
  getFlights: thunk(async (actions, payload, { getStoreActions }) => {
    const response = await axios.post(
      `${URI}/api/search`,
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

  // The Thunk Function To Get Flight Fare Rules Data
  getFlightsFareRules: thunk(async (actions, payload) => {
    const response = await axios.post(
      `${URI}/api/farerules`,
      payload.flightRules
    );
    // Firing A Action After Getting Data
    actions.addFlightsFareRules(response.data.Response.FareRules[0]);
  }),

  // The Thunk Function To Get Flight Fare Quote Data
  getFlightsFareQuote: thunk(async (actions, payload, { getStoreActions }) => {
    const response = await axios.post(
      `${URI}/api/farequote`,
      payload.flightQuote
    );
    // Firing A Action After Getting Data
    actions.addFlightsFareQuote(response.data.Response.Results);
    // Fiering A Set IsPriceChanged Action
    actions.addIsPriceChanged(response.data.Response.IsPriceChanged);
    getStoreActions().flights.getSRR(payload);
  }),

  // The Thunk Function To Get Flight Fare Rules Data
  getSRR: thunk(async (actions, payload, { getStoreActions }) => {
    const response = await axios.post(`${URI}/api/ssr`, payload.flightSSR);
    // Firing A Action After Getting Data
    actions.addSRR(response.data.Response);
    payload.history.push(`bookflight/${payload.index}`);
    getStoreActions().ui.toggleIsLoading(false);
  }),

  addFlights: action((state, payload) => {
    // Setting Main Flight State
    state.flightResultMain = payload;
    // Setting State For Flight Filterization
    state.flightResults = payload;
  }),

  addFlightsFareRules: action((state, payload) => {
    // Setting Flight Fare Rules State
    state.flightFarerules = payload;
  }),

  addFlightsFareQuote: action((state, payload) => {
    // Setting Flight Fare Quote State
    state.flightFarequote = payload;
  }),

  addSRR: action((state, payload) => {
    // Setting Flight SSR
    state.flightSSR = payload;
  }),

  addIsPriceChanged: action((state, payload) => {
    state.isPriceChanged = payload;
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
