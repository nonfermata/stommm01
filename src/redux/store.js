import { combineReducers, createStore } from "redux";
import isFullHeaderReducer from "./isFullHeaderReducer";
import visibleCompReducer from "./visibleCompReducer";
import analysisPricesReducer from "./analysisPricesReducer";
import isBurgerActiveReducer from "./isBurgerActiveReducer";

const reducers = combineReducers({
    isFullHeader: isFullHeaderReducer,
    visibleComp: visibleCompReducer,
    analysisPrices: analysisPricesReducer,
    isBurgerActive: isBurgerActiveReducer
});

const store = createStore(reducers);

export default store;
