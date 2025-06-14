import { createSlice } from "@reduxjs/toolkit";

const destinationsSlice = createSlice({
    name: "filters",
    initialState: {
        selectedCity: null,
        searchQuery: "",
    },
    reducers: {
        setSelectedCity: (state, action) => {
            state.selectedCity = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { setSelectedCity, setSearchQuery } = destinationsSlice.actions;

export default destinationsSlice.reducer;
