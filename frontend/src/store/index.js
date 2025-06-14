import { configureStore } from "@reduxjs/toolkit";

import hotelsSlice from "./slices/hotelsSlice";
import destinationsSlice from "./slices/destinationsSlice";
import filtersSlice from "./slices/filtersSlice";

export const store = configureStore({
    reducer: {
        hotels: hotelsSlice,
        destinations: destinationsSlice,
        filters: filtersSlice,
    },
});
