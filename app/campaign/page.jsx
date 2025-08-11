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
import axios from "axios";

const App = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [campaigns, setCampaigns] = useState([]);
    const filteredCampaigns = filterCampaigns(campaigns, activeTab);
    const [loading, setLoading] = useState(true);
    const tabs = ['All', 'Latest', 'Fast filling', 'Highest Prize', 'Value for Money', 'Best Deals'];
    const left_section_img = '/images/campaign/campaign_villa.svg';
    const kutoot_slide_top = '/images/campaign/campaigncard.svg'
    const scrollRef = useRef(null);

    const [showArrows, setShowArrows] = useState({ left: false, right: true });

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
    };

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

    // API call
    useEffect(() => {
        axios
            .get("https://kutoot.bigome.com/api/coin-campaigns")
            .then((res) => {
                console.log("API Response:", res.data.data);
                setCampaigns(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching campaigns:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading campaigns...</div>;
    }

    function stripHtml(html) {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    }

    function formatDate(dateTimeStr) {
        if (!dateTimeStr) return "";
        return dateTimeStr.split(" ")[0];
    }

    function filterCampaigns(campaigns, activeTab) {
        if (!campaigns || campaigns.length === 0) return [];
      
        switch (activeTab) {
          case "All":
            return campaigns;
      
          case "Latest":
            // Sort by creation date descending
            return [...campaigns].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      
          case "Fast filling":
            // Sort by progress or display_percentage descending
            return [...campaigns].sort((a, b) => (b.progress || b.display_percentage) - (a.progress || a.display_percentage));
      
          case "Highest Prize":
            // Sort by ticket price descending
            return [...campaigns].sort((a, b) => (b.ticket_price || 0) - (a.ticket_price || 0));
      
          case "Value for Money":
            // Sort by ticket price ascending
            return [...campaigns].sort((a, b) => (a.ticket_price || 0) - (b.ticket_price || 0));
      
          case "Best Deals":
            // Filter to only "Featured" promotion campaigns
            return campaigns.filter(campaign => campaign.promotion === "Featured");
      
          default:
            return campaigns;
        }
      }

    return (
        <>
            <div className="container pt-5 mt-5">
                <h1 className={`text-center mt-5 ${styles.win_big_text}`}>Win Big Every Month</h1>
                <h2 className={`text-center ${styles.join_our_text}`}>Join Our Exclusive Monthly Prize Draws!</h2>
                <p className={`text-center mb-4 ${styles.win_exclusive}`}>Win exclusive prizes – Enter now!</p>

                <CampaignTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

                <Container className="my-5">
                    {filteredCampaigns.map((offer, index) => (
                        <div className={`p-4 rounded-3xl shadow-lg ${styles.campaign_card}`}>
                            <Row>
                                {/* Main campaign card */}
                                <Col md={4} lg={4} className="position-relative mb-4">
                                    <div
                                        className="bg-cover bg-center h-100 rounded-2xl"
                                        style={{
                                            backgroundImage: `url(${offer?.img})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'contain',
                                            backgroundPosition: 'center',
                                            height: '320px !important',
                                            borderRadius: '8px',
                                        }}
                                    >
                                        <div className={`position-absolute text-white ${styles.left_img_top_txt}`}>
                                            BEST SELLER BUNDLE OF THE MONTH
                                        </div>
                                        <div className={`position-absolute text-black ${styles.left_img_btm_txt}`}>
                                            <h2 className="fw-bold">{stripHtml(offer?.title)}</h2>
                                        </div>
                                    </div>
                                </Col>

                                {/* Offer cards container */}
                                <Col md={8}>
                                    <div ref={scrollRef} className={`d-flex overflow-auto gap-4 ${styles.scrollbar_fix}`}>
                                        <div
                                            key={index}
                                            className="d-flex flex-column align-items-center text-center bg-white shadow rounded-4 overflow-hidden"
                                            style={{
                                                width: '300px',
                                                position: 'relative',
                                                flex: '0 0 auto'
                                            }}
                                        >
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
                                                <div className="position-absolute top-0 start-0 w-100 h-100 p-3 d-flex flex-column justify-content-between">
                                                    <div>
                                                        <h4 className={`fw-bold mb-1 mt-4 ${styles.text_fix}`}>{offer?.title1}</h4>
                                                        <span className={`badge bg-danger px-3 py-1 ${styles.sub_text_fix}`}>{offer?.title2}</span>
                                                    </div>
                                                    <div>
                                                        <div className="d-flex justify-content-between flex-column text-black">
                                                            <div className={`d-flex justify-content-between align-items-center flex-row ${styles.border_fix}`}>
                                                                <div className="fs-1 fw-bold">₹{offer?.ticket_price}</div>
                                                                <div>{offer?.max_coins_per_transaction} Coins</div>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center flex-row">
                                                                <div className="fs-2 fw-bold">{offer?.coupons_per_campaign}</div>
                                                                <div>Lucky draw coupons</div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="w-50">
                                                                <p className="text-muted small m-0">*Validity up to {formatDate(offer?.start_date)}</p>
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
                                        <button className={`btn btn-sm rounded-pill ${styles.kutoot__campaign_button}`}>
                                            View Campaign
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}
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