import React from "react";
import Footer from "@/components/home/components/Footer/Footer";
import { FaArrowRight } from "react-icons/fa";

const Campaign = () => {

  const prizeHighlights = [
    {
      title: "1340cc inline-four engine",
      description: "6-speed manual transmission",
      image: "images/campaignpage/tick.png",
    },
    {
      title: "Electronic rider aids",
      description: "Suzuki Intelligent Ride System",
      image: "images/campaignpage/tick.png",
    },
    {
      title: "Mileage: 18 kmpl",
      description: "20L fuel tank",
      image: "images/campaignpage/tick.png",
    },
    {
      title: "Better mileage than 94% of superbikes",
      description: "",
      image: "images/campaignpage/tick.png",
    },
    {
      title: "Top speed: 312 km/h",
      description: "0-100 km/h in 3.2 seconds",
      image: "images/campaignpage/tick.png",
    },
  ];

  // Data for the new pricing cards
  const pricingTiers = [
    {
      label: null,
      title: "Ignition Pack",
      subtitle: "Begin Your Ride",
      spend: "20",
      coins: "80",
      coupons: "2",
      costPerCoupon: "10.00",
      isHighlighted: false,
      highlightColor: null,
      icon: "images/campaignpage/pic1.png",
    },
    {
      label: null,
      title: "Quick Shift",
      subtitle: "Boost Start",
      spend: "50",
      coins: "200",
      coupons: "12",
      costPerCoupon: "4.17",
      isHighlighted: false,
      highlightColor: null,
      icon: "images/campaignpage/pic2.png",
    },
    {
      label: "Fan Favorite",
      title: "Most Popular",
      subtitle: "Top Pick by Riders",
      spend: "100",
      coins: "400",
      coupons: "28",
      costPerCoupon: "3.57",
      isHighlighted: true,
      highlightColor: "#EBC500",
      icon: "images/campaignpage/pic3.png",
    },
    {
      label: "Smart Rider Choice",
      title: "Super Saver",
      subtitle: "Maximum Mileage Tier",
      spend: "250",
      coins: "1000",
      coupons: "100",
      costPerCoupon: "2.50",
      isHighlighted: true,
      highlightColor: "#EBC500",
      icon: "images/campaignpage/pic4.png",
    },
    {
      label: "Smartest Spend",
      title: "Best Value",
      subtitle: "Top Speed & Power Tier",
      spend: "500",
      coins: "2000",
      coupons: "250",
      costPerCoupon: "2.00",
      isHighlighted: true,
      highlightColor: "#EBC500",
      icon: "images/campaignpage/pic5.png",
    },
  ];

  const getLabelIcon = () => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "#FFF" }}
      >
        <path d="M11 19v-5H6l7-10v5h5z" />
      </svg>
    );
  };

  return (
    <div style={{ paddingTop: "150px", textAlign: "center" }}>
      {/* Title */}
      <h1
        style={{
          color: "#3B322B",
          fontFamily: '"Zurich Extra Black", sans-serif',
          fontSize: "52px",
          fontStyle: "normal",
          fontWeight: 900,
          lineHeight: "70px",
          letterSpacing: "-1.04px",
          marginBottom: "20px",
        }}
      >
        Suzuki Hayabusa – Worth ₹20 Lakhs
      </h1>

      {/* Subtitle */}
      <h2
        style={{
          color: "#3B322B",
          fontFamily: '"Zurich Extra Black", sans-serif',
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: 900,
          lineHeight: "48px",
          letterSpacing: "-0.64px",
          marginBottom: "16px",
        }}
      >
        Unleash the beast. More speed, more chances, more roar.
      </h2>

      {/* Description */}
      <p
        style={{
          color: "#3B322B",
          fontFamily: "Poppins, sans-serif",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "24px",
          WebkitTextStrokeWidth: "0.4px",
          WebkitTextStrokeColor: "#FFF",
          marginBottom: "40px",
        }}
      >
        Minimum Purchase: ₹20 | Bundles include Shopping Coins + Free Lucky Draw
        Coupons
      </p>

      {/* Main content with image and text */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left side image */}
        <div
          style={{
            display: "flex",
            width: "727px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "-92px",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/campaignpage/bikee.png"
            alt="Suzuki Hayabusa"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* Right side content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            maxWidth: "500px",
          }}
        >
          <h3
            style={{
              color: "#3B322B",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "18px",
              marginBottom: "16px",
            }}
          >
            Feel the power of a legend
          </h3>
          <p
            style={{
              color: "#3B322B",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "18px",
              marginBottom: "24px",
            }}
          >
            Start with just ₹20 and unlock your shot at owning the legendary
            beast on two wheels. The more you throttle up, the better your
            chances — more coins, more coupons, more speed! Climb the ranks,
            collect badges, and feel the rush — because this isn't just a draw,
            it's your race to win the Hayabusa.
          </p>

          <button className="kutoot--header__button">
                    <FaArrowRight className="kutoot--header__button-icon" />
                    Enter Now
                  </button>
        </div>
      </div>

      {/* Prize Highlights Section */}
      <div style={{ marginTop: "80px", marginBottom: "40px" }}>
        <h2
          style={{
            color: "#3B322B",
            textAlign: "center",
            fontFamily: '"Zurich Extra Black", sans-serif',
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 900,
            lineHeight: "36px",
            letterSpacing: "-0.64px",
            marginBottom: "40px",
          }}
        >
          Prize Highlights
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "24px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {prizeHighlights.map((item, index) => (
            <div
              key={index}
              style={{
                width: "195px",
                height: "147px",
                flexShrink: 0,
                borderRadius: "16px",
                background: "#FFECF0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px 16px",
                boxSizing: "border-box",
              }}
            >
              <img
                src={item.image}
                alt={`Campaign icon ${index + 1}`}
                style={{
                  width: "36px",
                  height: "36px",
                  marginBottom: "8px",
                }}
              />
              <p
                style={{
                  color: "#3B322B",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "18px",
                  margin: 0,
                  marginBottom: "4px",
                }}
              >
                {item.title}
              </p>
              {item.description && (
                <p
                  style={{
                    color: "#3B322B",
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "18px",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* New Section with Pricing Cards */}
      <div style={{ background: "#EFEFEF" }}>
        <div
          style={{
            width: "100%",
            minHeight: "1405px",
            background: "#3B322B",
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            margin: "0 auto",
            paddingTop: "40px",
            paddingBottom: "40px",
            boxSizing: "border-box",
          }}
        >
          {/* Main content goes here */}
          <p
            style={{
              color: "#FFF",
              textAlign: "center",
              fontSize: "44px",
              fontStyle: "normal",
              fontWeight: 900,
              lineHeight: "48px",
              letterSpacing: "-0.88px",
              paddingBottom: "20px",
            }}
          >
            Buy coins. Enter the draw. No extra cost.
          </p>
          <p
            style={{
              color: "#FFF",
              textAlign: "center",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
              paddingBottom: "80px",
            }}
          >
            Own the machine that commands the road.
          </p>

          {/* Pricing cards section */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "24px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                style={{
                  width: "204px",
                  height: "auto",
                  padding: tier.isHighlighted ? "4px" : "0",
                  borderRadius: "24px",
                  background: tier.isHighlighted
                    ? "linear-gradient(268deg, #AE1E3F -4.5%, #EBC500 100%)"
                    : "none",
                  boxShadow: tier.isHighlighted
                    ? "0 0 4px 0 rgba(249, 249, 249, 0.25)"
                    : "none",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "24px 16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    borderRadius: "20px",
                    background: "#FFFDF2",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Icon */}
                  <img
                    src={tier.icon}
                    alt={`Pricing tier icon ${index + 1}`}
                    style={{
                      width: "48px",
                      height: "48px",
                      marginTop: "8px",
                    }}
                  />

                  {/* Title and Subtitle */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                      alignSelf: "stretch",
                    }}
                  >
                    <p
                      style={{
                        color: "#3B322B",
                        fontFamily: "Poppins",
                        fontSize: "22px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      {tier.title}
                    </p>
                    <p
                      style={{
                        color: "#3B322B",
                        textAlign: "center",
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "14px",
                        margin: 0,
                      }}
                    >
                      {tier.subtitle}
                    </p>
                  </div>

                  <div
                    style={{
                      width: "172px",
                      height: "0.5px",
                      background: "#cfc4bc",
                    }}
                  ></div>

                  {/* Spend details */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                      alignSelf: "stretch",
                    }}
                  >
                    <p
                      style={{
                        color: "#3B322B",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "14px",
                        margin: 0,
                      }}
                    >
                      Spend (₹)
                    </p>
                    <p
                      style={{
                        color: "#3B322B",
                        textAlign: "center",
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "14px",
                        margin: 0,
                      }}
                    >
                      ₹{tier.spend}
                    </p>
                  </div>

                  <div
                    style={{
                      width: "172px",
                      height: "0.5px",
                      background: "#cfc4bc",
                    }}
                  ></div>

                  {/* Shopping Coins */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                      alignSelf: "stretch",
                    }}
                  >
                    <p
                      style={{
                        color: "#3B322B",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "14px",
                        margin: 0,
                      }}
                    >
                      Shopping Coins
                    </p>
                    <p
                      style={{
                        color: "#3B322B",
                        textAlign: "center",
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "14px",
                        margin: 0,
                      }}
                    >
                      {tier.coins}
                    </p>
                  </div>

                  <div
                    style={{
                      width: "172px",
                      height: "0.5px",
                      background: "#cfc4bc",
                    }}
                  ></div>

                  {/* Free Coupons */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                      alignSelf: "stretch",
                    }}
                  >
                    <p
                      style={{
                        color: "#3B322B",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "14px",
                        margin: 0,
                      }}
                    >
                      Free Coupons
                    </p>
                    <p
                      style={{
                        color: "#3B322B",
                        textAlign: "center",
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "14px",
                        margin: 0,
                      }}
                    >
                      {tier.coupons}
                    </p>
                  </div>

                     <div
                    style={{
                      width: "172px",
                      height: "0.5px",
                      background: "#cfc4bc",
                    }}
                  ></div>

                  {/* Per Coupon Cost */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                      alignSelf: "stretch",
                    }}
                  >
                    <p
                      style={{
                        color: "#3B322B",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "14px",
                        margin: 0,
                      }}
                    >
                      Per Coupon Cost
                    </p>
                    <p
                      style={{
                        color: "#3B322B",
                        textAlign: "center",
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "14px",
                        margin: 0,
                      }}
                    >
                      ₹{tier.costPerCoupon}
                    </p>
                  </div>

                    {/* Dotted Line */}
                  <div
                    style={{
                      width: "120%",
                      height: "1px",
                      borderBottom: "2px dashed #aba29b",
                      margin: "12px 0",
                    }}
                  ></div>

                  {/* Buy Now Button */}
                  <button
                    style={{
                      display: "flex",
                      height: "36px",
                      padding: "12.006px 20.01px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      alignSelf: "stretch",
                      borderRadius: "20px",
                      background: "#EA6B1E",
                      color: "#FFFDF2",
                      border: "none",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                      cursor: "pointer",
                      marginTop: "20px",
                    }}
                  >
                    Buy now .
                  </button>
                </div>
                {tier.label && (
                  <div
                    style={
                      tier.isHighlighted
                        ? {
                            position: "absolute",
                            top: "-12px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            width: "129px",
                            height: "24px",
                            padding: "2px 4px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4px",
                            flexShrink: 0,
                            borderRadius: "20px",
                            background:
                              "linear-gradient(268deg, #EA6B1E -4.5%, #3B322B 100%)",
                            color: "#FFF",
                            fontFamily: "Poppins",
                            fontSize: "12px",
                            fontWeight: "bold",
                            whiteSpace: "nowrap",
                          }
                        : {
                            position: "absolute",
                            top: "-12px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: tier.highlightColor,
                            color: "#3B322B",
                            fontFamily: "Poppins",
                            fontSize: "12px",
                            fontWeight: "bold",
                            padding: "4px 8px",
                            borderRadius: "10px",
                          }
                    }
                  >
                    {tier.isHighlighted && getLabelIcon(tier.label)}
                    {tier.label}
                  </div>
                )}
              </div>
            ))}
                <div>
              <p
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: '"Zurich Extra Black"',
                  fontSize: "40px",
                  fontStyle: "normal",
                  fontWeight: 900,
                  lineHeight: "48px",
                  letterSpacing: "-0.8px",
                  paddingTop: "80px",
                  paddingBottom: "16px",
                }}
              >
                Rev Up Your Chances to Win the Hayabusa!
              </p>

              <img
                src="/images/campaignpage/slider.png"
                alt="Campaign Slider"
                style={{
                  paddingTop: "50px",
                  paddingBottom: "70px",
                  margin: "0 auto",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div
              style={{
                borderRadius: "40px",
                borderBottom: "8px solid #EA6B1E",
                background: "#FFFCEA",
                display: "flex",
                width: "1008px",
                height: "108px",
                padding: "20px",
                justifyContent: "center",
                alignItems: "center",
                gap: "62px",
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  width: "1037px",
                  flexShrink: 0,
                  color: "#3B322B",
                  textAlign: "center",
                  fontFamily: '"Zurich Extra Black"',
                  fontSize: "32px",
                  fontStyle: "normal",
                  fontWeight: 900,
                  lineHeight: "36px",
                  letterSpacing: "-0.64px",
                }}
              >
                Get bonus{" "}
                <span
                  style={{
                    color: "#EA6B1E",
                    fontWeight: 900,
                    fontSize: "32px",
                    fontFamily: '"Zurich Extra Black"',
                    background:
                      "linear-gradient(90deg, #FF7000 25.04%, #AE1E3F 75.17%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Speed Badge + 5 Extra Coupons
                </span>{" "}
                when you <br /> upgrade to ₹250 or more!
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            background: "#3B322B",
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            boxShadow: "0 0 40px 0 rgba(255, 255, 255, 0.25)",
            marginTop: "-40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Campaign;