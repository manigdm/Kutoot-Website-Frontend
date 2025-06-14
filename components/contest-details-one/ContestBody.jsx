"use client";
import Countdown from "react-countdown";
import RendererCountdown from "../common/RendererCountdown";
import VehicleOverview from "../common/VehicleOverview";
import ContestRight from "./ContestRight";
import ContestSlider from "./ContestSlider";
import { useSearchParams } from "next/navigation";
import apiRequest from "../../utils/apiRequest";
import { useEffect, useState, useContext } from "react";
import auth from "@/utils/auth";
import { AppContext } from "../../context/context";
import { useRouter } from "next/navigation";

import "./Luckydraw.scss";

const coupons = [
  {
    discount: "",
    title: "Summer Lucky Draw 2024",
    subtitle: "Congratulations! You're our lucky winner!",
    code: "Rs. 400",
    totalCoins: 1200,
    validTill: "Dec 31, 2024",
    conditions: [
      "Valid for one-time use only",
      "Cannot be combined with other offers",
      "Applicable on orders above $50",
      "Non-transferable",
    ],
  },
  {
    discount: "",
    title: "Mega Jackpot Campaign",
    subtitle: "Jackpot Winner – Premium Reward",
    code: "Rs. 800",
    totalCoins: 3200,
    validTill: "Jan 15, 2025",
    conditions: [
      "Exclusive premium member offer",
      "Valid for all product categories",
      "Cannot be exchanged for cash",
      "Limited time offer",
    ],
  },
  {
    discount: "",
    title: "Golden Hour Special",
    subtitle: "Golden Hour Lucky Draw Winner",
    code: "Rs. 1200",
    totalCoins: 5600,
    validTill: "Nov 30, 2024",
    conditions: [
      "Minimum purchase of $200 required",
      "Valid during golden hours (6–8 PM)",
      "One coupon per customer",
      "Cannot be combined with sale items",
    ],
  },
];

const LuckyDrawCoupons = ({ campaignData, campaignId }) => {
  const { incrementHandle, decrementHandle, quantity } = useContext(AppContext);
  const token = auth()?.access_token;
  const router = useRouter();
  const [basePlans, setBasePlans] = useState([]);

  const handleBuyCoins = async (coupon) => {
    try {
      const reqBody = {
        camp_id: campaignId,
        amount: coupon?.ticket_price,
        quantity: quantity,
        base_plan_id: coupon?.id
      };
      const response = await apiRequest.coinPurchase(reqBody, token);
      // console.log("response", response);
      router.push(`/thank-you?id=${response?.data?.data?.id}`);
      // router.push(`/payment?id=${response?.data?.data?.id}`);
    } catch (error) {
      console.error("Error during buy coins:", error);
    }
  };

  useEffect(() => {
    if (campaignData?.id)
      apiRequest
        .getBasePlans(campaignData?.id)
        .then((res) => {
          setBasePlans(res?.data?.data || []);
        })
        .catch((error) => {
          console.error("Error fetching base plans:", error);
        });
  }, [campaignData]);

  return (
    <div className="coupon-section" style={{ paddingTop: 20}}>
      <h1 className="main-title">Single Purchase Plan</h1>
      <p className="subtitle">
        Beautiful, engaging coupon designs for your promotional campaigns
      </p>
      <div className="coupon-container">
        {basePlans?.map((coupon) => (
          <div className="coupon-card" key={coupon?.id}>
            {/* <div className="card-header">
              <div className="icon">🏆</div>
              <div className="discount">{coupon?.discount}</div>
            </div> */}
            <div className="card-body">
              <h2 className="coupon-title">{coupon?.title}</h2>
              <div className="d-flex flex-row justify-content-between">
                <p className="coupon-subtitle font-weight-bold">
                  {/* {coupon?.subtitle} */}
                  <b>Total Coins:</b>&nbsp;
                  {coupon?.coins_per_campaign || 0}
                </p>
                <div className="text-xs">
                  + {coupon?.coupons_per_campaign} free coin
                  {coupon?.coupons_per_campaign > 1 ? "s" : ""}
                </div>
              </div>

              <div className="coupon-code">
                <span>PLAN PRICE</span>
                <strong>{coupon?.ticket_price}</strong>
              </div>
              {/* <div className="validity">
                📅 Valid until: <strong>{coupon?.validTill}</strong>
              </div> */}
              <ul className="terms">
                {[1, 2, 3, 4, 5].map((num) => {
                  const point = coupon?.[`point${num}`];
                  return point ? <li key={num}>• {point}</li> : null;
                })}
              </ul>
            </div>
            <br />
            <button className="btn btn-primary" onClick={() => handleBuyCoins(coupon)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContestBody = () => {
  const searchParams = useSearchParams();
  const campaignId = searchParams.get("id");
  const [campaignData, setCampaignData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCampaigns = async () => {
      setLoading(true);
      try {
        const response = await apiRequest.getCoinCampaignDetails(campaignId);
        setCampaignData(response?.data?.data || []);
        console.log("Campaigns fetched:", response?.data?.data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <section className="pb-120 mt-minus-300">
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-6">
            <div className="clock-wrapper">
              <p className="mb-2">This competition ends in:</p>
              <div className="clock">
                <Countdown
                  date={Date.now() + 1000000000}
                  renderer={RendererCountdown}
                />
              </div>
            </div>
          </div> */}

          <div className="col-lg-12">
            <div className="contest-cart">
              {/* Context slider for one */}
              <ContestSlider campaignData={campaignData} />

              {/* Contest right section */}
              <ContestRight campaignData={campaignData} />
              <div className="col-lg-12 mb-30">
                <LuckyDrawCoupons campaignData={campaignData} campaignId={campaignId} />
              </div>
            </div>
          </div>

          <div className="col-lg-10">
            <div className="contest-description">
              <ul
                className="nav nav-tabs justify-content-center mb-30 pb-4 border-0"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="cmn-btn active"
                    id="description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#description"
                    role="tab"
                    aria-controls="description"
                    aria-selected="true"
                  >
                    <span className="mr-3"></span> description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="cmn-btn"
                    id="details-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#details"
                    role="tab"
                    aria-controls="details"
                    aria-selected="false"
                  >
                    <span className="mr-3"></span>competition details
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  {/* vehicle Overview here */}
                  <VehicleOverview campaignData={campaignData} />
                </div>
                <div
                  className="tab-pane fade"
                  id="details"
                  role="tabpanel"
                  aria-labelledby="details-tab"
                >
                  <div className="content-block">
                    <h3 className="title">Competition Details</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis sed ex eget mi sollicitudin consequat. Sed rhoncus
                      ligula vel justo dignissim aliquam. Maecenas non est vitae
                      ipsum luctus feugiat. Fusce purus nunc, sodales at
                      condimentum sed, ullamcorper a nulla. Nam justo est,
                      venenatis quis tellus in, volutpat eleifend nunc.
                      Vestibulum congue laoreet mi non interdum. Ut ut dapibus
                      tellus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContestBody;
