


"use client";
import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

const CareerPage = () => {


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
                        CAREERS AT KUTOOT:
                        SHOP, WIN, GIVE
                    </h1>
                    <p>Join a Mission-Driven E-Commerce Innovator</p>


                </header>
                <div
                    className="space-y-8 text-sm lg:text-base leading-relaxed"
                    style={{
                        margin: "0 auto",      // centers the block horizontally
                        maxWidth: "1200px",     // keeps content readable
                        textAlign: "left"      // ensures text stays left aligned
                    }}
                >
                    <p className="mt-4"><strong> Careers at Kutoot</strong>
                    </p>
                    <p >At Kutoot Innovations Pvt. Ltd., we’re on an exciting journey to build a rewards-driven e-
                        commerce ecosystem that not only surprises users but also redefines the shopping
                        experience and makes a meaningful social impact. Our vision is simple yet profound: Shop.
                        Win. Give.<br />
                        We’re not just another tech company. We’re a team of dreamers, builders, and doers who are
                        passionate about creating wow moments for our users while developing a platform capable
                        of reaching millions.</p>
                    <p className="mt-4"><strong> 🌟 Why Work With Us?</strong>
                    </p>
                    <ul>
                        <li>(a) Impactful Work – Be part of a mission-driven company where every feature launched
                            makes a difference, creates joy, and supports social good.</li>
                        <li>(b) Innovation First – Work on cutting-edge solutions in e-commerce, gamification, digital
                            rewards, and large-scale platform development.</li>
                        <li>(c) Startup Culture – Experience flat hierarchies, open discussions, and fast decision-
                            making. Your ideas will matter from day one.</li>
                        <li>(d) Growth & Learning – With rapid scaling comes rapid growth — for the company and your
                            career.</li>
                    </ul>

                    <p className="mt-4"><strong>🚀 We’re Hiring Across:</strong>
                    </p>
                    <ul>
                        <li>(a) Technology & Development – Engineers, product managers, data scientists.</li>
                        <li>(b) Design & Creative – UI/UX designers, motion graphics experts, storytellers.</li>
                        <li>(c) Marketing & Growth – Digital marketers, campaign strategists, brand builders.</li>
                        <li>(d) Operations & Partnerships – Vendor managers, NGO liaisons, business development
                            leads.</li>
                        <li>(e) Customer Success – Support executives, community managers.</li>
                    </ul>
                    <p className="mt-4"><strong> 💡 How to Apply</strong>
                    </p>
                    <p>Think you can bring value to Kutoot? We’d love to hear from you!</p>
                    <p className="mt-2">📩 Send your resume and portfolio (if applicable) to careers@kutoot.com with the subject
                        line: “Application – [Role Name]” .</p>
                    <p className="mt-2">✨ At Kutoot, your work won’t just be a job — it will be a surprise-filled journey. Come build the
                        future of shopping, winning, and giving with us.</p>

                </div>
                {/* Footer */}
                <footer className="text-center text-xs text-black pt-6 border-t mt-8">
                    <p>Kutoot Innovations Pvt. Ltd. © 2025. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default CareerPage;
