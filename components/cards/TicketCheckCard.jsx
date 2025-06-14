import React from "react";
import auth from "@/utils/auth";
import apiRequest from "@/utils/apiRequest";

const TicketCheckCard = () => {
  // Call API with token and ticket number
  const checkWinnerClaim = async (ticketNumber) => {
    const token = auth()?.access_token;
    try {
      if (token) {
        const res = await apiRequest.checkWinnerClaim(token, {coupon_code: ticketNumber});
        if (res.status === 200) {
          console.log("res", res);
        } else {
          console.error("API error:", res);
        }
      }
    } catch (err) {
      console.error("Error fetching winners:", err);
    }
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ticketNumber = formData.get("check-number1")?.trim();
    if (ticketNumber) {
      checkWinnerClaim(ticketNumber);
    } else {
      console.warn("Please enter a contest number");
    }
  };

  return (
    <div className="number-check-wrapper">
      <h3 className="title">Check My Numbers</h3>
      <p>
        Are you holding on to a winning ticket? Here&#39;s an easy way to find
        out.
      </p>
      <form className="check-number-form" onSubmit={handleSubmit}>
        <input
          type="tel"
          className="form-control mt-30 mb-30"
          name="check-number1"
          placeholder="Enter Contest No"
        />
        <div className="number-list-wrapper">
          <p>Enter Your Lottery Numbers</p>
          <div className="number-list mt-3 mb-3">
            <input
              type="text"
              style={{ width: "fit-content", borderRadius: 0 }}
              name="text1"
              placeholder="0000000000"
            />
          </div>
          <div className="nice-select select">
            <select className="border-0">
              <option>Last 7 days</option>
              <option>Last 6 days</option>
              <option>Last 5 days</option>
              <option>Last 4 days</option>
              <option>Last 3 days</option>
            </select>
          </div>
          <div className="text-center mt-100">
            <button type="submit" className="cmn-btn">
              check my numbers
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TicketCheckCard;
