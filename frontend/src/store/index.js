import { configureStore } from "@reduxjs/toolkit";

import globalSlice from "./slices/globalSlice";
import hotelsSlice from "./slices/hotelsSlice";
import destinationsSlice from "./slices/destinationsSlice";
import filtersSlice from "./slices/filtersSlice";

export const store = configureStore({
    reducer: {
        global: globalSlice,
        hotels: hotelsSlice,
        destinations: destinationsSlice,
        filters: filtersSlice,
    },
});
