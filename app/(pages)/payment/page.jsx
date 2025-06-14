"use client";
import Script from "next/script";
import './Payment.scss'

const PaymentPage = () => {
  const plan = {
    name: "Initial Plan",
    coins: 400,
    freeCoins: 2,
    price: 100,
  };
  const handleRazorpayPayment = () => {
    const options = {
      key: "rzp_test_LrGJ9RG7cQCKns",
      amount: plan.price * 100, // in paisa
      currency: "INR",
      name: "Kutoot",
      description: `Purchase of ${plan.name}`,
      image: "/logo.png", // Your logo
      handler: function (response) {
        alert("Payment Successful!");
        console.log(response);
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    // router.push(`/thank-you?id=${response?.data?.data?.id}`);
  };

  return (
    <div className="payment-container">
      <h1 className="title">Payment Summary</h1>
      <div className="card">
        <h2>{plan.name}</h2>
        <p>Total Coins: {plan.coins}</p>
        <p>Free Coins: {plan.freeCoins}</p>
        <p className="price">₹ {plan.price}</p>
        <button className="pay-btn" onClick={handleRazorpayPayment}>
          Pay with Razorpay
        </button>
      </div>

      {/* Razorpay Script */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </div>
  );
};

export default PaymentPage;
