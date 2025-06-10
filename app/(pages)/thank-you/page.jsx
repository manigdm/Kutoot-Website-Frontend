import Banner from "@/components/common/Banner";
import contest_1 from "/public/images/contest/1.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      {/* Banner section here */}
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
                    <div className="left">
                      {/* <Image src={contest_1} alt="contest 1" /> */}
                    </div>
                    <div className="body">
                      <h2>Thank you for purchasing!</h2>
                      <h5 className="contest-number mt-4">Total coins: 1000</h5>
                      <p className="contest-date">
                        <strong>Order Id: <span>#1234</span></strong> Friday June 06, 2025
                      </p>
                      <div className="line"></div>
                      <h4 className="title">Your Lucky Draw Coupons:</h4>
                      <ul className="numbers" style={{ justifyContent: "center", gap: "10px" }}>
                        <li style={{ width: "fit-content" }}>1188239192687</li>
                        <li style={{ width: "fit-content" }}>2938749872937</li>
                        <li style={{ width: "fit-content" }}>1188239192687</li>
                        <li style={{ width: "fit-content" }}>2938749872937</li>
                      </ul>
                      <div className="btn-grp">
                        <a href="#0" className="btn-border">
                          Order Details
                        </a>
                        {/* <a href="#0" className="btn-border">
                            How to Claim
                        </a> */}
                      </div>
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

export default page;
