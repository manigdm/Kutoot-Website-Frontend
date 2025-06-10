import Banner from "@/components/common/Banner";
import LotteryBody from "@/components/lottery-details/LotteryBody";
import Image from "next/image";
import inner_hero_shape from "/public/images/elements/inner-hero-shape.png";

const page = () => {
  return (
    <>
      {/* Banner section here */}
      <div className="inner-hero-section">
        <div className="bg-shape">
          <Image src={inner_hero_shape} alt="inner hero shape" />
        </div>
        <Banner
          breadcrumb={[
            ["Home", "/"],
            ["Lottery", "/"],
            ["Total coins: 600", "/"],
            ["Pick your Lottery Number", "/"],
          ]}
        />
      </div>

      {/* Lottery Body Here */}
      <LotteryBody />
    </>
  );
};

export default page;
