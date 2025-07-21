import React, { useState } from "react";
import "./Testimonials.scss"; // Import the SCSS file
import CommonTitle from "@/components/common/CommonTitle";

// --- Mock Data ---
const testimonials = [
  {
    name: "Ritika S.",
    location: "Pune",
    quote:
      "“I only bought the ₹500 Smart Boost for the discounts—never imagined I’d end up winning a brand-new iPhone. Kutoot is real, and now it’s my go-to for every guilt-free splurge.”",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Aarav M.",
    location: "Mumbai",
    quote:
      "“Absolutely love the seamless experience and the incredible deals I find. This has become my favorite app for discovering new products and saving money at the same time!”",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Priya K.",
    location: "Bangalore",
    quote:
      "“Winning the grand prize was a dream come true! The platform is trustworthy, and the community is fantastic. Highly recommend to everyone looking for great value.”",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rohan D.",
    location: "Delhi",
    quote:
      "“I was skeptical at first, but after my first purchase, I was hooked. The quality of products and the excitement of the draws are unmatched. A truly unique experience.”",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Neha S.",
    location: "Chennai",
    quote:
      "“The customer support is amazing, and the app is so easy to use. I’ve won several smaller prizes and it always makes my day. It’s more than just shopping; it’s fun!”",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Vikram R.",
    location: "Hyderabad",
    quote:
      "“A fantastic concept that delivers on its promises. The smart boosts are a great way to get more value. I’m a loyal user and have recommended it to all my friends.”",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// --- Testimonial Card Component ---
const TestimonialCard = ({ name, location, quote, image }) => (
  <div className="testimonial-card">
    <img
      src={image}
      alt={`Testimonial from ${name}`}
      className="testimonial-card__image"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/256x320/e2e8f0/4a5568?text=Image+Error";
      }}
    />
    <div className="testimonial-card__initial-state">
      <div className="testimonial-card__initial-content">
        <h3>{name}</h3>
        <p>{location}</p>
      </div>
    </div>
    <div className="testimonial-card__hover-state">
      <div className="testimonial-card__hover-content">
        <div className="testimonial-card__notch"></div>
        <h3>{name}</h3>
        <p className="location">{location}</p>
        <p className="quote">{quote}</p>
      </div>
    </div>
  </div>
);

function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      <div className="text-center mt-4">
        <CommonTitle title="Winning Moments Shared by Our Users" />
        <p className="text-black">See what our lucky winners have to say</p>
      </div>
      <div className="testimonials">
        <div
          className="testimonials__carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`testimonials__track ${isPaused ? "paused" : ""}`}>
            {extendedTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonials__slide">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
