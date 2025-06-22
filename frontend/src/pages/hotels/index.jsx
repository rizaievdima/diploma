import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, Input, Row, Col, Pagination } from "antd";

import { fetchHotels, searchHotels } from "../../store/thunks/hotelsThunk.js";
import { setSelectedCity, setSearchQuery } from "../../store/slices/filtersSlice.js";
import useDebounce from "../../hooks/useDebounce.js";

import HotelCard from "./components/HotelCard.jsx";

import styles from "./hotels.module.css";

const { Option } = Select;

const Hotels = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);

    const { destinations, error, loading } = useSelector((state) => state.destinations);
    const {
        hotels,
        total,
        error: hotelsError,
        loading: hotelsLoading,
    } = useSelector((state) => state.hotels);
    const { selectedCity, searchQuery } = useSelector((state) => state.filters);

    const dispatch = useDispatch();
    const debouncedQuery = useDebounce(searchQuery);
    // useEffect(() => {
    //     dispatch(fetchHotels());
    // }, []);

    useEffect(() => {
        dispatch(
            searchHotels({ destinationId: selectedCity, query: debouncedQuery, page, pageSize })
        );
        console.log("searchHotels");
    }, [selectedCity, debouncedQuery, page]);

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
                    <Col key={hotel.id} span={8}>
                        <HotelCard
                            id={hotel.id}
                            name={hotel.name}
                            address={hotel.address}
                            city={hotel.city}
                            imageUrl={hotel.imageUrl}
                        />
                    </Col>
                ))}
            </Row>
            <Pagination
                align="center"
                showSizeChanger={false}
                style={{ marginTop: "35px" }}
                current={page}
                pageSize={pageSize}
                total={total}
                onChange={(page) => setPage(page)}
            />
        </div>
    );
};

export default Hotels;
