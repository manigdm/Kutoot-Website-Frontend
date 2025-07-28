import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./UpcomingCampaigns.scss";
import CommonButton from "@/components/common/CommonButton";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const campaigns = [
  {
    title: "Win Your Dream Prestige Villa!",
    description:
      "Enter now for a chance to win a luxury villa in our exclusive lucky draw. Live the life you’ve always imagined!",
    cta: "Enter Now",
    image: "/images/villa-bg.jpg",
  },
  {
    title: "Win Your Dream Prestige Villa 111111!",
    description:
      "Enter now for a chance to win a luxury villa in our exclusive lucky draw. Live the life you’ve always imagined!",
    cta: "Enter Now",
    image: "/images/villa-bg.jpg",
  },
  {
    title: "Win Your Dream Prestige Villa 222222!",
    description:
      "Enter now for a chance to win a luxury villa in our exclusive lucky draw. Live the life you’ve always imagined!",
    cta: "Enter Now",
    image: "/images/villa-bg.jpg",
  },
];

export default function UpcomingCampaigns() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="campaign-carousel">
      <div className="campaign-carousel__bg" />

      <h2 className="campaign-carousel__title">Upcoming Campaigns</h2>
      <p className="campaign-carousel__subtitle">
        Explore our upcoming campaigns to win exciting rewards
      </p>
      <Swiper
        className="campaign-carousel__swiper"
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        slidesPerView={1}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        centeredSlides
        spaceBetween={30}
      >
        <div className="campaign-carousel__arrows">
          <button ref={prevRef} className="arrow arrow--left">
            <IoIosArrowBack className="left-arrow" />
          </button>
          <button ref={nextRef} className="arrow arrow--right">
            <IoIosArrowForward className="right-arrow" />
          </button>
        </div>
        {campaigns.map((campaign, index) => (
          <SwiperSlide key={index}>
            <div className="campaign-card">
              <div className="campaign-card__content">
                <h3>{campaign.title}</h3>
                <p className="campaign-card__description">{campaign.description}</p>
              </div>
              <CommonButton label="Enter Now" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
