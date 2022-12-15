import { combineReducers, createStore } from "redux";
import isFullHeaderReducer from "./isFullHeaderReducer";
import visibleCompReducer from "./visibleCompReducer";
import pricelistReducer from "./pricelistReducer";
import isBurgerActiveReducer from "./isBurgerActiveReducer";

const reducers = combineReducers({
    isFullHeader: isFullHeaderReducer,
    visibleComp: visibleCompReducer,
    pricelist: pricelistReducer,
    isBurgerActive: isBurgerActiveReducer
});

const store = createStore(reducers);

export default store;
