import { Outlet } from "react-router";
import { Layout as AntLayout, theme } from "antd";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

import styles from "./Layout.module.css";

const { Content } = AntLayout;

const Layout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Content className={styles.content}>
                <div className={styles.mainContainer}>
                    <Outlet />
                </div>
            </Content>
            <Footer />
        </div>
    );
};

export default Layout;
