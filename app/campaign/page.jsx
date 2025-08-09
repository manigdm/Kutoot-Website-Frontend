'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/components/CampaignTabs/CampaignTabs.module.css';
import CampaignTabs from '@/components/CampaignTabs/CampaignTabs';
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SubscriptionForm from '@/components/home/components/SubscriptionForm/SubscriptionForm';
import Footer from "@/components/home/components/Footer/Footer";

const App = () => {
    // Array of data for the six pricing cards
    const offers = [
        {
            title: "Starter Spark",
            badge: "Fan Favorite",
            price: "100",
            coins: "400 coins",
            coupons: "10",
            couponText: "Lucky draw coupons"
        },
        {
            title: "Value Builder",
            badge: "3X More Entries",
            price: "250",
            coins: "1,000 coins",
            coupons: "30",
            couponText: "Lucky draw coupons"
        },
        {
            title: "Smart Upgrade",
            badge: "8.5X Coupon Boost",
            price: "500",
            coins: "2,000 coins",
            coupons: "85",
            couponText: "Lucky draw coupons"
        },
        {
            title: "Pro Pack",
            badge: "Best Value",
            price: "750",
            coins: "3,500 coins",
            coupons: "120",
            couponText: "Lucky draw coupons"
        },
        {
            title: "Elite Bundle",
            badge: "Premium",
            price: "1000",
            coins: "5,000 coins",
            coupons: "200",
            couponText: "Lucky draw coupons"
        },
        {
            title: "Ultimate Access",
            badge: "Most Popular",
            price: "1500",
            coins: "8,000 coins",
            coupons: "350",
            couponText: "Lucky draw coupons"
        }
    ];

    const [activeTab, setActiveTab] = useState('All');
    const tabs = ['All', 'Latest', 'Fast filling', 'Highest Prize', 'Value for Money', 'Best Deals'];
    const left_section_img = '/images/campaign/campaign_villa.svg';
    const kutoot_slide_top = '/images/campaign/campaigncard.svg'

    // Ref to the scrollable container
    const scrollRef = useRef(null);

    // State to manage the visibility of the left and right arrows
    const [showArrows, setShowArrows] = useState({ left: false, right: true });

    // Function to scroll the container to the left
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
        }
    };

    // Function to scroll the container to the right
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
    };

    // useEffect hook to add an event listener for scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const isAtStart = scrollLeft === 0;
                const isAtEnd = scrollWidth - scrollLeft <= clientWidth + 1;
                setShowArrows({ left: !isAtStart, right: !isAtEnd });
            }
        };

        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
        }

        handleScroll();

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <>
            <div className="container pt-5 mt-5">
                <h1 className={`text-center mt-5 ${styles.win_big_text}`}>Win Big Every Month</h1>
                <h2 className={`text-center ${styles.join_our_text}`}>Join Our Exclusive Monthly Prize Draws!</h2>
                <p className={`text-center mb-4 ${styles.win_exclusive}`}>Win exclusive prizes – Enter now!</p>

                <CampaignTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

                <Container className="my-5">
                    <div className={`p-4 rounded-3xl shadow-lg ${styles.campaign_card}`}>
                        <Row>
                            {/* Main campaign card */}
                            <Col md={4} lg={4} className="position-relative mb-4">
                                <div
                                    className="bg-cover bg-center h-50 rounded-2xl"
                                    style={{
                                        backgroundImage: `url(${left_section_img})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '320px !important',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <div className={`position-absolute text-white ${styles.left_img_top_txt}`}>
                                        BEST SELLER BUNDLE OF THE MONTH
                                    </div>
                                    <div className={`position-absolute text-white ${styles.left_img_btm_txt}`}>
                                        <h2 className="fw-bold">Kutoot Dream Villa Campaign</h2>
                                    </div>
                                </div>
                            </Col>

                            {/* Offer cards container */}
                            <Col md={8}>
                                <div ref={scrollRef} className={`d-flex overflow-auto gap-4 ${styles.scrollbar_fix}`}>
                                    {offers.map((offer, index) => (
                                        <div
                                            key={index}
                                            className="d-flex flex-column align-items-center text-center bg-white shadow rounded-4 overflow-hidden"
                                            style={{
                                                width: '300px',
                                                position: 'relative',
                                                flex: '0 0 auto'
                                            }}
                                        >
                                            {/* Top Ticket Image with Text */}
                                            <div
                                                className="position-relative text-white rounded-2xl"
                                                style={{
                                                    backgroundImage: `url(${kutoot_slide_top})`,
                                                    backgroundSize: "cover",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "center",
                                                    width: "100%",
                                                    height: "300px",
                                                }}
                                            >
                                                {/* Content Over the Image */}
                                                <div className="position-absolute top-0 start-0 w-100 h-100 p-3 d-flex flex-column justify-content-between">

                                                    {/* Top section */}
                                                    <div>
                                                        <h4 className="fw-bold mb-1 mt-4">{offer.title}</h4>
                                                        <span className="badge bg-danger px-3 py-1">{offer.badge}</span>
                                                    </div>

                                                    {/* Bottom section */}
                                                    <div>
                                                        <div className="d-flex justify-content-between flex-column text-black">
                                                            <div className={`d-flex justify-content-between align-items-center flex-row ${styles.border_fix}`}>
                                                                <div className="fs-1 fw-bold">₹{offer.price}</div>
                                                                <div>{offer.coins}</div>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center flex-row">
                                                                <div className="fs-2 fw-bold">{offer.coupons}</div>
                                                                <div>{offer.couponText}</div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="w-50">
                                                                <p className="text-muted small m-0">*Validity up to 30 July 2025</p>
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className={`btn w-100 fw-bold rounded-pill ${styles.kutoot__button}`}
                                                                >
                                                                    Enter Now .
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    ))}
                                </div>

                                {/* Scroll arrows */}
                                <div className="d-flex justify-content-start mt-3 gap-5 position-relative">
                                    <div>
                                        <button
                                            onClick={scrollLeft}
                                            className={`${styles.kutoot__arrow_button} position-absolute`}
                                            aria-label="Scroll left"
                                        >
                                            <IoIosArrowBack className={styles.arrow_icon} />
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            onClick={scrollRight}
                                            className={`${styles.kutoot__arrow_button} position-absolute`}
                                            aria-label="Scroll right"
                                        >
                                            <IoIosArrowForward className={styles.arrow_icon} />
                                        </button>
                                    </div>
                                </div>

                                {/* "View Campaign" button */}
                                <div className="d-flex justify-content-end">
                                    <Button variant="warning" size="lg" className={`rounded-pill ${styles.kutoot__campaign_button}`}>
                                        View Campaign
                                        {/* <FaArrowRight className="kutoot--header__button-icon" /> */}
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <section style={{ paddingTop: "50px" }}>
                    <div className="mt-5">
                        <SubscriptionForm />
                    </div>
                </section>
            </div>
            <section>
                <div>
                    <Footer />
                </div>
            </section>
        </>
    );
};

export default App;