import { applyMiddleware, createStore } from "redux";
import { weatherReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const store = createStore(
  weatherReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
