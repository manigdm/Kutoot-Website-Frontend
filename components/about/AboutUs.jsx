


"use client";
import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

const AboutUs = () => {


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
            Welcome to Kutoot
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
          <p >Kutoot translates to "Surprise, " and it perfectly encapsulates the essence of our platform. We
            are a next-generation, rewards-driven e-commerce platform designed to transform every
            shopping experience into an opportunity to win life-changing prizes. With Kutoot, each coin
            you spend brings you closer not only to the items you love but also to exciting opportunities
            like luxury villas, cars, gold, gadgets, and more through our transparent lucky draws.</p>
          <p className="mt-4"><strong>   Our Philosophy: Shop. Win. Give.</strong>
          </p>
          <p className="mt-4"><strong>   Shop</strong>
          </p>
          <p>At Kutoot, you can explore a wide range of curated products and services using Kutoot Coins,
            our digital shopping credits. This innovative approach ensures a seamless shopping journey,
            providing you with the best options tailored to your preferences.</p>
          <p className="mt-4"><strong>Win</strong>
          </p>
          <p>Every purchase you make on Kutoot rewards you with free entries into our lucky reward
            draws. These draws are conducted fairly and are live-streamed to ensure complete
            transparency. It's a simple, exciting, and hassle-free way to get rewarded for your shopping.</p>
          <p className="mt-4"><strong>Give</strong>
          </p>
          <p>Kutoot believes in making a positive impact. With every purchase, you contribute to social
            good. We pledge 5% of our net proceeds to verified NGOs, helping create meaningful change
            and support thriving communities. Your shopping experience with Kutoot directly benefits
            those in need, proving that every coin spent tells a bigger story.</p>
          <p className="mt-4"><strong>Why Choose Kutoot?</strong></p>
          <ul>
            <li>No Skills Required: Kutoot offers a straightforward and enjoyable shopping experience
              with no need for special skills or teams.</li>
            <li>Infinite Surprises: Beyond just shopping, every interaction on our platform holds the
              potential for delightful surprises.</li>
            <li>Community Impact: By choosing Kutoot, you help drive social change and support
              community development.</li>
          </ul>
          <p className="mt-4">✨ Discover a world where shopping is more than just a transaction. It's about surprises,
            rewards, and making a difference — all on a single platform. Welcome to Kutoot, where every
            coin counts and every experience is enriched with possibilities.

          </p>
        </div>



        {/* Footer */}
        <footer className="text-center text-xs text-black pt-6 border-t mt-8">
          <p>Kutoot Innovations Pvt. Ltd. © 2025. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
