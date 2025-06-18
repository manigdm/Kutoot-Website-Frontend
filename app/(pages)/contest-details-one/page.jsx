import Banner from "@/components/common/Banner";
import Image from "next/image";
import inner_hero_shape from "/public/images/elements/inner-hero-shape.png";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ContestBody = dynamic(() => import("@/components/contest-details-one/ContestBody"), {
  ssr: false,
});

const Page = () => {
  return (
    <>
      {/* Banner section */}
      <div className="inner-hero-section" style={{ paddingBottom: "330px" }}>
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

      {/* Body section with suspense fallback */}
      <Suspense fallback={<div>Loading contest details...</div>}>
        <ContestBody />
      </Suspense>
    </>
  );
};

export default Page;