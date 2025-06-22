import { Layout, Typography, Space } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

import styles from "./Footer.module.css";

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <AntFooter className={styles.footer}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                <Space size="large">
                    <Link
                        href="https://github.com/rizaievdima"
                        target="_blank"
                        style={{ color: "inherit" }}
                    >
                        <GithubOutlined style={{ fontSize: "24px" }} />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/dmytro-rizaiev-72994a227"
                        target="_blank"
                        style={{ color: "inherit" }}
                    >
                        <LinkedinOutlined style={{ fontSize: "24px" }} />
                    </Link>
                    <Link href="mailto:rizaievdima@gmail.com" style={{ color: "inherit" }}>
                        <MailOutlined style={{ fontSize: "24px" }} />
                    </Link>
                </Space>
                <Text style={{ color: "rgba(255, 255, 255, 0.65)" }}>
                    © {currentYear} Booking. All rights reserved.
                </Text>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                    Built with React and Ant Design
                </Text>
            </Space>
        </AntFooter>
    );
};

export default Footer;
