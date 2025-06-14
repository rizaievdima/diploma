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
export const searchHotels = createAsyncThunk(
    "hotels/searchHotels",
    async ({ destinationId, query }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}/search`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ destinationId, query }),
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.message || "Failed to search hotels!");
            }

            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
