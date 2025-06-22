import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, Input, Row, Col, Pagination, Spin, Alert } from "antd";

import { searchHotels } from "../../store/thunks/hotelsThunk.js";
import { setSelectedCity, setSearchQuery } from "../../store/slices/filtersSlice.js";
import { setCurrentPage } from "../../store/slices/globalSlice.js";
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
        isLoading: hotelsLoading,
    } = useSelector((state) => state.hotels);
    const { selectedCity, searchQuery } = useSelector((state) => state.filters);

    const currentPage = useRef(1);

    const dispatch = useDispatch();
    const debouncedQuery = useDebounce(searchQuery);

    useEffect(() => {
        dispatch(setCurrentPage("hotels"));
    }, []);

    useEffect(() => {
        // currentPage.current = 1;
        dispatch(
            searchHotels({
                destinationId: selectedCity,
                query: debouncedQuery,
                page: 1,
                pageSize,
            })
        );
        setPage(1);
        // console.log("searchHotels");
    }, [selectedCity, debouncedQuery]);

    const handleCityChange = (value) => {
        dispatch(setSelectedCity(value));
    };

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };
    console.log(hotelsLoading);
    const handlePageChange = (page) => {
        // currentPage.current = page;

        dispatch(
            searchHotels({
                destinationId: selectedCity,
                query: debouncedQuery,
                page: page,
                pageSize,
            })
        );
        setPage(page);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.controls}>
                <Select
                    placeholder="Choose the city"
                    value={selectedCity}
                    onChange={(value) => handleCityChange(value)}
                >
                    <Option value="">All cities</Option>
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

            {hotelsLoading && <Spin className={styles.loading} />}

            {!hotelsLoading && hotels?.length === 0 && (
                <Alert message="No hotels found" type="info" />
            )}

            <Row gutter={[36, 36]}>
                {hotels?.map((hotel) => (
                    <Col key={hotel.id} span={8}>
                        <HotelCard
                            id={hotel.id}
                            name={hotel.name}
                            address={hotel.address}
                            city={hotel.city}
                            imageUrl={hotel.imageUrl}
                            hotelRating={hotel.hotel_rating}
                        />
                    </Col>
                ))}
            </Row>
            {!hotelsLoading && hotels?.length > 0 ? (
                <Pagination
                    align="center"
                    showSizeChanger={false}
                    style={{ marginTop: "35px" }}
                    current={page}
                    pageSize={pageSize}
                    total={total}
                    onChange={(page) => handlePageChange(page)}
                />
            ) : null}
        </div>
    );
};

export default Hotels;
