"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import apiRequest from "@/utils/apiRequest";
import auth from "@/utils/auth";
import LuckyDrawCoupons from "./LuckyDrawCoupons";

const ContestDetailsClient = () => {
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
    <div className="container text-center my-5">
      <section className="mt-minus-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="winner-details-wrapper bg_img">
                <div className="body">
                  <h2>Thank you for purchasing!</h2>
                  <h5 className="contest-number mt-4">
                    Total coins: {campaignData?.camp_coins_per_campaign}
                  </h5>
                  <p className="contest-date">
                    <strong>
                      Order Id: <span>#{campaignData?.razor_order_id?.replace("order_", "")}</span>
                    </strong>{" "}
                    <p>
                      {campaignData?.created_at &&
                        new Date(campaignData.created_at)
                          .toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                          })
                          .replace(",", "")}
                    </p>
                  </p>
                  <div className="line"></div>
                  <div className="btn-grp">
                    <a href="#0" className="btn-border">
                      Order Details
                    </a>
                  </div>
                </div>

                <div className="flex flex-row justify-content-center">
                  <LuckyDrawCoupons
                    allcoupons={allcoupons}
                    campaignData={campaignData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContestDetailsClient;
