import LeftSideMenu from "@/components/common/LeftSideMenu";
import Myprofile from "@/components/user/Myprofile";
import RightSide from "@/components/user/RightSide";

const page = () => {
  return (
    <>
     
       <Myprofile />
      <div className="mt-minus-150 pb-120">
        <div className="container">
          <div className="row ">
           
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

export default page;
