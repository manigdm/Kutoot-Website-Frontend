import Contest from "@/components/common/Contest";
import LatestWinner from "@/components/common/LatestWinner";
import Support from "@/components/common/Support";
import Testimonial from "@/components/common/Testimonial";
import Counter from "@/components/home-three/Counter";
import Hero from "@/components/home-three/Hero";

const page = () => {
  return (
    <>
      {/* here section */}
      <Hero />

      {/* Counter section */}
      <Counter />

      {/* Contest section */}
      <Contest />

      {/* Latest winner section */}
      <LatestWinner />

      {/* Testimonial section */}
      <Testimonial />

      {/* Support section */}
      <Support />
    </>
  );
};

export default page;
