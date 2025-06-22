import { createSlice } from "@reduxjs/toolkit";

import { getSelectedKey } from "../../helpers/additionalFanctions";

const initialState = {
    currentPage: getSelectedKey(window.location.pathname),
};
console.log(initialState.currentPage);
const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const { setCurrentPage } = globalSlice.actions;
export default globalSlice.reducer;
