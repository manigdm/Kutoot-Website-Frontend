"use client";
import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

const ReturnRefund = () => {
    const [showShareTooltip, setShowShareTooltip] = useState(false);

    const handleShareClick = () => {
        setShowShareTooltip(!showShareTooltip);
        if (!showShareTooltip) {
            setTimeout(() => setShowShareTooltip(false), 2000);
        }
    };

    const termsContent = [
        {
            title: "Introduction",
            content: (
                <>
                    {/* Paragraph above list */}
                    <p className="mt-2 " style={{ fontSize: "18px", marginBottom: "10px" }}>
                        This Return, Refund & Cancellation Policy (“Policy”) defines the terms under which users
                        of the digital platform operated by Kutoot Innovations Pvt. Ltd. (“Kutoot”
                        ,
                        “Company”
                        ,
                        “we”
                        ,
                        “our”
                        , or “us”) may seek returns, refunds, and cancellations.
                        <br />
                        This Policy governs all interactions through the Kutoot Website, Mobile Application, and
                        any associated services or promotional tools (the “Platform”), including but not limited to:
                    </p>

                    <ul
                        className="mb-4 mt-2"
                        style={{
                            fontSize: "18px",
                            listStyleType: "disc",
                            paddingLeft: "20px",
                            paddingBottom: "5px",
                        }}
                    >
                        <li>
                            Kutoot Coin purchases
                        </li>

                        <li>
                            Product orders (Kutoot- or merchant-fulfilled)
                        </li>
                        <li>
                            Lucky Draw entries and promotional campaigns
                        </li>
                    </ul>

                    {/* Paragraph below list */}
                    <p style={{ fontSize: "16px", marginTop: "0px" }}>
                        By using our Platform, you (“User”
                        ,
                        “Customer”
                        ,
                        “you”) accept this Policy as binding, in
                        conjunction with our [Privacy Policy], [Terms of Service], [Coin & Campaign Policy], and
                        [Lucky Draw Participation Terms].
                    </p>
                    <p style={{ fontSize: "16px", marginTop: "0px" }}>
                        This Policy complies with Indian laws, including:
                    </p>
                    <ul
                        className="mb-4 mt-2"
                        style={{
                            fontSize: "18px",
                            listStyleType: "disc",
                            paddingLeft: "20px",
                            paddingBottom: "5px",
                        }}
                    >
                        <li>
                            Consumer Protection Act, 2019
                        </li>

                        <li>
                            Information Technology Act, 2000
                        </li>
                        <li>
                            Digital Personal Data Protection Act, 2023
                        </li>
                        <li>
                            E-commerce Rules, 2020
                        </li>
                    </ul>

                </>
            ),
        }
        ,
        {
            title: " Kutoot Coins – Non-Refundable Promotional Credit",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>2.1 What Are Kutoot Coins?:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Kutoot Coins are non-transferable, non-redeemable, and non-convertible promotional
                                digital credits that may be used only within the Kutoot Platform or with our authorized
                                partners.</li>

                        </ul>
                    </li>

                    <li>
                        <strong>2.2 Refunds & Cancellations:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>No Refunds: Once Coins are purchased, they are final and non-refundable, unless
                                the transaction failed or an unresolved technical error occurred (see Section 6).</li>
                            <li>No Cancellations: After successful confirmation, Coin purchases cannot be reversed
                                or canceled.</li>
                            <li>No Cash Conversion: Coins cannot be redeemed for currency, cryptocurrency, bank
                                credit, or vouchers.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>2.3 Validity Period</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Kutoot Coins are valid for 100 calendar days from issuance, unless otherwise stated in a
                                campaign. Expired Coins will not be reinstated or refunded.</li>
                        </ul>
                    </li>


                </ul>

            ),
        },
        {
            title: " Product Orders – Returns, Refunds & Exchanges",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>3.1 Order Types:</strong>
                        {/* <p>Kutoot collaborates exclusively with verified merchants who are:</p> */}
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Kutoot Fulfilled Orders: Products shipped directly by Kutoot.</li>
                            <li>Merchant Fulfilled Orders: Products listed by third-party sellers through Kutoot’s
                                marketplace.</li>
                            <li>GST-registered pursuant to the GST Act, 2017.</li>
                            <li>Merchants are obligated to leverage coin promotions to drive sales and ensure
                                product/service quality.</li>

                        </ul>
                    </li>
                    <p className="mt-3 mb-1"> (A) Kutoot Fulfilled Orders:</p>
                    <li>
                        <strong>3.2 Return Eligibility:</strong>
                        <p>Returns or exchanges are eligible when:</p>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>The product is damaged, defective, expired, or significantly different from the
                                product description.</li>
                            <li>A return request is submitted within 7 calendar days of delivery.</li>
                            <li>The item is unused, unwashed, and in original packaging with all accessories, tags,
                                and manuals intact.</li>

                        </ul>
                    </li>

                    <li>
                        <strong>3.3 Return Process:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Email support@kutoot.com with your order ID, photos, and issue description.</li>
                            <li>Kutoot Support will respond within 3 business days.</li>
                            <li>If approved, we will: <br />(a) Arrange pickup where available, or <br /> (b) Provide self-return instructions.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>3.4 Refunds:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Once the returned item passes inspection, a refund will be processed as Kutoot Coins
                                to your Kutoot wallet within 7–10 business days.</li>
                            <li>As per CPA, 2019 Section 2(9), no cash or bank refunds will be issued for purchases
                                made with promotional currency.</li>

                        </ul>
                    </li>
                    <p className="mt-3 mb-1"> (B) Merchant Fulfilled Orders:</p>
                    <li>
                        <strong>3.5 Merchant Policies Govern:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>All returns, exchanges, and cancellations are governed by the respective merchant’s
                                return policy, visible at checkout and compliant with the E-commerce Rules, 2020.</li>

                        </ul>
                    </li>

                    <li>
                        <strong>3.6 Kutoot’s Role:</strong>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Kutoot is not responsible for merchant-side performance or disputes.</li>
                            <li>However, valid user complaints will be escalated within 5 business days.</li>
                            <li>Kutoot will mediate in good faith but cannot guarantee outcomes beyond our
                                facilitation.</li>
                        </ul>
                    </li>
                </ul>

            ),
        },
        {
            title: " Order Cancellations",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>4.1 Cancellation Window:</strong>

                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>You may cancel your order within 2 hours of placement if it hasn
                                't been processed or
                                shipped.</li>                       </ul>
                    </li>

                    <li>
                        <strong>4.2 How to Cancel:</strong>

                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Use the “My Orders” dashboard, or</li>
                            <li>Email support@kutoot.com with your order details.</li>

                        </ul>
                    </li>

                    <li>
                        <strong>4.3 Post-Dispatch:</strong>
                        <p>Orders cannot be cancelled once shipped but may be eligible for return (see Section 3).</p>

                    </li>
                    <li>
                        <strong>4.4 Refund Timeline:</strong>
                        <p>Valid cancellations will be refunded as Kutoot Coins within 5–7 business days..</p>

                    </li>

                </ul>

            ),
        },
        {
            title: "   Lucky Draw Entries – Non-Cancellable & Non-Refundable",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>5.1 Nature of Entry:</strong>

                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Lucky Draw entries are free promotional tokens awarded upon qualifying purchases,
                                campaigns, or Coin redemptions, governed by the [Lucky Draw Terms].</li>


                        </ul>
                    </li>

                    <li>
                        <strong>5.2 Final and Irrevocable</strong>

                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Entries are non-refundable, non-cancellable, and non-transferable.</li>
                            <li>No compensation or substitute will be provided for unused or expired entries.</li>
                        </ul>
                    </li>
                </ul>

            ),
        },
        {
            title: "Failed Transactions & Technical Errors",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>6.1 When to Report:</strong>
                        <p>If you paid but did not receive Kutoot Coins, email support@kutoot.com within 48 hours
                            with:</p>

                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Transaction ID / payment reference</li>
                            <li>Payment method & date</li>
                            <li>Screenshot or confirmation message</li>

                        </ul>
                    </li>

                    <li>
                        <strong>6.2 Resolution Process</strong>

                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Our team will respond within 5 business days.</li>
                            <li>Upon validation, we will either:<br /> (a) Credit the missing Coins to your Kutoot wallet, or<br /> (b) Refund the payment to the original method.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>6.3 Timeline for Refunds:</strong>
                        <p>All approved refunds for failed transactions will be processed within 7–10 business days.</p>


                    </li>

                    <li>
                        <strong>6.4 Denials & Appeals</strong>
                        <p>If a refund is denied, you may appeal by emailing legal@kutoot.com within 7 calendar
                            days. Our legal team will respond within 10 business days.</p>

                    </li>
                </ul>

            ),
        },
        {
            title: "Fraud, Abuse & Policy Violations",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>7.1 Detection & Action:</strong>
                        <p>Kutoot reserves the right to withhold refunds and suspend accounts in case of:</p>

                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Fraudulent transactions or chargebacks</li>
                            <li>False return claims</li>
                            <li>Abuse of campaigns, coins, or platform features</li>
                            <li>Misrepresentation or impersonation</li>
                        </ul>
                    </li>

                    <li>
                        <strong>7.2 Appeal Process</strong>

                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Users will be notified by email.</li>
                            <li>Appeals may be filed within 15 calendar days to legal@kutoot.com.</li>
                            <li>A final decision will be issued within 15 business days.</li>
                        </ul>
                    </li>
                </ul>

            ),
        },
        {
            title: " Amendments to This Policy",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>8.1 Scheduled Updates:</strong>


                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>Kutoot may modify this Policy periodically.</li>
                            <li>Users will receive notice via email, app, or banner at least 7 calendar days before any
                                changes take effect.</li>

                        </ul>
                    </li>

                    <li>
                        <strong>8.2 Urgent Updates</strong>
                        <p>In cases of fraud, compliance orders, or system vulnerabilities, changes may be enforced
                            immediately with 48-hour notification and justification.</p>

                    </li>
                </ul>

            ),
        },
            {
            title: "  Governing Law & Dispute Resolution",
            content: (
                <ul className="mb-4 mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
                            <li>This Policy is governed by the laws of India, specifically the Consumer Protection Act,
2019, and related rules.</li>
                            <li>Any disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru,
Karnataka.</li>
          <li>Users are encouraged to resolve concerns by contacting support@kutoot.com. We
aim to resolve complaints within 21 business days, extendable to 30 days for complex
issues.</li>

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
            title: "Disclaimer",
            content: (
                <p className="mb-4 mt-2">
                   This Policy is designed to meet regulatory standards and enhance user understanding. It
does not substitute formal legal advice. Merchant-specific policies are shown at checkout
or product listing pages.
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
                        Return, Refund & Cancellation Policy
                    </h1>
                    <p className="italic text-black text-sm mt-2">
                        Effective Date: July 18, 2025 | Version: 2.0 | Last Updated: July 18, 2025 – 02:50 PM IST
                    </p>

                </header>


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

export default ReturnRefund;
