import { store } from "../store";
import { getDestinations } from "../store/thunks/destinationsThunk";

export async function hotelsLoader() {
    await store.dispatch(getDestinations());
    return null;
}
