import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: "header",
    initialState: { isOpaque: false },
    reducers: {
        setOpaque(state) {
            if (!state.isOpaque) {
                state.isOpaque = true;
            }
        }
    }
});

const { setOpaque } = headerSlice.actions;
export const headerReducer = headerSlice.reducer;
export const setHeaderOpaque = () => setOpaque();
export const getHeaderOpacity = () => (state) => state.header.isOpaque;

export default headerReducer;
