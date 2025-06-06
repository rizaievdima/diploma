import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:4000";

export const fetchHotels = createAsyncThunk(
    "hotels/fetchHotels",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/hotels`);

            if (!response.ok) {
                throw new Error("Failed to fetch hotels!");
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
