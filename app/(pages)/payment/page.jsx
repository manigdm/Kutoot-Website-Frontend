"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./Payment.scss";
import apiRequest from "@/utils/apiRequest";
import auth from '@/utils/auth'; 

const PaymentPage = () => {
  const [paymentData, setPaymentData] = useState({});
  const router = useRouter();
  const token = auth()?.access_token;

  const handleRazorpayPayment = () => {
    const options = {
      key: "rzp_test_LrGJ9RG7cQCKns",
      amount: paymentData?.basedetails?.ticket_price,
      currency: "INR",
      name: "Kutoot",
      order_id: paymentData?.razor_order_id,
      description: `Purchase of ${paymentData?.basedetails?.title}`,
      image: "/logo.png",
      handler: async function (response) {
        console.log("Razorpay response:", response);

        try {
          const verifyPayload = {
            payment_id: response.razorpay_payment_id,
            razor_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            payment_status: 'success'
          };

          const res = await apiRequest.verifyPaymentStatus(verifyPayload, token);

          if (res) {
            sessionStorage.removeItem("paymentData");
            router.push(`/thank-you?id=${res.data?.data?.id}`);
            // router.push(`/thank-you?id=${response?.data?.data?.id}`);
          } 
        } catch (error) {
          console.error("API call error:", error);
          alert("Something went wrong. Try again.");
        }
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("paymentData"));
    console.log("data", data);
    if (data) {
      setPaymentData(data);
    }
  }, []);

  return (
    <div className="payment-container mt-200">
      <h1 className="title">Payment Summary</h1>
      <div className="card">
        <h2 className="coupon-title">{paymentData?.basedetails?.title}</h2>
        <div className="d-flex flex-row gap-4 justify-content-center align-items-center">
          <p className="coupon-subtitle font-weight-bold">
            {/* {coupon?.subtitle} */}
            <b>Total Coins:</b>&nbsp;
            {paymentData?.basedetails?.coins_per_campaign || 0}
          </p>
          <div className="text-xs">
            + {paymentData?.basedetails?.coupons_per_campaign} free coin
            {paymentData?.basedetails?.coupons_per_campaign > 1 ? "s" : ""}
          </div>
        </div>

        <div className="coupon-code mb-30">
          <span>PLAN PRICE: </span>&nbsp;
          <strong>{paymentData?.basedetails?.ticket_price}</strong>
        </div>
        <ul className="terms">
          {[1, 2, 3, 4, 5].map((num) => {
            const point = paymentData?.basedetails?.[`point${num}`];
            return point ? <li key={num}>• {point}</li> : null;
          })}
        </ul>
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
