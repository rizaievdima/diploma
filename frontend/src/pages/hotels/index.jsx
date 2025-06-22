import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, Input, Row, Col } from "antd";

import { searchHotels } from "../../store/thunks/hotelsThunk.js";
import { setSelectedCity, setSearchQuery } from "../../store/slices/filtersSlice.js";
import useDebounce from "../../hooks/useDebounce.js";

import HotelCard from "./components/HotelCard.jsx";

import styles from "./hotels.module.css";

const { Option } = Select;

const Hotels = () => {
    const { destinations, error, loading } = useSelector((state) => state.destinations);
    const {
        hotels,
        error: hotelsError,
        loading: hotelsLoading,
    } = useSelector((state) => state.hotels);
    const { selectedCity, searchQuery } = useSelector((state) => state.filters);

    const dispatch = useDispatch();
    const debouncedQuery = useDebounce(searchQuery);

    useEffect(() => {
        if (selectedCity) {
            dispatch(searchHotels({ destinationId: selectedCity, query: debouncedQuery }));
        }
    }, [selectedCity, debouncedQuery]);

    const handleCityChange = (value) => {
        dispatch(setSelectedCity(value));
    };

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.controls}>
                <Select
                    placeholder="Choose the city"
                    value={selectedCity}
                    onChange={(value) => handleCityChange(value)}
                >
                    {destinations?.map((city) => (
                        <Option key={city.id} value={city.id}>
                            {city.label}
                        </Option>
                    ))}
                </Select>

                <Input
                    placeholder="Search by name, transaction id, email..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e)}
                />
            </div>

            {loading && hotelsLoading && <div>Loading....</div>}

            <Row gutter={[36, 36]}>
                {hotels?.map((hotel) => (
                    <Col span={8}>
                        <HotelCard
                            key={hotel.id}
                            id={hotel.id}
                            name={hotel.name}
                            address={hotel.address}
                            city={hotel.city}
                            imageUrl={hotel.imageUrl}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Hotels;
