"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import apiRequest from "@/utils/apiRequest";
import "./otp-verify.scss";

const OtpVerifyScreen = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const identifier = searchParams.get("identifier");

  const handleOtpVerify = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await apiRequest.verifyOtp({
        identifier: identifier,
        otp: parseInt(otp),
      });
      const { is_completed } = res.data;
      localStorage.setItem("auth", JSON.stringify(res.data));
      if (is_completed === 1) {
        router.push("/");
      } else {
        router.push(`/complete-profile?identifier=${identifier}`);
      }
    } catch (err) {
      toast.error("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login__card">
        <h3 className="login__title">Verify OTP</h3>
        <input
          type="text"
          placeholder="Enter OTP"
          className="login__input"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button
          className="login__button"
          onClick={handleOtpVerify}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </div>
    </div>
  );
};

export default OtpVerifyScreen;
