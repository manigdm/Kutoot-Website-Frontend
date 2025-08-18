"use client";
import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

const TermsAndConditions = () => {
    const [showShareTooltip, setShowShareTooltip] = useState(false);

    const handleShareClick = () => {
        setShowShareTooltip(!showShareTooltip);
        if (!showShareTooltip) {
            setTimeout(() => setShowShareTooltip(false), 2000);
        }
    };

    const termsContent = [
        {
            title: "Kutoot Coins – Promotional Credit System",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px", paddingBottom: "5px" }}>
                    <li>
                        <strong>1.1 Definition:</strong> Kutoot Coins are digital promotional credits purchased by users to access exclusive
                        offers, redeem products and services from partnered merchants, and gain automatic
                        entries into lucky draw campaigns. Coins are not legal tender or financial instruments and
                        are intended solely for promotional use within the Kutoot ecosystem.
                    </li>

                    <li>
                        <strong>1.2 Usage:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Coins may be redeemed for eligible goods and services offered by verified Kutoot
                                vendors, driving sales through promotional incentives.</li>
                            <li>Coin bundles may include additional benefits such as free lucky draw entries,
                                merchant-specific discounts, or early product access to boost vendor engagement.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>1.3 Redemption & Expiry:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Coins are non-transferable, non-redeemable for cash, and non-refundable
                                (subject to Section 1.4).</li>
                            <li>Coins are valid for 100 days from the date of issuance (or as specified at purchase),
                                after which they expire and lose all value.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>1.4 Refunds:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Refunds are permissible only in cases of:<br /> (a) Duplicate transactions.<br /> (b) Failed payments not reflected in the user’s account.</li>
                            <li>Refund requests must be submitted to support@kutoot.com within 7 calendar days,
                                accompanied by transaction evidence (e.g., receipt or transaction ID).</li>
                            <li>Upon validation, refunds may be processed as coin re-credits or monetary
                                reimbursement, at Kutoot’s discretion, in accordance with the Consumer Protection
                                Act, 2019, Section 2(9). Escalations may be directed to legal@kutoot.com for review.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>1.5 Promotional Purpose:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>

                            <li>Kutoot Coins are provided exclusively for promotional engagement to enhance user
                                shopping experiences and support e-commerce sales growth for vendors. They do not
                                constitute an investment, gambling mechanism, or income-generating scheme.</li>

                        </ul>
                    </li>
                </ul>

            ),
        },
        {
            title: " Reward Campaigns & Lucky Draw Participation",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>2.1 Automatic Entry with Coin Purchase:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Each qualifying coin purchase includes free entries into active lucky draw or promotional
                                campaigns, offering rewards such as luxury villas, vehicles, gadgets, and vacations to
                                incentivize shopping from Kutoot vendors.</li>

                        </ul>
                    </li>

                    <li>
                        <strong>2.2 Campaign Triggers:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Campaigns are activated upon achieving predefined goals, including total coin sales,
                                vendor sales milestones, or user activity thresholds.</li>
                            <li>Draw dates and eligibility criteria will be published on the Platform at least 7 calendar
                                days in advance, subject to independent audit by a certified third-party agency (e.g.,
                                EY or KPMG) adhering to ISO 27001 standards.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>2.3 Winner Selection:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Winners are determined through a randomized selection process, validated by an
                                independent audit firm. Select draws may be livestreamed, with winning ticket IDs and
                                audit reports made available on the Platform for transparency.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>2.4 Claiming Rewards:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Winners will be notified via their registered email or phone number within 7 working
                                days of the draw.</li>
                            <li>Prizes must be claimed within 30 calendar days of notification, failing which they may
                                be forfeited and reallocated to future campaigns.</li>

                        </ul>
                    </li>
                </ul>

            ),
        },
        {
            title: " E-commerce Engagement and Vendor Relations",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>3.1 Verified Merchant Network:</strong>
                        <p>Kutoot collaborates exclusively with verified merchants who are:</p>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Registered under Indian law.</li>
                            <li>Compliant with the Consumer Protection (E-commerce) Rules, 2020.</li>
                            <li>GST-registered pursuant to the GST Act, 2017.</li>
                            <li>Merchants are obligated to leverage coin promotions to drive sales and ensure
                                product/service quality.</li>

                        </ul>
                    </li>

                    <li>
                        <strong>3.2 Order Fulfillment:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Orders placed on the Platform are fulfilled by the respective merchant. Kutoot serves
                                as a promotional and technological facilitator, not the direct seller unless otherwise
                                specified, and supports order tracking and dispute mediation.</li>

                        </ul>
                    </li>

                    <li>
                        <strong>3.3 Pricing and Taxation:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>All listed prices include applicable GST and statutory taxes unless otherwise
                                indicated.</li>
                            <li>Tax invoices are issued by the merchant or Kutoot, depending on the transaction’s
                                seller of record.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>3.4 Cancellations and Returns:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Cancellation and return policies are determined by individual vendors and must be
                                reviewed prior to purchase confirmation.</li>
                            <li>Kutoot will mediate disputes in good faith but assumes no liability for merchant-
                                specific decisions, in line with the Consumer Protection Act, 2019.</li>

                        </ul>
                    </li>

                </ul>

            ),
        },
        {
            title: " User Account, Eligibility & Conduct",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>4.1 Account Eligibility:</strong>

                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Users must be:<br /> (a) At least 18 years of age. <br /> (b) Residents of India. <br /> (c) Subject to KYC verification (Aadhaar and PAN) for high-value campaigns or
                                reward claims, per RBI KYC norms.</li>


                        </ul>
                    </li>

                    <li>
                        <strong>4.2 Prohibited Conduct:</strong>
                        <p>Users are prohibited from:</p>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Creating fake accounts or using automated scripts/bots.</li>
                            <li>Tampering with draw systems or exploiting referral codes.</li>
                            <li>Harassing staff, users, or abusing support services.</li>
                            <li>Violations may result in account suspension, campaign disqualification, or legal
                                action under the Information Technology Act, 2000, Section 66E.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>4.3 Community Interaction:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Participation in reviews, social media contests, referrals, and testimonials is encouraged,
                                provided all content adheres to the Kutoot Community Guidelines, available on the
                                Platform.</li>

                        </ul>
                    </li>

                </ul>

            ),
        },
        {
            title: "  Platform Availability & Technical Downtime",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>5.1 Scheduled Maintenance:</strong>

                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Kutoot may conduct scheduled maintenance or upgrades, with users notified at least 48
                                hours in advance via the Platform or email, where practicable.</li>


                        </ul>
                    </li>

                    <li>
                        <strong>5.2 Unexpected Downtime</strong>

                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Kutoot shall not be liable for service interruptions due to unforeseen technical issues,
                                cyberattacks, or external factors beyond our reasonable control.</li>

                        </ul>
                    </li>
                </ul>

            ),
        },
        {
            title: "Legal Framework and Dispute Resolution",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>6.1 Governing Law:</strong>

                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>These Terms are governed by the laws of India, with all disputes subject to the exclusive
                                jurisdiction of the courts in Bengaluru, Karnataka.</li>


                        </ul>
                    </li>

                    <li>
                        <strong>6.2 Resolution Process</strong>

                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>For grievances, contact support@kutoot.com, with a response targeted within 7
                                business days.</li>
                            <li>Unresolved matters may be escalated to legal@kutoot.com for further action.</li>
                        </ul>
                    </li>
                </ul>

            ),
        },
        {
            title: "No Gambling, No Earnings Guarantee",
            content: (
                <p className="mb-4 mt-2">
                    Kutoot is a promotional rewards platform, not a gambling, betting, or financial
                    speculation site. Lucky draw participation is a free benefit tied to coin purchases to
                    promote e-commerce activity. Kutoot Coins do not guarantee monetary returns,
                    investments, or profits.
                </p>

            ),
        },
        {
            title: " Intellectual Property",
            content: (
                <p className="mb-4 mt-2">
                    All trademarks, designs, source code, graphics, and content on the Platform are the
                    property of Kutoot Innovations Pvt. Ltd. or its licensed entities. Unauthorized reproduction,
                    modification, or distribution is strictly prohibited without prior written consent.
                    <br />
                    User-submitted content (e.g., reviews, testimonials) grants Kutoot a non-exclusive,
                    royalty-free, irrevocable license to use such material for marketing or operational
                    purposes, with appropriate attribution where feasible.
                </p>


            ),
        },
        {
            title: "Data Privacy & Protection",
            content: (
                <p className="mb-4 mt-2">
                    Use of the Platform is subject to the Kutoot Privacy Policy (www.kutoot.com/privacy),
                    which complies with the Digital Personal Data Protection Act, 2023. This policy details the
                    collection, processing, storage, and user rights regarding personal data.
                    <br />
                    By using the Platform, you consent to Kutoot’s data practices as outlined.
                </p>


            ),
        },
        {
            title: "Changes to Platform or Terms",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>Kutoot reserves the right to:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Modify, update, or terminate Platform features, services, or vendor listings.</li>
                            <li>For material changes affecting locked rewards or campaigns, users will receive 30
                                calendar days’ notice via the Platform, email, or app notifications.</li>
                            <li>Urgent changes due to legal or regulatory requirements may be implemented with 48
                                hours’ notice, accompanied by a public justification.</li>
                        </ul>
                    </li>


                </ul>

            ),
        },
        {
            title: 'Contact Information',
            content: (
                <>
                    <p className="font-semibold mt-2">Kutoot Innovations Pvt. Ltd.</p>
                    <ul
                        className="space-y-1 mt-2 mb-4"
                        style={{
                            listStyleType: "disc",
                            listStylePosition: "outside",
                            marginLeft: "1.5rem",
                            fontSize: "18px",
                            color: "black"
                        }}
                    >
                        <li>Registered Office: Metro Station Rajajinagar, No.59,1st Floor, Chowdeshwari, Arcade, 2nd
                            Stage, opp. to Rajajinagar, West of Chord Road, II stage, Basaveshwar Nagar, Bengaluru,
                            Karnataka 560086</li>
                        <li>Customer Support: support@kutoot.com</li>
                        <li>Legal Inquiries: legal@kutoot.com</li>
                        <li>Phone: +91-93803 84568</li>
                        <li>Website: www.kutoot.com</li>


                    </ul>

                </>
            ),
        },
        {
            title: "Acceptance of Terms",
            content: (
                <p className="mb-4 mt-2" style={{ fontSize: "18px" }}>
                    By accessing or using the Platform, you affirm that you have read, understood, and agree
                    to be legally bound by these Terms and Conditions, including all referenced policies. Non-
                    acceptance requires immediate cessation of Platform use.
                </p>
            ),
        },

    ];

    return (
        <div className="font-poppins text-black">
            <div
                className="bg-white shadow-lg rounded-xl max-w-4xl mx-auto my-10 relative mt-10"
                style={{ padding: "40px", textAlign: "left" }}
            >
                {/* Header */}
                <header
                    style={{
                        display: "flex",
                        flexDirection: "column",  // stack children vertically
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "1.5rem",
                        borderBottom: "1px solid #e5e7eb",
                        paddingBottom: "1rem",
                        paddingTop: "100px"
                    }}
                >
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-black">
                        Terms & Conditions
                    </h1>
                    <p className="italic text-black text-sm mt-2">
                        Effective Date: July 11, 2025 | Version: 1.0 | Last Updated: July 11, 2025 – 02:35 PM IST
                    </p>

                </header>
                <div
                    className="space-y-8 text-sm lg:text-base leading-relaxed"
                    style={{
                        margin: "0 auto",      // centers the block horizontally
                        maxWidth: "1200px",     // keeps content readable
                        textAlign: "left"      // ensures text stays left aligned
                    }}
                >
                    <p ><strong>Welcome to Kutoot</strong></p>
                    <p className="mb-2">
                        Kutoot Innovations Pvt. Ltd. (“Kutoot,
                        ” “we,
                        ” “our,
                        ” or “us”), a private limited company
                        incorporated under the laws of India, operates a promotional reward-based engagement
                        platform designed to enhance e-commerce sales and brand visibility for verified
                        vendors, service providers, and suppliers. By accessing or using any component of the
                        Kutoot platform—including our website (www.kutoot.com), mobile applications, and
                        associated services (collectively, the “Platform”)—you acknowledge that you have read,
                        understood, and agree to be bound by these Terms and Conditions (“Terms”).
                    </p>
                    <p className="mb-4">
                        These Terms constitute a legally enforceable agreement between you and Kutoot. If you
                        do not accept any provision herein, you must immediately discontinue use of the
                        Platform.
                    </p>
                </div>

                {/* Sections */}
                <div
                    className="space-y-8 text-sm lg:text-base leading-relaxed"
                    style={{
                        margin: "0 auto",      // centers the block horizontally
                        maxWidth: "1200px",     // keeps content readable
                        textAlign: "left"      // ensures text stays left aligned
                    }}
                >
                    {termsContent.map((section, index) => (
                        <section key={index} className="space-y-4">
                            <h2
                                style={{ fontSize: "22px", fontWeight: "bold", color: "black" }}
                            >
                                {index + 1}. {section.title}
                            </h2>
                            <div style={{ color: "black" }}>{section.content}</div>
                        </section>
                    ))}
                </div>

                {/* Footer */}
                <footer className="text-center text-xs text-black pt-6 border-t mt-8">
                    <p>Kutoot Innovations Pvt. Ltd. © 2025. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default TermsAndConditions;
