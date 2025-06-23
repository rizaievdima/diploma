import { store } from "../store";
import { getDestinations } from "../store/thunks/destinationsThunk";

const API_URL = "http://localhost:4000";

export async function hotelsLoader() {
    await store.dispatch(getDestinations());

    return null;
}

export async function hotelLoader({ params }) {
    try {
        const res = await fetch(`${API_URL}/hotels/${params.id}`);

        if (!res.ok) {
            throw new Error("Cannot get course!");
        }
        const data = await res.json();

        return data;
    } catch (e) {
        return e.message;
    }
}
