import { useNavigate } from "react-router";
import PropTypes from "prop-types";

import { Card, Button } from "antd";
import styles from "./HotelCard.module.css";

const Class = ({ id, name, address, city, imageUrl }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/hotels/${id}`);
    };

    return (
        <Card
            className={styles.card}
            title={name}
            cover={<img className={styles.coverImage} alt={name} src={imageUrl} />}
        >
            <div className={styles.content}>
                <p>
                    <strong>Address:</strong> {address}
                </p>

                <p>
                    <strong>City:</strong> {city}
                </p>
                <Button className={styles.button} type="primary" onClick={handleNavigate}>
                    More
                </Button>
            </div>
        </Card>
    );
};

Class.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    imageUrl: PropTypes.string,
};

export default Class;
