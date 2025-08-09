import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width,
        background: "#f0f0f0", // Optional: Background color for better visibility
        position: "relative", // To allow positioning of child elements
      }}
    >
      {/* Background Image */}
      <img
        src="/images/loginpage/rectangle.png"
        alt="Login Background"
        style={{
          position: "absolute", // Position the image absolutely
          top: "50%", // Center vertically
          left: "50%", // Center horizontally
          transform: "translate(-50%, -50%)", // Center both horizontally and vertically
          width: "752px", // Adjust the width as needed
          height: "400px", // Maintain aspect ratio
          objectFit: "cover", // Ensure the image covers the area
        }}
      />

      {/* Left-side content box */}
      <div
        style={{
          border: "1px solid #EA6B1E", // Border color
          borderRadius: "12px", // Border radius
          background: "#FFFDF2", // Background color
          backdropFilter: "blur(7.5px)", // Blur effect
          display: "flex",
          flexDirection: "column", // Column layout
          alignItems: "flex-start", // Align items to the start (left)
          gap: "10px", // Gap between elements
          flexShrink: 0, // Prevent shrinking
          width: "445px", // Width
          height: "368px", // Height
          padding: "20px", // Padding
          position: "absolute", // Position the box absolutely
          left: "calc(50% - 350px)", // Move slightly to the left
          top: "50%", // Center vertically
          transform: "translateY(-50%)", // Center vertically
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

        {/* Input field */}
        <input
          type="text"
          placeholder="Enter your email ID or mobile number*"
          style={{
            border: "1.055px solid #DEDEDE",
            borderRadius: "8px",
            background: "#FFF",
            display: "flex",
            height: "40px",
            padding: "16.88px 12.66px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: "400",
            letterSpacing: "-0.14px",
            "::placeholder": {
              // Style for the placeholder text
              color: "#64646499", // Semi-transparent gray
            },
          }}
        />

        {/* OTP message */}
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

        {/* Send OTP button */}
        <button
          style={{
            border: "none",
            borderRadius: "30px",
            background: "#909090",
            display: "flex",
            width: "405px",
            height: "44px",
            padding: "12.006px 20.01px",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
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
            style={{
              borderRadius: "8px",
              border: "0.6px solid #3B322B",
              display: "flex",
              width: "195px",
              height: "40px",
              padding: "8px 12px",
              alignItems: "center",
              gap: "8px",
              background: "#FFFDF2",
              cursor: "pointer",
            }}
          >
            <img
              src="/images/loginpage/google.png"
              alt="Google"
              style={{ width: "20px", height: "20px" }}
            />
            <span
              style={{
                color: "#3B322B",
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
            style={{
              borderRadius: "8px",
              border: "0.6px solid #3B322B",
              display: "flex",
              width: "195px",
              height: "40px",
              padding: "8px 12px",
              alignItems: "center",
              gap: "8px",
              background: "#FFFDF2",
              cursor: "pointer",
            }}
          >
            <img
              src="/images/loginpage/apple.png"
              alt="Apple"
              style={{ width: "20px", height: "20px" }}
            />
            <span
              style={{
                color: "#3B322B",
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
            style={{
              borderRadius: "8px",
              border: "0.6px solid #3B322B",
              display: "flex",
              width: "195px",
              height: "40px",
              padding: "8px 12px",
              alignItems: "center",
              gap: "8px",
              background: "#FFFDF2",
              cursor: "pointer",
            }}
          >
            <img
              src="/images/loginpage/facebook.png"
              alt="Facebook"
              style={{ width: "20px", height: "20px" }}
            />
            <span
              style={{
                color: "#3B322B",
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
            style={{
              borderRadius: "8px",
              border: "0.6px solid #3B322B",
              display: "flex",
              width: "195px",
              height: "40px",
              padding: "8px 12px",
              alignItems: "center",
              gap: "8px",
              background: "#FFFDF2",
              cursor: "pointer",
            }}
          >
            <img
              src="/images/loginpage/x.png"
              alt="X"
              style={{ width: "20px", height: "20px" }}
            />
            <span
              style={{
                color: "#3B322B",
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

      {/* Right-side content */}
      <div
        style={{
          position: "absolute", // Position the content absolutely
          top: "50%", // Center vertically
          left: "calc(50% + 150px)", // Position to the right of the left-side box
          transform: "translateY(-50%)", // Center vertically
          color: "#3B322B", // Text color
          fontFamily: "Poppins", // Font family
          textAlign: "left", // Center-align the text
        }}
      >
        <p
          style={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "800",
            lineHeight: "26px",
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
          }}
        />
      </div>
    </div>
  );
};

export default Login;
