import React from "react";
import "./SubscriptionForm.scss";

const SubscriptionForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading on submit
    // Add your subscription logic here
    console.log("Form submitted!");
  };

  return (
    <div className="subscribe-container">
      <div className="text-content">
        <h2>Subscribe to Kutoot</h2>
        <p>To get exclusive benefits!</p>
      </div>

      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          aria-label="Email Address"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
