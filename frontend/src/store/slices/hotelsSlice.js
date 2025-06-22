import { createSlice } from "@reduxjs/toolkit";
import { searchHotels, fetchFeaturedHotels } from "../thunks/hotelsThunk";

const initialState = {
    hotels: [],
    featuredHotels: [],
    total: 0,
    isLoading: false,
    error: "",
};

const hotelsSlice = createSlice({
    name: "hotels",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchHotels.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(searchHotels.fulfilled, (state, action) => {
                state.isLoading = false;

                state.hotels = action.payload.hotels;
                state.total = action.payload.total;
            })
            .addCase(searchHotels.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchFeaturedHotels.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(fetchFeaturedHotels.fulfilled, (state, action) => {
                state.isLoading = false;

                state.featuredHotels = action.payload;
            })
            .addCase(fetchFeaturedHotels.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default hotelsSlice.reducer;
