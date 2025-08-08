"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import header_bg from "/public/images/bg/header-bg.png";
import { useHomePage } from "@/context/HomePageContext";
import { useWindowWidth } from "@/context/WindowWidth";
import { motion, AnimatePresence } from "framer-motion";
import LockButton from "../common/LockButton";
import LuckyDrawSlider from "./components/LuckyDrawSlider/LuckyDrawSlider";
import PromoSection from "./components/PromoSection/PromoSection";
import { ExclusiveCampaign } from "./components/ExclusiveCampaign/ExclusiveCampaign";
import Testimonials from "./components/Testimonials/Testimonials";
import { YoutubeTestimonials } from "./components/Youtube-testimonials/YoutubeTestimonials";
import { EcommerceLayout } from "./components/EcommerceLayout/EcommerceLayout";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import SubscriptionForm from "./components/SubscriptionForm/SubscriptionForm";
import Footer from "./components/Footer/Footer";
import FixedEnterButton from "./components/FixedEnterButton/FixedEnterButton";
import UpcomingCampaigns from "./components/UpcomingCampaigns/UpcomingCampaigns";
import "./Hero.scss";
import { IoPlayOutline, IoPauseCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const homepageData = useHomePage();
  const {campaigns,banners,baseplans,products,marquee} = homepageData;
  const width = useWindowWidth();
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // const banner = homepageData?.data?.banners[0] || {};
  
   const banner = campaigns?.[0] || {};

  const lines = [
    banner?.title1 || "Your ₹5 Crore Villa — Only on Kutoot!",
    banner?.title2 || "Luxury living at Rs. 99 Lakh on Kutoot Now!",
  ];

  // console.log('Banner Data:', products);


  const handleVideoToggle = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const sentence = lines[index]?.split(" ");

  const enterNow = () => {};

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [lines]);


  return (
    <>
      <FixedEnterButton />
      <section className="hero">
        {banner?.video ? (
          <>
            <video
              ref={videoRef}
              className="hero__video"
              src={
                `${process.env.NEXT_PUBLIC_BASE_URL}` + banner?.video
                // homepageData.data.banner.video
              }
              autoPlay
              loop
              muted
              playsInline
            />
            <button
              className="video-control-button"
              onClick={handleVideoToggle}
            >
              {isPlaying ? (
                <IoPauseCircleOutline size={24} color="white" />
              ) : (
                <IoPlayOutline size={24} color="white" />
              )}
            </button>
          </>
        ) : (
          <div className="hero__shape">
            <Image
              src={header_bg}
              alt="image"
              style={{ width: width, minWidth: "-webkit-fill-available" }}
            />
          </div>
        )}

        <div className="row justify-content-center align-items-center">
          <div className="hero__content text-center mt-50">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="hero-animation-sentence"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, fontSize: "40px" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {sentence?.map((word, i) => (
                  <motion.span
                    key={i}
                    className="hero-animation-word"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="header__title">
              {/* {banner?.title || " */}
              Enter to win a luxury Buildiko Springwoods Villa!
            </div>
            <p className="header__description">
              {banner?.short_description ||
                "Win dreams or take cash, tax-free! | Guaranteed wins | 5% for a better world | 100% your moment!"}
            </p>
            {/* <div className="mt-2">
              <Image src={trusted_by_hindu} alt="trusted by hindu" />
            </div> */}
            <div className="d-flex flex-row gap-2 justify-content-center align-items-center mt-6">
              <button className="hero__button">
                <FaArrowRight className="hero__button-icon" />
                Enter Now
              </button>
              <LockButton tooltipText="Unlocks once the goal is reached" />
            </div>
          </div>
        </div>

        <div className="blur-overlay mt-20">
          <LuckyDrawSlider campaigns={campaigns} />
        </div>
      </section>
      <div className="promo-section-container">
        <PromoSection baseplans={baseplans} />
      </div>
      <div className="exclusive-campaign-container">
        <ExclusiveCampaign campaigns={campaigns} />
      </div>
      <div className="exclusive-campaign-container d-none">
        <YoutubeTestimonials />
      </div>
      <div className="exclusive-campaign-container d-none">
        <Testimonials />
      </div>
      <div>
        <UpcomingCampaigns campaigns={campaigns} />
      </div>
      <div>
        <EcommerceLayout products={products} banners={banners} />
      </div>
      <div>
        <PartnersSection marquee={marquee} />
      </div>
      <div>
        <HowItWorks />
      </div>
      <div>
        <SubscriptionForm />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Hero;
