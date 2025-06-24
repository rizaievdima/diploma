import { useEffect } from "react";
import { Carousel, Typography, Button, Row, Col, Spin } from "antd";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import HotelCard from "../hotels/components/HotelCard";

import { fetchFeaturedHotels } from "../../store/thunks/hotelsThunk";
import { getImageUrl } from "../../helpers/additionalFanctions";
import { setCurrentPage } from "../../store/slices/globalSlice";

import styles from "./home.module.css";

const { Title } = Typography;

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { featuredHotels, isLoading } = useSelector((state) => state.hotels);

    useEffect(() => {
        dispatch(setCurrentPage("home"));
        dispatch(fetchFeaturedHotels());
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.carouselWrapper}>
                <Carousel
                    effect="fade"
                    autoplay
                    autoplaySpeed={3000}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    arrows
                    dots
                    draggable
                >
                    <div>
                        <div
                            style={{
                                backgroundImage: `url(${getImageUrl("chris-carzoli.jpg")})`,
                            }}
                            className={styles.carouselImage}
                        >
                            <div className={styles.carouselContent}>
                                <Title level={2}>Book your next trip</Title>
                                <Button
                                    onClick={() => navigate("/hotels")}
                                    type="primary"
                                    size="large"
                                >
                                    Book now
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                backgroundImage: `url(${getImageUrl("sasha-kaunas.jpg")})`,
                            }}
                            className={styles.carouselImage}
                        >
                            <div className={styles.carouselContent}>
                                <Title level={2}>Find the perfect place to stay</Title>
                                <Button
                                    onClick={() => navigate("/hotels")}
                                    type="primary"
                                    size="large"
                                >
                                    Book now
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                backgroundImage: `url(${getImageUrl("rhema-kallianpur.jpg")})`,
                            }}
                            className={styles.carouselImage}
                        >
                            <div className={styles.carouselContent}>
                                <Title level={2}>Find the best deals</Title>
                                <Button
                                    onClick={() => navigate("/hotels")}
                                    type="primary"
                                    size="large"
                                >
                                    Book now
                                </Button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className={styles.container}>
                <Title level={2}>Featured Hotels</Title>
                {isLoading ? (
                    <Spin className={styles.loading} />
                ) : (
                    <Row gutter={[16, 16]}>
                        {featuredHotels?.map((hotel) => (
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
                )}
            </div>
        </div>
    );
};

export default Home;
