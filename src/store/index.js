import { combineReducers, createStore } from "redux";
import { formReducer } from "./form/reducer";
import { hotelsReducer } from "./pageHotels/reducer";

const rootReducer = combineReducers({
  form: formReducer,
  hotels: hotelsReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
