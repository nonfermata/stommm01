import analysisPrices from "../app/data/analysisPrices";
import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("mylist")
    ? JSON.parse(localStorage.getItem("mylist"))
    : analysisPrices;

const analysisSlice = createSlice({
    name: "analysis",
    initialState,
    reducers: {
        toggleAnalysis(state, action) {
            state = state.map((cat) => ({
                ...cat,
                value: cat.value.map((subcat) => ({
                    ...subcat,
                    value: subcat.value.map((item) => {
                        if (item._id === action.payload.id) {
                            item.isAdded = !item.isAdded;
                        }
                        return item;
                    })
                }))
            }));
            localStorage.setItem("mylist", JSON.stringify(state));
        },
        toggleCategoryView(state, action) {
            state = state.map((cat) => {
                if (cat._id === action.payload.id) {
                    cat.isOpen = !cat.isOpen;
                }
                return cat;
            });
            localStorage.setItem("mylist", JSON.stringify(state));
        }
    }
});

const { toggleAnalysis, toggleCategoryView } = analysisSlice.actions;
const analysisReducer = analysisSlice.reducer;

export const toggleAddedAnalysis = (id) => toggleAnalysis({ id });
export const toggleOpenedCategory = (id) => toggleCategoryView({ id });

export const getAnalysis = () => (state) => state.analysis;

export default analysisReducer;
