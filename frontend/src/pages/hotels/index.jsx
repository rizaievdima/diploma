import { useEffect, useState } from "react";
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

    const { destinations } = useSelector((state) => state.destinations);
    const {
        hotels,
        total,
        error: hotelsError,
        isLoading: hotelsLoading,
    } = useSelector((state) => state.hotels);
    const { selectedCity, searchQuery } = useSelector((state) => state.filters);

    const dispatch = useDispatch();
    const debouncedQuery = useDebounce(searchQuery);

    useEffect(() => {
        dispatch(setCurrentPage("hotels"));
    }, []);
    console.log("test");
    useEffect(() => {
        dispatch(
            searchHotels({
                destinationId: selectedCity,
                query: debouncedQuery,
                page: 1,
                pageSize,
            })
        );
        setPage(1);
    }, [selectedCity, debouncedQuery]);

    const handleCityChange = (value) => {
        dispatch(setSelectedCity(value));
    };

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handlePageChange = (page) => {
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
            <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
                <Col lg={6} md={8} xs={24}>
                    <Select
                        placeholder="Choose the city"
                        value={selectedCity}
                        onChange={(value) => handleCityChange(value)}
                        style={{ width: "100%" }}
                    >
                        <Option value="">All cities</Option>
                        {destinations?.map((city) => (
                            <Option key={city.id} value={city.id}>
                                {city.label}
                            </Option>
                        ))}
                    </Select>
                </Col>

                <Col lg={18} md={16} xs={24}>
                    <Input
                        placeholder="Search by name, address, city..."
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e)}
                    />
                </Col>
            </Row>

            {hotelsLoading && <Spin className={styles.loading} />}

            {!hotelsLoading && hotels?.length === 0 && (
                <Alert message="No hotels found" type="info" />
            )}

            <Row gutter={[36, 36]}>
                {!hotelsLoading &&
                    hotels?.map((hotel) => (
                        <Col key={hotel.id} lg={8} md={12} xs={24}>
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
