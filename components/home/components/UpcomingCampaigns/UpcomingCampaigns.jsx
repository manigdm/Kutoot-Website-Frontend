import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./UpcomingCampaigns.scss";
import CommonButton from "@/components/common/CommonButton";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

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

export default function UpcomingCampaigns({campaigns}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

//   const today = new Date();
//  today.setHours(0, 0, 0, 0);

// // Filter only upcoming campaigns
// const upcomingCampaigns = campaigns.filter(campaign => {
//   if (!campaign.start_date) return false;

//   // Parse safely
//   const [year, month, day] = campaign.start_date.split('-').map(Number);
//   const startDate = new Date(year, month - 1, day);
//   startDate.setHours(0, 0, 0, 0);

//   // Ensure both dates are in the same timezone/day context
//   //  console.log('upcoming', startDate > today);
// });

// console.log('exclusive',upcomingCampaigns);

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
       {campaigns
  ?.filter(campaign => {
    if (!campaign.start_date) return false; // skip if no date

    const campaignDate = new Date(campaign.start_date);
    const today = new Date();

    // remove time for comparison
    today.setHours(0, 0, 0, 0);
    campaignDate.setHours(0, 0, 0, 0);

    return campaignDate > today; // only future dates
  }).map((campaign, index) => (
          <SwiperSlide key={index}>
            <div className="campaign-card">
              <div className="campaign-card__content">
                <h3>{campaign.title}</h3>
                {/* <p className="campaign-card__description" >
                  {campaign.description}
                </p> */}
                   <div
          className="campaign-card__description"
          dangerouslySetInnerHTML={{ __html: campaign.description }}
        />
              </div>
              <button className="campaign-card__button">
                <FaArrowRight className="campaign-card__button-icon" />
                Enter Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
