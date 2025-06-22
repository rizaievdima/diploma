import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, useNavigate } from "react-router";
import { Row, Col, Button, Typography, Flex, Rate } from "antd";

import { setCurrentPage } from "../../store/slices/globalSlice";

import styles from "./hotel.module.css";

const { Title } = Typography;

const Hotel = () => {
    const dispatch = useDispatch();
    const { name, imageUrl, address, city, hotel_rating } = useLoaderData();
    console.log(hotel_rating);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setCurrentPage("hotels"));
    }, []);

    return (
        <div className={styles.container}>
            <Row className={styles["hotel-info"]} gutter={[35, 35]}>
                <Col span={10}>
                    <img className={styles["hotel-image"]} alt={name} src={imageUrl} />
                </Col>
                <Col span={14}>
                    <Title className={styles.title} level={1}>
                        {name}
                    </Title>
                    <Rate
                        className={styles.rate}
                        count={5}
                        allowHalf
                        disabled
                        defaultValue={hotel_rating}
                    />
                    <p>
                        <strong>Address:</strong> {address}
                    </p>
                    <p>
                        <strong>City:</strong> {city}
                    </p>
                </Col>
            </Row>
            <Flex justify="center" style={{ marginTop: "50px" }}>
                <Button
                    className={styles.button}
                    type="primary"
                    onClick={() => navigate(`/hotels`)}
                    size="large"
                >
                    See all hotels
                </Button>
            </Flex>
        </div>
    );
};

export default Hotel;
