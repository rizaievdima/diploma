import { NavLink, useLocation } from "react-router";
import { Layout, Menu, Typography } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";

const { Header: AntHeader } = Layout;
import styles from "./Header.module.css";

const Header = () => {
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
            label: <NavLink to="/about-us">About Me</NavLink>,
        },
    ];

    const location = useLocation();

    const getSelectedKey = (pathname) => {
        if (pathname === "/") return "home";
        if (pathname.startsWith("/hotels")) return "hotels";
        if (pathname.startsWith("/about-us")) return "about";
        return "";
    };

    return (
        <AntHeader className={styles.header}>
            <div className="demo-logo" style={{ color: "white", padding: "0 24px" }}>
                <h2>Booking</h2>
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[getSelectedKey(location.pathname)]}
                items={items}
                className={styles["header-menu"]}
            />
        </AntHeader>
    );
};

export default Header;
