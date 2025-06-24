import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import { Layout, Menu, Typography } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const items = [
    {
        key: "home",
        icon: <HomeOutlined />,
        label: <NavLink to="/">Home</NavLink>,
    },
    {
        key: "hotels",
        icon: <FontAwesomeIcon icon={faHotel} />,
        label: <NavLink to="/hotels">Hotels</NavLink>,
    },
    {
        key: "about",
        icon: <UserOutlined />,
        label: <NavLink to="/about-us">About Us</NavLink>,
    },
];

const Header = () => {
    const { currentPage } = useSelector((state) => state.global);

    return (
        <AntHeader className={styles.header}>
            <div className={styles["header-logo"]}>
                <NavLink to="/" className={styles["header-link"]}>
                    <Title level={2} style={{ color: "white", margin: "0" }}>
                        Booking
                    </Title>
                </NavLink>
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[currentPage]}
                selectedKeys={[currentPage]}
                items={items}
                className={styles["header-menu"]}
            />
        </AntHeader>
    );
};

export default Header;
