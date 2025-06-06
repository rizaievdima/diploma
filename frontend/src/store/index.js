import { configureStore } from "@reduxjs/toolkit";

import hotelsSlice from "./slices/hotelsSlice";

export const store = configureStore({
    reducer: {
        hotels: hotelsSlice,
    },
});
