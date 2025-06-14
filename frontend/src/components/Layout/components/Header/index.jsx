import { NavLink } from "react-router";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink
                className={({ isActive }) =>
                    `${styles["header-link"]} ${isActive ? styles["active"] : ""}`
                }
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                to={"/hotels"}
                className={({ isActive }) =>
                    `${styles["header-link"]} ${isActive ? styles["active"] : ""}`
                }
            >
                Hotels
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `${styles["header-link"]} ${isActive ? styles["active"] : ""}`
                }
                to="/about-us"
            >
                About
            </NavLink>
        </div>
    );
};

export default Header;
