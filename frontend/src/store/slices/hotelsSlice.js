import { createSlice } from "@reduxjs/toolkit";
import { fetchHotels, searchHotels } from "../thunks/hotelsThunk";

const initialState = {
    hotels: [],
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
            .addCase(fetchHotels.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(fetchHotels.fulfilled, (state, action) => {
                state.isLoading = false;

                state.hotels = action.payload.hotels;
                state.total = action.payload.total;
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

                state.hotels = action.payload.hotels;
                state.total = action.payload.total;
            })
            .addCase(searchHotels.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default hotelsSlice.reducer;
