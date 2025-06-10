import Banner from "@/components/common/Banner";
import Feature from "@/components/contest/Feature";
import LetestContest from "@/components/contest/LetestContest";
import Image from "next/image";
import inner_hero_shape from "/public/images/elements/inner-hero-shape.png";
import ContestBody from "@/components/contest-details-two/ContestBody";


const page = () => {
  return (
    <>
      <div className="inner-hero-section">
        <div className="bg-shape">
          <Image src={inner_hero_shape} alt="inner hero shape" />
        </div>
        <Banner
          breadcrumb={[
            ["Home", "/"],
            ["Lottery", "/"],
            ["Contest No: 1000", "/"],
          ]}
        />
      </div>

      {/* Contest body section here */}
      <ContestBody />
    </>
  );
};

export default page;
