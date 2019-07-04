const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_SEARCH":
      return {
        ...state,
        search: action.searchResult
      };
    default:
      return state;
  }
};

export default reducer;
