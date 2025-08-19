"use client"; // ← make this page a client component

import LeftSideMenu from "@/components/common/LeftSideMenu";
import Myprofile from "@/components/user/Myprofile";
import RightSide from "@/components/user/RightSide";

const Page = () => {
  return (
    <>
      <Myprofile />
      <div className="mt-minus-150">
        <div className="container">
          <div className="row">
            {/* left side menu */}
            {/* <LeftSideMenu /> */}

            {/* Right side  */}
            {/* <RightSide /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
