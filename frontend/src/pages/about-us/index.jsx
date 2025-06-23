import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Typography } from "antd";
import { PhoneOutlined, MailOutlined, ClockCircleOutlined } from "@ant-design/icons";

import { setCurrentPage } from "../../store/slices/globalSlice";

import styles from "./about.module.css";

const { Title, Text, Link, Paragraph } = Typography;

const AboutUs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPage("about"));
    }, []);

    return (
        <div className={styles.wrapper}>
            <Title level={1}>About Us</Title>
            <Title level={3}>Your Journey Begins Here.</Title>

            <Paragraph>
                Welcome to "Booking", your trusted partner in finding the perfect place to
                stay—anywhere, anytime. We’re more than just a hotel booking platform. We’re a team
                of passionate travelers and tech enthusiasts committed to making your travel
                planning effortless, enjoyable, and affordable.
            </Paragraph>

            <Title level={3} style={{ marginTop: "30px" }}>
                Who We Are
            </Title>
            <Paragraph>
                Founded in 2025, booking.com was built on a simple idea: booking a hotel should be
                easy and reliable. Whether you're traveling for business, planning a romantic
                getaway, or setting off on a spontaneous adventure, we’re here to help you find the
                right stay—fast.
            </Paragraph>

            <Title level={3} style={{ marginTop: "30px" }}>
                Contact Us
            </Title>
            <Paragraph>
                Got a question, need help with a booking, or just want to share your experience?
                We’d love to hear from you!
            </Paragraph>

            <Paragraph>
                <MailOutlined /> Email: <Link href="mailto:support@test.com">support@test.com</Link>
            </Paragraph>
            <Paragraph>
                <PhoneOutlined /> Phone: <Link href="tel:+380681234567">+38 (068) 123-4567</Link>
            </Paragraph>
            <Paragraph>
                <ClockCircleOutlined /> Support Hours: 24/7 Customer Support
            </Paragraph>
            <br />
            <Text>
                Office Address:
                <br />
                bookink.com HQ
                <br />
                123 Traveler's Way
                <br />
                New York,
                <br />
                NY 10001 USA
            </Text>
        </div>
    );
};

export default AboutUs;
