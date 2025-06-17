"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import apiRequest from "../../utils/apiRequest";
import "./login.scss";

const Login = () => {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!identifier) return toast.error("Enter email or phone");
    setLoading(true);

    try {
      await apiRequest.loginTrigger({ identifier: identifier });

      router.push(`/verify-otp?identifier=${identifier}`);
    } catch (err) {
      toast.error("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login__card">
        <h2 className="login__title">WELCOME BACK</h2>
        <input
          type="text"
          placeholder="Email or Phone"
          className="login__input"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <button
          className="login__button"
          onClick={handleSendOtp}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>
      </div>
    </div>
  );
};

export default Login;
