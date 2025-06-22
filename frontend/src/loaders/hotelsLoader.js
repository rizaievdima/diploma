import { store } from "../store";
import { getDestinations } from "../store/thunks/destinationsThunk";
import { fetchHotels } from "../store/thunks/hotelsThunk";

export async function hotelsLoader() {
    await store.dispatch(getDestinations());
    // await store.dispatch(fetchHotels());
    return null;
}
