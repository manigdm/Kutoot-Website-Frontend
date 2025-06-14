"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import contest_bg from "/public/images/elements/contest-bg.png";
import box from "/public/images/icon/btn/box.png";
import car from "/public/images/icon/btn/car.png";
import ContestCard from "../cards/ContestCard";
import apiRequest from "@/utils/apiRequest";

// Adjusted ContestCard here directly (or you can keep it in its own file)
// const ContestCard = ({ itm }) => {
//   return (
//     <div className="contest-card p-3 border rounded shadow-sm h-100">
//       <Image
//         src={itm.img}
//         alt={itm.title}
//         fill
//         style={{ objectFit: "cover", width: "100%", maxHeight: "200px" }}
//         className="rounded"
//       />
//       <h5>{itm.title}</h5>
//       <div
//         className="small text-muted mb-2"
//         dangerouslySetInnerHTML={{ __html: itm.description }}
//       />
//       <p>
//         <strong>Coin Price:</strong> ₹{itm.ticket_price}
//       </p>
//       <p>
//         <strong>Sold / Total Tickets:</strong>{" "}
//         {itm.sold_tickets}/{itm.total_tickets}
//       </p>
//     </div>
//   );
// };

const Contest = () => {
  const [campaignData, setCampaignData] = useState([]);
  const [activeTab, setActiveTab] = useState(1); // 1: Running, 2: Upcoming, 3: Completed
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCampaigns = async () => {
      setLoading(true);
      try {
        const response = await apiRequest.getCoinCampaigns(activeTab);
        setCampaignData(response.data?.data || []);
        console.log("Campaigns fetched:", response.data?.data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCampaigns();
  }, [activeTab]);

  return (
    <section className="position-relative pt-120 pb-120">
      <div className="bg-el">
        <Image src={contest_bg} alt="background" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-header">
              <span className="section-sub-title">Try your chance at winning</span>
              <h2 className="section-title">Current Contest</h2>
              <p>
                Participants buy coins and lots are drawn to determine the winners.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul className="nav nav-tabs justify-content-center mb-30 border-0" role="tablist">
              <li className="nav-item">
                <button
                  className={`cmn-btn style--two d-flex align-items-center ${activeTab === 1 ? "active" : ""}`}
                  onClick={() => setActiveTab(1)}
                >
                  <span className="me-3"><Image src={car} alt="icon" /></span>
                  Running Campaigns
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`cmn-btn style--two d-flex align-items-center ${activeTab === 2 ? "active" : ""}`}
                  onClick={() => setActiveTab(2)}
                >
                  <span className="me-3"><Image src={box} alt="icon" /></span>
                  Upcoming Campaigns
                </button>
              </li>
              {/* <li className="nav-item">
                <button
                  className={`cmn-btn style--two d-flex align-items-center ${activeTab === 3 ? "active" : ""}`}
                  onClick={() => setActiveTab(3)}
                >
                  <span className="me-3"><Image src={box} alt="icon" /></span>
                  Completed Campaigns
                </button>
              </li> */}
            </ul>

            <div className="tab-content">
              <div className="tab-pane fade show active">
                {loading ? (
                  <div className="text-center text-white py-5">Loading...</div>
                ) : (
                  <div className="row mb-none-30">
                    {campaignData.length > 0 ? (
                      campaignData.map((itm) => (
                        <div key={itm.id} className="col-xl-4 col-md-6 mb-30">
                          <ContestCard itm={itm} />
                        </div>
                      ))
                    ) : (
                      <div className="col-12 text-center text-white py-4">No campaigns found.</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-30">
          <div className="col-lg-12 text-center">
            <Link href="/contest" className="btn-border">
              Browse more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contest;