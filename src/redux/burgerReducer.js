import { createSlice } from "@reduxjs/toolkit";

const burgerSlice = createSlice({
    name: "burger",
    initialState: { isActive: false },
    reducers: {
        toggle(state) {
            state.isActive = !state.isActive;

        }
    }
});

const { toggle } = burgerSlice.actions;
const burgerReducer = burgerSlice.reducer;

export const toggleBurger = () => toggle();
export const getBurger = () => (state) => state.burger.isActive;

export default burgerReducer;
