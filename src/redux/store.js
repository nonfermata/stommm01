import { configureStore, combineReducers } from '@reduxjs/toolkit';
import headerReducer from "./headerReducer";
import analysisReducer from "./analysisReducer";
import burgerReducer from "./burgerReducer";

const reducer = combineReducers({
    header: headerReducer,
    burger: burgerReducer,
    analysis: analysisReducer
});

const store = configureStore({ reducer });

export default store;
