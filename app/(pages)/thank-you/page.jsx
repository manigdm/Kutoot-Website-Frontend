import Banner from "@/components/common/Banner";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// 👇 Dynamically import the full client component
const ContestDetailsClient = dynamic(() => import("./ContestDetailsClient"), {
  ssr: false,
});

const Page = () => {
  return (
    <>
      <div className="inner-hero-section" style={{ paddingBottom: 200 }}>
        <Banner
          breadcrumb={[
            ["Home", "/"],
            ["Thank You", "/"],
          ]}
        />
      </div>

      <Suspense fallback={<div>Loading contest details...</div>}>
        <ContestDetailsClient />
      </Suspense>
    </>
  );
};

export default Page;