import React, { useState, useEffect, useRef } from "react";
const Login = () => {
  // State to track which social login button is active
  const [activeButton, setActiveButton] = useState(null);
  // State to track if OTP has been sent
  const [otpSent, setOtpSent] = useState(false);
  // State to store email/mobile (optional, for validation)
  const [inputValue, setInputValue] = useState("");
  // State to store OTP value
  const [otpValue, setOtpValue] = useState("");
  // State to track if OTP is visible or hidden
  const [otpVisible, setOtpVisible] = useState(false);
  // State for resend OTP timer
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  // State to track if timer is active
  const [timerActive, setTimerActive] = useState(false);
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State to track if social login is in progress
  const [socialLoginInProgress, setSocialLoginInProgress] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Ref for timeout
  const timeoutRef = useRef(null);

  // Reset all states to initial values
  const resetState = () => {
    setActiveButton(null);
    setOtpSent(false);
    setInputValue("");
    setOtpValue("");
    setOtpVisible(false);
    setTimer(300);
    setTimerActive(false);
    setIsLoggedIn(false);
    setSocialLoginInProgress(false);

    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.com$/i.test(email);

  const isValidPhone = (phone) =>
    /^\d{10}$/.test(phone);

  const isValid = isValidEmail(inputValue) || isValidPhone(inputValue);

  // Handle Send OTP click  
  const handleSendOtp = async () => {
    // Validate input before sending OTP
    if (!isValidEmail(inputValue) && !isValidPhone(inputValue)) {
      setError("Please enter valid email or number");
      return; // stop function here
    }

    setError(""); // clear error if valid

    try {
      const res = await fetch("https://kutoot.bigome.com/api/logintrigger", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier: inputValue }),
      });

      if (!res.ok) throw new Error("Failed to send OTP");

      setOtpSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setOtpValue(e.target.value);
    setError("");
    setSuccessMessage("");
  };

  // Step 2: Verify OTP & log in
  const handleLogin = async () => {
    if (!otpValue.trim()) {
      setError("Please enter OTP");
      return;
    }

    setError("");
    try {
      const res = await fetch("https://kutoot.bigome.com/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: inputValue,
          otp: otpValue,
        }),
      });

      if (!res.ok) throw new Error("OTP verification failed");

      const data = await res.json();
      console.log("OTP verified successfully", data);
      setSuccessMessage("OTP verified successfully!");
    } catch (err) {
      console.error(err);
      setError("OTP verification failed");
    }
  };

  // Handle Social Login click
  const handleSocialLogin = (provider) => {
    setActiveButton(provider);
    setSocialLoginInProgress(true);
    console.log(`Logging in with ${provider}`);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a timeout to simulate login process and then show welcome screen
    timeoutRef.current = setTimeout(() => {
      // Here you would typically make an API call to authenticate with the social provider
      setIsLoggedIn(true); // Set logged in state to true
      setSocialLoginInProgress(false);
    }, 500); // 500ms delay to show the button state change
  };

  // Handle Resend OTP click
  const handleResendOtp = () => {
    if (inputValue.trim()) {
      setTimer(300); // Reset timer to 5 minutes
      setTimerActive(true);
      // Here you would typically make an API call to resend the OTP
      console.log("Resending OTP to:", inputValue);
    }
  };

  // Timer effect
  useEffect(() => {
    let interval;

    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setTimerActive(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timer]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Format timer to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // X icon component
  const XIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{
        cursor: 'pointer'
      }}
    >
      <path
        d="M1 1L15 15M15 1L1 15"
        stroke="#3B322B"
        strokeWidth="0.7"
      />
    </svg>
  );

  // Eye icon component
  const EyeIcon = ({ visible }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        cursor: 'pointer'
      }}
      onClick={() => setOtpVisible(!visible)}
    >
      {visible ? (
        // Eye open icon
        <>
          <path
            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            fill="#3B322B"
          />
        </>
      ) : (
        // Eye closed icon
        <>
          <path
            d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
            fill="#3B322B"
          />
        </>
      )}
    </svg>
  );

  // Render Welcome screen if logged in
  if (isLoggedIn) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          background: "#f0f0f0",
          position: "relative",
        }}
      >
        {/* Background Image Container */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "752px",
            height: "400px",
          }}
        >
          {/* Background Image */}
          <img
            src="/images/loginpage/rectangle.png"
            alt="Welcome Background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* X icon in top-right corner of rectangle */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
              zIndex: 10,
            }}
            onClick={resetState}
          >
            <XIcon />
          </div>
        </div>

        {/* Welcome content */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            width: "100%",
            maxWidth: "500px",
            textAlign: "center",
            zIndex: 5,
          }}
        >
          {/* Welcome! text */}
          <div
            style={{
              color: "#3B322B",
              fontFamily: '"Zurich Extra Black"',
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: "900",
              lineHeight: "26px",
              letterSpacing: "-0.36px",
            }}
          >
            Welcome!
          </div>

          {/* Subtitle text */}
          <div
            style={{
              color: "#3B322B",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "-0.2px",
            }}
          >
            Keep Shopping and Unlock Exciting Rewards.
          </div>

          {/* Kutoot Logo */}
          <img
            src="/images/loginpage/kutoot.png"
            alt="Kutoot Logo"
            style={{
              width: "120px",
              height: "auto",
              marginTop: "90px",
            }}
          />
        </div>
      </div>
    );
  }

  // Render Login form if not logged in
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background: "#f0f0f0",
        position: "relative",
      }}
    >
      {/* Background Image Container */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "752px",
          height: otpSent ? "450px" : "400px",
        }}
      >
        {/* Background Image */}
        <img
          src="/images/loginpage/rectangle.png"
          alt="Login Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* X icon in top-right corner of rectangle */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            cursor: "pointer",
            zIndex: 10,
          }}
          onClick={resetState}
        >
          <XIcon />
        </div>
      </div>

      {/* Left-side content box */}
      <div
        style={{
          border: "1px solid #EA6B1E",
          borderRadius: "12px",
          background: "#FFFDF2",
          backdropFilter: "blur(7.5px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          flexShrink: 0,
          width: "445px",
          height: otpSent ? "auto" : "368px", // Adjust height for OTP screen
          padding: "20px",
          position: "absolute",
          left: "calc(50% - 350px)",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 5,
        }}
      >
        {/* Log in with Kutoot */}
        <div
          style={{
            color: "#3B322B",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "26px",
            letterSpacing: "-0.48px",
          }}
        >
          Log in with Kutoot
        </div>
        {/* --- OTP NOT SENT YET --- */}
        {!otpSent && (
          <>
            {/* Input field */}
            <input
              type="text"
              placeholder="Enter your email ID or mobile number*"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (touched) {
                  // Validate live if already touched
                  if (!isValidEmail(e.target.value) && !isValidPhone(e.target.value)) {
                    setError("Please enter valid email or number");
                  } else {
                    setError("");
                  }
                }
              }}
              onBlur={() => setTouched(true)} // Mark as touched when leaving field
              style={{
                border: "1.055px solid #DEDEDE",
                borderRadius: "8px",
                background: "#FFF",
                height: "40px",
                padding: "16.88px 12.66px",
                width: "100%",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "400",
                letterSpacing: "-0.14px",
              }}
            />
            {touched && error && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {error}
              </p>
            )}
            <style jsx>{`
              input::placeholder {
                color: #64646499;
              }
            `}</style>
            {/* OTP message */}
            {isValid && (
              <div
                style={{
                  color: "#3B322B",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "26px",
                  letterSpacing: "-0.28px",
                }}
              >
                We will send you a magic OTP to unlock your world
              </div>
            )}
            {/* Send OTP button (color changes after click) */}
            <button
              onClick={handleSendOtp}
              disabled={!isValid} // Optional: disable click when invalid
              style={{
                border: "none",
                borderRadius: "30px",
                background: isValid ? "#EA6B1E" : "#909090", // Orange if valid, grey if invalid
                display: "flex",
                width: "405px",
                height: "44px",
                padding: "12.006px 20.01px",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
                cursor: isValid ? "pointer" : "not-allowed", // Change cursor style
              }}
            >
              <span
                style={{
                  color: "#FFF",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "12px",
                  letterSpacing: "-0.24px",
                }}
              >
                Send OTP
              </span>
            </button>

            {/* OR Separator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              <hr
                style={{
                  flex: "1",
                  height: "1px",
                  backgroundColor: "#CBC8C9",
                  border: "none",
                }}
              />
              <span
                style={{
                  color: "#828282",
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "14px",
                  letterSpacing: "1.5px",
                }}
              >
                OR
              </span>
              <hr
                style={{
                  flex: "1",
                  height: "1px",
                  backgroundColor: "#CBC8C9",
                  border: "none",
                }}
              />
            </div>
            {/* Social Login Buttons */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              {/* Google Button */}
              <button
                onClick={() => handleSocialLogin("google")}
                disabled={socialLoginInProgress}
                style={{
                  borderRadius: "8px",
                  border: activeButton === "google" ? "0.6px solid #3B322B" : "0.6px solid #3B322B",
                  background: activeButton === "google" ? "#3B322B" : "#FFFDF2",
                  display: "flex",
                  width: "195px",
                  height: "40px",
                  padding: "8px 12px",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  opacity: socialLoginInProgress && activeButton !== "google" ? 0.7 : 1,
                }}
              >
                <img
                  src="/images/loginpage/google.png"
                  alt="Google"
                  style={{ width: "20px", height: "20px" }}
                />
                <span
                  style={{
                    color: activeButton === "google" ? "#FFF" : "#3B322B",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  Continue with Google
                </span>
              </button>
              {/* Apple Button */}
              <button
                onClick={() => handleSocialLogin("apple")}
                disabled={socialLoginInProgress}
                style={{
                  borderRadius: "8px",
                  border: activeButton === "apple" ? "0.6px solid #3B322B" : "0.6px solid #3B322B",
                  background: activeButton === "apple" ? "#3B322B" : "#FFFDF2",
                  display: "flex",
                  width: "195px",
                  height: "40px",
                  padding: "8px 12px",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  opacity: socialLoginInProgress && activeButton !== "apple" ? 0.7 : 1,
                }}
              >
                <img
                  src="/images/loginpage/apple.png"
                  alt="Apple"
                  style={{ width: "20px", height: "20px" }}
                />
                <span
                  style={{
                    color: activeButton === "apple" ? "#FFF" : "#3B322B",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  Continue with Apple
                </span>
              </button>
              {/* Facebook Button */}
              <button
                onClick={() => handleSocialLogin("facebook")}
                disabled={socialLoginInProgress}
                style={{
                  borderRadius: "8px",
                  border: activeButton === "facebook" ? "0.6px solid #3B322B" : "0.6px solid #3B322B",
                  background: activeButton === "facebook" ? "#3B322B" : "#FFFDF2",
                  display: "flex",
                  width: "195px",
                  height: "40px",
                  padding: "8px 12px",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  opacity: socialLoginInProgress && activeButton !== "facebook" ? 0.7 : 1,
                }}
              >
                <img
                  src="/images/loginpage/facebook.png"
                  alt="Facebook"
                  style={{ width: "20px", height: "20px" }}
                />
                <span
                  style={{
                    color: activeButton === "facebook" ? "#FFF" : "#3B322B",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  Continue with Facebook
                </span>
              </button>
              {/* X Button */}
              <button
                onClick={() => handleSocialLogin("x")}
                disabled={socialLoginInProgress}
                style={{
                  borderRadius: "8px",
                  border: activeButton === "x" ? "0.6px solid #3B322B" : "0.6px solid #3B322B",
                  background: activeButton === "x" ? "#3B322B" : "#FFFDF2",
                  display: "flex",
                  width: "195px",
                  height: "40px",
                  padding: "8px 12px",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  opacity: socialLoginInProgress && activeButton !== "x" ? 0.7 : 1,
                }}
              >
                <img
                  src="/images/loginpage/x.png"
                  alt="X"
                  style={{ width: "20px", height: "20px" }}
                />
                <span
                  style={{
                    color: activeButton === "x" ? "#FFF" : "#3B322B",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  Continue with X
                </span>
              </button>
            </div>
          </>
        )}
        {/* --- AFTER OTP SENT --- */}
        {otpSent && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            {/* Display the entered email/mobile in a styled input */}
            <input
              type="text"
              value={inputValue}
              readOnly // Make it read-only
              style={{
                border: "1.055px solid #DEDEDE",
                borderRadius: "8px",
                background: "#FFF",
                height: "40px",
                padding: "16.88px 12.66px",
                width: "100%",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "400",
                letterSpacing: "-0.14px",
                color: "#646464",
              }}
            />
            {/* Enter OTP input with eye icon */}
            <div style={{ width: "100%", margin: "0 auto" }}>
              {/* OTP input */}
              <input
                type="text"
                placeholder="Enter OTP"
                value={otpValue}
                onChange={handleChange}
                style={{
                  border: "1.055px solid #DEDEDE",
                  borderRadius: "8px",
                  background: "#FFF",
                  height: "40px",
                  padding: "16.88px 12.66px",
                  width: "100%",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "-0.14px",
                }}
              />

              {/* Resend OTP & Timer */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                {/* Error / Success messages */}
                <div>
                  {error && <p style={{ color: "red", marginBottom: "8px" }}>{error}</p>}
                  {successMessage && (
                    <p style={{ color: "green", marginBottom: "8px" }}>{successMessage}</p>
                  )}
                </div>

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px"
                }}>
                <div style={{ color: "#3B322B" }}>
                  {timerActive ? `OTP in ${timer}s` : ""}
                </div>

                <button
                  onClick={handleResendOtp}
                  disabled={timerActive}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#EA6B1E",
                    cursor: timerActive ? "not-allowed" : "pointer",
                    textDecoration: "underline",
                    fontWeight: 700,
                    padding: 0,
                  }}
                >
                  {timerActive ? "Resend" : "Resend OTP"}
                </button>
                </div>
              </div>

              {/* Login button */}
              <button
                onClick={handleLogin}
                disabled={otpValue.length === 0 || loading}
                style={{
                  width: "100%",
                  padding: "10px",
                  background: otpValue.length > 0 ? "#EA6B1E" : "#DEDEDE",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: otpValue.length > 0 ? "pointer" : "not-allowed",
                }}
              >
                {loading ? "Verifying..." : "Login"}
              </button>
            </div>
            {/* OR Separator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              <hr
                style={{
                  flex: "1",
                  height: "1px",
                  backgroundColor: "#CBC8C9",
                  border: "none",
                }}
              />
              <span
                style={{
                  color: "#828282",
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "14px",
                  letterSpacing: "1.5px",
                }}
              >
                OR
              </span>
              <hr
                style={{
                  flex: "1",
                  height: "1px",
                  backgroundColor: "#CBC8C9",
                  border: "none",
                }}
              />
            </div>
            {/* Social Login Buttons */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              {/* Google Button */}
              <button
                onClick={() => handleSocialLogin("google")}
                disabled={socialLoginInProgress}
                style={{
                  borderRadius: "8px",
                  border: activeButton === "google" ? "0.6px solid #3B322B" : "0.6px solid #3B322B",
                  background: activeButton === "google" ? "#3B322B" : "#FFFDF2",
                  display: "flex",
                  width: "195px",
                  height: "40px",
                  padding: "8px 12px",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  opacity: socialLoginInProgress && activeButton !== "google" ? 0.7 : 1,
                }}
              >
                <img
                  src="/images/loginpage/google.png"
                  alt="Google"
                  style={{ width: "20px", height: "20px" }}
                />
                <span
                  style={{
                    color: activeButton === "google" ? "#FFF" : "#3B322B",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  Continue with Google
                </span>
              </button>
              {/* Apple Button */}
              <button
                onClick={() => handleSocialLogin("apple")}
                disabled={socialLoginInProgress}
                style={{
                  borderRadius: "8px",
                  border: activeButton === "apple" ? "0.6px solid #3B322B" : "0.6px solid #3B322B",
                  background: activeButton === "apple" ? "#3B322B" : "#FFFDF2",
                  display: "flex",
                  width: "195px",
                  height: "40px",
                  padding: "8px 12px",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  opacity: socialLoginInProgress && activeButton !== "apple" ? 0.7 : 1,
                }}
              >
                <img
                  src="/images/loginpage/apple.png"
                  alt="Apple"
                  style={{ width: "20px", height: "20px" }}
                />
                <span
                  style={{
                    color: activeButton === "apple" ? "#FFF" : "#3B322B",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  Continue with Apple
                </span>
              </button>
              {/* Facebook Button */}
              <button
                onClick={() => handleSocialLogin("facebook")}
                disabled={socialLoginInProgress}
                style={{
                  borderRadius: "8px",
                  border: activeButton === "facebook" ? "0.6px solid #3B322B" : "0.6px solid #3B322B",
                  background: activeButton === "facebook" ? "#3B322B" : "#FFFDF2",
                  display: "flex",
                  width: "195px",
                  height: "40px",
                  padding: "8px 12px",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  opacity: socialLoginInProgress && activeButton !== "facebook" ? 0.7 : 1,
                }}
              >
                <img
                  src="/images/loginpage/facebook.png"
                  alt="Facebook"
                  style={{ width: "20px", height: "20px" }}
                />
                <span
                  style={{
                    color: activeButton === "facebook" ? "#FFF" : "#3B322B",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  Continue with Facebook
                </span>
              </button>
              {/* X Button */}
              <button
                onClick={() => handleSocialLogin("x")}
                disabled={socialLoginInProgress}
                style={{
                  borderRadius: "8px",
                  border: activeButton === "x" ? "0.6px solid #3B322B" : "0.6px solid #3B322B",
                  background: activeButton === "x" ? "#3B322B" : "#FFFDF2",
                  display: "flex",
                  width: "195px",
                  height: "40px",
                  padding: "8px 12px",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  opacity: socialLoginInProgress && activeButton !== "x" ? 0.7 : 1,
                }}
              >
                <img
                  src="/images/loginpage/x.png"
                  alt="X"
                  style={{ width: "20px", height: "20px" }}
                />
                <span
                  style={{
                    color: activeButton === "x" ? "#FFF" : "#3B322B",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  Continue with X
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Right-side content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "calc(50% + 150px)",
          transform: "translateY(-50%)",
          color: "#3B322B",
          fontFamily: "Poppins",
          textAlign: "left",
          zIndex: 5,
        }}
      >
        <p
          style={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "800",
            lineHeight: "26px",
            color: "#3B322B",
          }}
        >
          Live your
        </p>
        <p
          style={{
            fontFamily: '"Zurich Extra Black"',
            fontSize: "32px",
            fontWeight: "900",
            lineHeight: "26px",
            letterSpacing: "-0.32px",
            color: "#3B322B",
          }}
        >
          Dream Life
        </p>
        <p
          style={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "800",
            lineHeight: "26px",
            color: "#3B322B",
          }}
        >
          One win at a time
        </p>
        <img
          src="/images/loginpage/kutoot.png"
          alt="Kutoot Logo"
          style={{
            width: "120px",
            height: "auto",
            marginBottom: "-250px",
            color: "#3B322B",
          }}
        />
      </div>
    </div>
  );
};
export default Login;