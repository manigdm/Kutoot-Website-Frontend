"use client";

import "./LuckyDraw.scss";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import apiRequest from "@/utils/apiRequest";
import auth from "@/utils/auth";

const LuckyDrawCoupons = () => {
  const token = auth()?.access_token;
  const searchParams = useSearchParams();
  const [allcoupons, setAllCoupons] = useState([]);
  const [campaignData, setCampaignData] = useState(null);

  const id = searchParams.get("id");

  useEffect(() => {
    if (id && token) {
      apiRequest
        .purchaseDetails(id, token)
        .then((res) => {
          setCampaignData(res.data.data);
          setAllCoupons(res.data.data.coupons || []);
        })
        .catch((err) => {
          console.error("Error fetching purchase details:", err);
        });
    }
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
              <div className="coupon-code">
                <span>COUPON CODE</span>
                <strong>
                  {coupon?.coupon_code?.match(/.{1,2}/g)?.join(" ")}
                </strong>
              </div>
              <div className="validity">
                📅 Valid until:{" "}
                <strong>
                  {coupon?.coupon_expires &&
                    new Date(coupon.coupon_expires).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })}
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

export default LuckyDrawCoupons;