import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:4000";

export const searchHotels = createAsyncThunk(
    "hotels/searchHotels",
    async ({ destinationId = "", query = "", page = 1, pageSize = 9 }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}/search`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ destinationId, query, page, pageSize }),
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

export const fetchFeaturedHotels = createAsyncThunk(
    "hotels/fetchFeaturedHotels",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}/featured`);
            console.log(res);

            if (!res.ok) {
                throw new Error("Failed to fetch featured hotels!");
            }

            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
