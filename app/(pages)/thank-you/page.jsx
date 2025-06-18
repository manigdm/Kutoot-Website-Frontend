// app/(pages)/contest-details-one/page.tsx

import Banner from "@/components/common/Banner";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LuckyDrawCoupons = dynamic(() => import("./LuckyDrawCoupons"), {
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

      <div className="container text-center my-5">
        <section className="mt-minus-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="winner-details-wrapper bg_img">
                  <div className="body">
                    <h2>Thank you for purchasing!</h2>
                    <h5 className="contest-number mt-4">Total coins: 1000</h5>
                    <p className="contest-date">
                      <strong>Order Id: <span>#1234</span></strong> Friday June 06, 2025
                    </p>
                    <div className="line"></div>
                    <div className="btn-grp">
                      <a href="#0" className="btn-border">Order Details</a>
                    </div>
                  </div>

                  <div className="flex flex-row justify-content-center">
                    <Suspense fallback={<div>Loading coupons...</div>}>
                      <LuckyDrawCoupons />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;