import { Outlet } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

import styles from "./Layout.module.css";

const Layout = () => {
    return(
        <div className={styles.container}>
            <Header />
            <div className={styles.mainContainer}>
                <SideBar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;