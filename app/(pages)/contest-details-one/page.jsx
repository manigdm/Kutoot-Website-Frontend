import Banner from "@/components/common/Banner";
import Feature from "@/components/contest/Feature";
import LetestContest from "@/components/contest/LetestContest";
import Image from "next/image";
import inner_hero_shape from "/public/images/elements/inner-hero-shape.png";
import ContestBody from "@/components/contest-details-one/ContestBody";

const page = () => {
  return (
    <>
    {/* Banner section here */}
    <div className="inner-hero-section" style={{ paddingBottom: '330px'}}>
      <div className="bg-shape">
        <Image src={inner_hero_shape} alt="inner_hero_shape" />
      </div>
      <Banner
        breadcrumb={[
          ["Home", "/"],
          ["Lottery", "/"],
          ["Contest Details", "/"],
        ]}
      />
    </div>

    {/* Bdy section here */}
    <ContestBody />
  </>
  );
};

export default page;
