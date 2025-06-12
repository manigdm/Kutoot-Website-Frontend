"use client";
import Banner from "@/components/common/Banner";
import "./LuckyDraw.scss";
import apiRequest from "@/utils/apiRequest";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import auth from "@/utils/auth";

const coupons = [
  {
    discount: "Win Big Prizes",
    title: "Summer Lucky Draw 2024",
    subtitle: "Congratulations! You're our lucky winner!",
    code: "LUCKY2024",
    validTill: "Dec 31, 2024",
    conditions: [
      "Valid for one-time use only",
      "Cannot be combined with other offers",
      "Applicable on orders above $50",
      "Non-transferable",
    ],
  },
  {
    discount: "Win Big Prizes",
    title: "Mega Jackpot Campaign",
    subtitle: "Jackpot Winner – Premium Reward",
    code: "MEGA777",
    validTill: "Jan 15, 2025",
    conditions: [
      "Exclusive premium member offer",
      "Valid for all product categories",
      "Cannot be exchanged for cash",
      "Limited time offer",
    ],
  },
  {
    discount: "Win Big Prizes",
    title: "Golden Hour Special",
    subtitle: "Golden Hour Lucky Draw Winner",
    code: "G0LD123",
    validTill: "Nov 30, 2024",
    conditions: [
      "Minimum purchase of $200 required",
      "Valid during golden hours (6–8 PM)",
      "One coupon per customer",
      "Cannot be combined with sale items",
    ],
  },
  {
    discount: "Win Big Prizes",
    title: "Golden Hour Special",
    subtitle: "Golden Hour Lucky Draw Winner",
    code: "G0LD123",
    validTill: "Nov 30, 2024",
    conditions: [
      "Minimum purchase of $200 required",
      "Valid during golden hours (6–8 PM)",
      "One coupon per customer",
      "Cannot be combined with sale items",
    ],
  },
];

const LuckyDrawCoupons = () => {
  const token = auth()?.access_token;
  const searchParams = useSearchParams();
  const [allcoupons, setAllCoupons] = useState([]);
  const [campaignData, setCampaignData] = useState(null);

  const id = searchParams.get("id");
  useEffect(() => {
    if (id && token)
      apiRequest
        .purchaseDetails(id, token)
        .then((res) => {
          setCampaignData(res.data.data);
          setAllCoupons(res.data.data.coupons || []);
        })
        .catch((err) => {
          console.error("Error fetching purchase details:", err);
        });
  }, [id]);

  return (
    <div className="coupon-section">
      <h1 className="main-title">Your Lucky Draw Coupons</h1>
      <p className="subtitle">Win a Prize</p>
      <div className="coupon-container flex-row">
        {allcoupons?.map((coupon, index) => (
          <div className="coupon-card" key={index}>
            <div className="card-header">
              <div className="icon">🏆</div>
              <div className="discount">Win Big Prizes</div>
            </div>
            <div className="card-body">
              <h2 className="coupon-title">{campaignData?.camp_title}</h2>
              {/* <p className="coupon-subtitle">{campaignData?.camp_title}</p> */}
              <div className="coupon-code">
                <span>COUPON CODE</span>
                <strong>{coupon?.coupon_code}</strong>
              </div>
              <div className="validity">
                📅 Valid until:{" "}
                <strong>
                  {coupon?.coupon_expires &&
                    new Date(coupon.coupon_expires).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit",
                      }
                    )}
                </strong>
              </div>
              <ul className="terms">
                {[
                  "Valid for one-time use only",
                  "Cannot be combined with other offers",
                  "Applicable on orders above $50",
                  "Non-transferable",
                ].map((cond, i) => (
                  <li key={i}>• {cond}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const page = () => {
  return (
    <>
      {/* Banner section here */}
      <div className="inner-hero-section" style={{ paddingBottom: 200 }}>
        <Banner
          breadcrumb={[
            ["Home", "/"],
            ["Thank You", "/"],
          ]}
        />
      </div>
      <div className="container text-center my-5">
        <section className="mt-minus-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="winner-details-wrapper bg_img">
                  <div className="left">
                    {/* <Image src={contest_1} alt="contest 1" /> */}
                  </div>
                  <div className="body">
                    <h2>Thank you for purchasing!</h2>
                    <h5 className="contest-number mt-4">Total coins: 1000</h5>
                    <p className="contest-date">
                      <strong>
                        Order Id: <span>#1234</span>
                      </strong>{" "}
                      Friday June 06, 2025
                    </p>
                    <div className="line"></div>
                    {/* <h4 className="title">Your Lucky Draw Coupons:</h4> */}
                    {/* <ul className="numbers" style={{ justifyContent: "center", gap: "10px" }}>
                        <li style={{ width: "fit-content" }}>1188239192687</li>
                        <li style={{ width: "fit-content" }}>2938749872937</li>
                        <li style={{ width: "fit-content" }}>1188239192687</li>
                        <li style={{ width: "fit-content" }}>2938749872937</li>
                      </ul> */}
                    <div className="btn-grp">
                      <a href="#0" className="btn-border">
                        Order Details
                      </a>
                      {/* <a href="#0" className="btn-border">
                            How to Claim
                        </a> */}
                    </div>
                  </div>
                  <div className="flex flex-row justify-content-center">
                    <LuckyDrawCoupons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
