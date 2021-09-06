const initState = {
  loading: false,
  isDatafetched: false,
  data: {},
  error: "",
};
const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_WEATHER_SUCCESS":
      return {
        ...state,
        loading: false,
        isDatafetched: true,
        data: action.payload,
      };
    case "FETCH_WEATHER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export { weatherReducer };
