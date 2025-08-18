


"use client";
import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

const Faq = () => {


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
                        Kutoot – Frequently Asked
                        Questions (FAQ)
                    </h1>


                </header>
                <div
                    className="space-y-8 text-sm lg:text-base leading-relaxed"
                    style={{
                        margin: "0 auto",      // centers the block horizontally
                        maxWidth: "1200px",     // keeps content readable
                        textAlign: "left"      // ensures text stays left aligned
                    }}
                >
                    <p className="mb-4">Welcome to the Kutoot FAQ page! Here you’ll find answers to your questions about our
                        platform, shopping with Kutoot Coins, participating in lucky draws, and more. Let’s get
                        started!</p>

                    <p className="mt-4"><strong>🛍 General</strong>
                    </p>
                    <p className="mt-2"><strong>Q1. What is Kutoot?</strong>
                    </p>
                    <p>Kutoot is a reward-driven e-commerce platform where you shop for curated products and
                        services using Kutoot Coins. With every purchase, you also receive free entries into lucky
                        draws for exciting prizes like villas, cars, bikes, gadgets, trips, and more.</p>

                    <p className="mt-2"><strong>Q2. Is Kutoot a lottery or gambling platform?</strong>
                    </p>
                    <p>. No. Kutoot is not gambling. It’s an e-commerce platform with promotional rewards. You
                        pay only for shopping, and lucky draw entries are free bonuses.</p>

                    <p className="mt-2"><strong>Q3. How does Kutoot benefit society?</strong>
                    </p>
                    <p>We donate 5% of net proceeds to verified NGOs, so every purchase supports social good.</p>

                    <p className="mt-2"><strong>Q4. Who can join Kutoot?</strong>
                    </p>
                    <p>Any Indian resident 18 years and above with a valid mobile number and ID can join.</p>




                    <p className="mt-4"><strong>💰 Kutoot Coins & Shopping</strong>
                    </p>
                    <p className="mt-2"><strong>Q5. What are Kutoot Coins?</strong>
                    </p>
                    <p>Kutoot Coins are digital credits you purchase to shop on Kutoot. They are the key to
                        shopping and earning lucky draw entries.</p>

                    <p className="mt-2"><strong>Q6. Do Kutoot Coins expire?</strong>
                    </p>
                    <p>No, your Kutoot Coins never expire as long as your account is active.</p>

                    <p className="mt-2"><strong>Q7. Can I refund my Kutoot Coins?</strong>
                    </p>
                    <p>No. Coins are non-refundable and non-transferable once purchased.</p>

                    <p className="mt-2"><strong>Q8. Where can I use Kutoot Coins?</strong>
                    </p>
                    <p>Coins can be used to shop for all products and services listed on Kutoot. Future plans
                        include redemption at partner stores.</p>


                    <p className="mt-4"><strong>🎁 Lucky Draws & Rewards</strong>
                    </p>
                    <p className="mt-2"><strong>Q9. How do I enter a lucky draw?</strong>
                    </p>
                    <p>Every coin purchase automatically gives you free entries into the running campaign. No
                        extra steps required.</p>

                    <p className="mt-2"><strong>Q10. Do I need any skills to participate in lucky draws?</strong>
                    </p>
                    <p>None. Kutoot is a pure rewards platform — no skills, no teams. Just shop, save, and win
                        prizes for free.</p>

                    <p className="mt-2"><strong>Q11. How are winners selected?</strong>
                    </p>
                    <p>Winners are chosen fairly using a live-streamed ball machine or a transparent digital
                        randomization system, with third-party auditing.</p>

                    <p className="mt-2"><strong>Q12. When will the winners be announced?</strong>
                    </p>
                    <p>Each campaign has a goal progress bar. Once the goal is reached, the draw date unlocks
                        and is publicly announced.</p>
                    <p className="mt-2"><strong>Q13. How will I know if I won?</strong>
                    </p>
                    <p>Winners are notified via SMS, email, and in their Kutoot dashboard. Results are also
                        published on the website.</p>
                    <p className="mt-2"><strong>Q14. What prizes can I win?</strong>
                    </p>
                    <p>Prizes range from luxury villas, cars, and bikes to gadgets, gold, and international trips.
                        Each campaign lists its specific prize.</p>



                    <p className="mt-4"><strong>🧾 Payments, Tax & Legal</strong>
                    </p>
                    <p className="mt-2"><strong>Q15. What payment methods does Kutoot accept?</strong>
                    </p>
                    <p>UPI, debit/credit cards, net banking, and wallets.</p>

                    <p className="mt-2"><strong>Q16. Will I get a GST invoice for coin purchases?</strong>
                    </p>
                    <p>. Yes, every transaction generates a GST-compliant invoice.</p>

                    <p className="mt-2"><strong>Q17. Is GST charged on Kutoot Coins?</strong>
                    </p>
                    <p>Yes, GST is applicable as per law.</p>

                    <p className="mt-2"><strong>Q18. Are winnings taxable?</strong>
                    </p>
                    <p>Yes. As per Income Tax Act, Section 194B, a 30% TDS is deducted on prizes above ₹10,000.
                        Winners also receive a TDS certificate.</p>


                    <p className="mt-4"><strong>🔐 Account & Security</strong>
                    </p>
                    <p className="mt-2"><strong>Q19. How do I create an account?</strong>
                    </p>
                    <p>Sign up using your mobile number or email, verify with OTP/KYC, and start shopping.</p>

                    <p className="mt-2"><strong>Q20. Can I use multiple accounts?</strong>
                    </p>
                    <p>No. Multiple accounts are prohibited and may lead to disqualification from campaigns.</p>

                    <p className="mt-2"><strong>Q21. How do I delete my account?</strong>
                    </p>
                    <p> Contact support to close your account. Please note: unused coins and entries will be
                        forfeited.</p>

                    <p className="mt-2"><strong>Q22. Is my data safe with Kutoot?</strong>
                    </p>
                    <p>Yes. Kutoot complies with the DPDP Act, 2023 and ensures all user data is encrypted,
                        never sold, and used only for platform purposes.</p>


                    <p className="mt-4"><strong>🤝 Social Impact & NGOs</strong>
                    </p>
                    <p className="mt-2"><strong>Q23. How does Kutoot support charities?</strong>
                    </p>
                    <p> 5% of net proceeds are donated to verified NGOs. Quarterly impact reports are shared
                        publicly.</p>

                    <p className="mt-2"><strong>Q24. Can I choose which NGO my purchase supports?</strong>
                    </p>
                    <p>Currently, donations are pooled and distributed across partnered NGOs. Future campaigns
                        may allow donor choices..</p>

                    <p className="mt-2"><strong>Q25. Will I get an 80G tax exemption certificate for donations?</strong>
                    </p>
                    <p> No. Donations are made directly by Kutoot as a company, not by individual users.</p>



                    <p className="mt-4"><strong>📞 Help & Support</strong>
                    </p>
                    <p className="mt-2"><strong>Q26. How do I contact Kutoot?</strong>
                    </p>
                    <p> Email us at support@kutoot.com or use the Help section in the app/website.</p>

                    <p className="mt-2"><strong>Q27. What if I face a payment or prize issue?</strong>
                    </p>
                    <p>Our grievance redressal team responds within 72 hours.</p>

                    <p className="mt-2"><strong>Q28. Can I report fraud or misuse?</strong>
                    </p>
                    <p> Yes, write to legal@kutoot.com. We have a Whistleblower Policy to ensure fair
investigation.</p>



                </div>



                {/* Footer */}
                <footer className="text-center text-xs text-black pt-6 border-t mt-8">
                    <p>Kutoot Innovations Pvt. Ltd. © 2025. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Faq;
