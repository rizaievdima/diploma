import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchHotels } from "../../store/thunks/hotelsThunk";

import styles from "./hotels.module.css";

const Hotels = () => {
    const { hotels, isLoading, error } = useSelector((state) => state.hotels);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHotels());
    }, [dispatch]);

    return (
        <div>
            <h1>Hotels</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {hotels.length > 0 && (
                <ul className={styles["hotels-list"]}>
                    {hotels.map((hotel) => (
                        <li key={hotel.id} className={styles["hotels-list-item"]}>
                            {hotel.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Hotels;
