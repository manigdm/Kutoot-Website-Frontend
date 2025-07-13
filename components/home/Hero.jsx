"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import VedioModal from "../vedioModal/VedioModal";
import header_bg from "/public/images/bg/header-bg.png";
import trusted_by_hindu from "/public/images/landingpage/trusted_by_hindu.png";
import { useHomePage } from "@/context/HomePageContext";
import { useWindowWidth } from "@/context/WindowWidth";
import { motion, AnimatePresence } from "framer-motion";
import CommonButton from "../common/CommonButton";
import LockButton from "../common/LockButton";
import LuckyDrawSlider from "./components/LuckyDrawSlider/LuckyDrawSlider";
import PromoSection from "./components/PromoSection/PromoSection";
import { ExclusiveCampaign } from "./components/ExclusiveCampaign/ExclusiveCampaign";
import Testimonials from "./components/Testimonials/Testimonials";
import {YoutubeTestimonials} from "./components/Youtube-testimonials/YoutubeTestimonials";
import { EcommerceLayout } from "./components/EcommerceLayout/EcommerceLayout";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import SubscriptionForm from "./components/SubscriptionForm/SubscriptionForm";
import Footer from "./components/Footer/Footer";
import FixedEnterButton from "./components/FixedEnterButton/FixedEnterButton";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const homepageData = useHomePage();
  const width = useWindowWidth();
  const [index, setIndex] = useState(0);

  // console.log("homepageData", homepageData);
  console.log("homepageData", homepageData);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 3000); // 2s show + 2s animation buffer
    return () => clearInterval(interval);
  }, []);
  const lines = [
    "Your ₹5 Crore Villa — Only on Kutoot!",
    "Luxury living at Rs. 99 Lakh on Kutoot Now!",
  ];
  const sentence = lines[index].split(" ");

  const enterNow = () => {
    //
  };

  return (
    <>
      <VedioModal
        link={homepageData?.data?.banner?.video}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <FixedEnterButton />
      <section className="hero">
        <div className="hero__shape" style={{ width: '100%'}}>
          <Image src={header_bg} style={{ width: width, minWidth: '-webkit-fill-available' }} alt="image" />
        </div>
        <div className="">
          <div className="row justify-content-center align-items-center">
            <div className="hero__content text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  className="hero-animation-sentence"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, fontSize: "40px" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {sentence.map((word, i) => (
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
                Enter to win a luxury Buildiko Springwoods Villa!
              </div>
              <p>
                Win dreams or take cash, tax-free! | Guaranteed wins | 5% for a
                better world | 100% your moment!
              </p>
              <div className="mt-2">
                <Image src={trusted_by_hindu} alt="" />
              </div>
              <div className="d-flex flex-row gap-1 justify-content-center align-items-center mt-3">
                <CommonButton onClick={enterNow} />
                <LockButton tooltipText="Unlocks once the goal is reached" />
              </div>
              {/* <div className="text-3xl text-white">
                {homepageData?.data?.banner?.title}
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: homepageData?.data?.banner?.description,
                }}
              /> */}
              {/* <div className="hero__btn">
                <Link href="/contest" className="cmn-btn">
                  Participate Now
                </Link>
                <button className="video-btn" onClick={() => setIsOpen(true)}>
                  <FaPlay />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="blur-overlay">
        <LuckyDrawSlider />
      </div>
      <div className="promo-section-container">
        <PromoSection />
      </div>
      <div className="exclusive-campaign-container">
        <ExclusiveCampaign />
      </div>
      <div className="exclusive-campaign-container">
        <YoutubeTestimonials />
      </div>
      <div className="exclusive-campaign-container">
        <Testimonials />
      </div>
      <div>
        <EcommerceLayout />
      </div>
      <div>
        <PartnersSection />
      </div>
      <div className="">
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
