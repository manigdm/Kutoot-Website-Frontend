"use client";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import winner from "/public/images/bg/winner.jpg";
import car from "/public/images/elements/car.png";
import w_1 from "/public/images/winner/w-1.png";
import auth from "@/utils/auth";
import apiRequest from "@/utils/apiRequest";
import "slick-carousel/slick/slick.css";
import { useEffect } from "react";
import { useHomePage } from "@/context/HomePageContext";

const NextBtn = ({ onClick }) => {
  return (
    <button
      type="button"
      className="prev slick-arrow bg-transparent"
      onClick={onClick}
    >
      <i>
        <BsArrowLeft />
      </i>
    </button>
  );
};

const PrevBtn = ({ onClick }) => {
  return (
    <button
      type="button"
      className="next slick-arrow bg-transparent"
      onClick={onClick}
    >
      <i>
        <BsArrowRight />
      </i>
    </button>
  );
};

const Winner = () => {
  const homepageData = useHomePage();
  console.log('homepageData---dhdd', homepageData?.data?.winners)
  const settings = {
    speed: 700,
    arrows: true,
    dots: false,
    nextArrow: <PrevBtn />,
    prevArrow: <NextBtn />,
  };

  useEffect(() => {
    const checkWinnerClaim = async () => {
      const token = auth()?.access_token;
      try {
        if (token) {
          const res = await apiRequest.checkWinnerClaim(token);
          if (res.status === 200) {
            console.log("res", res);
          } else {
            console.error("API error:", res);
          }
        }
      } catch (err) {
        console.error("Error fetching winners:", err);
      }
    };

    checkWinnerClaim();
  }, []);

  return (
    <section className="position-relative pt-120 pb-120">
      <div className="bg-el">
        <Image src={winner} alt="image" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-header text-center">
              <span className="section-sub-title">
                The biggest lottery winners of the month
              </span>
              <h2 className="section-title">Top Ten winners</h2>
              <p>
                There have been numerous winnings, but some winners were luckier
                than others
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="winner-wrapper">
              <div className="left">
                <div className="winner-prize-thumb">
                  <Image src={car} alt="image" />
                </div>
              </div>
              <div className="right">
                <Slider {...settings} className="winner-slider">
                  {homepageData?.data?.winners?.map((itm, i) => (
                    <div key={i} className="winner-slide-item">
                      <div className="winner-thumb">
                        {/* <Image src={} alt="image" /> */}
                        <img
                          src={itm?.campaign?.campaign?.img}
                          alt="Coin Campaign"
                          width="500"  // Specify the width
                          height="300"  // Specify the height
                        />
                      </div>
                      <div className="winner-content bg_img">
                        <h6 className="winner-name">Breeze Zodiac</h6>
                        <p>Draw took place on</p>
                        <span className="draw-date">19/04/2020</span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Winner;
