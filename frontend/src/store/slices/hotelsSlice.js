import { createSlice } from "@reduxjs/toolkit";
import { fetchHotels, searchHotels } from "../thunks/hotelsThunk";

const initialState = {
    hotels: [],
    isLoading: false,
    error: "",
};

const hotelsSlice = createSlice({
    name: "hotels",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHotels.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(fetchHotels.fulfilled, (state, action) => {
                state.isLoading = false;

                state.hotels = action.payload;
            })
            .addCase(fetchHotels.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(searchHotels.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(searchHotels.fulfilled, (state, action) => {
                state.isLoading = false;

                state.hotels = action.payload;
            })
            .addCase(searchHotels.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default hotelsSlice.reducer;
