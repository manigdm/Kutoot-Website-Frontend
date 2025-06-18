import Banner from "@/components/common/Banner";
import Image from "next/image";
import inner_hero_shape from "/public/images/elements/inner-hero-shape.png";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// 👇 Dynamically import ContestBody with SSR disabled
const ContestBody = dynamic(
  () => import("@/components/contest-details-two/ContestBody"),
  { ssr: false }
);

const Page = () => {
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

      {/* 👇 Wrap in Suspense */}
      <Suspense fallback={<div>Loading contest details...</div>}>
        <ContestBody />
      </Suspense>
    </>
  );
};

export default Page;