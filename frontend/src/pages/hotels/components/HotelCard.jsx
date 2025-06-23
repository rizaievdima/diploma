import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { Card, Button, Rate } from "antd";

import { getImageUrl } from "../../../helpers/additionalFanctions";

import styles from "./HotelCard.module.css";

const { Meta } = Card;

const HotelCard = ({ id, name, address, city, imageUrl, hotelRating }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/hotels/${id}`);
    };

    return (
        <Card
            className={styles.card}
            cover={<img className={styles.coverImage} alt={name} src={getImageUrl(imageUrl)} />}
        >
            <div className={styles.content}>
                <Meta
                    className={styles.meta}
                    title={name}
                    description={
                        <>
                            <Rate
                                className={styles.rate}
                                count={5}
                                allowHalf
                                disabled
                                defaultValue={hotelRating}
                            />
                            <p>
                                <strong>Address:</strong> {address}
                            </p>
                            <p>
                                <strong>City:</strong> {city}
                            </p>
                        </>
                    }
                />

                <Button className={styles.button} type="primary" onClick={handleNavigate}>
                    Read more
                </Button>
            </div>
        </Card>
    );
};

HotelCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    imageUrl: PropTypes.string,
    hotelRating: PropTypes.number,
};

export default HotelCard;
