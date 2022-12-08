import { combineReducers, createStore } from "redux";
import isFullHeaderReducer from "./isFullHeaderReducer";

const reducers = combineReducers({
    isFullHeader: isFullHeaderReducer
});

const store = createStore(reducers);

export default store;
