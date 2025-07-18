import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ProductCard } from "./ProductCard/ProductCard.jsx";
import { FeaturedBanner } from "./FeaturedBanner/FeaturedBanner.jsx";
import { NewsCard } from "./NewsCard/NewsCard.jsx";
import CommonButton from "@/components/common/CommonButton.jsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./EcommerceLayout.scss";

const PRODUCTS = [
  {
    title: "Fine silver jewellery",
    subtitle: "Best value",
    image:
      "https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
    buttonText: "Buy now",
    buttonVariant: "orange",
    backgroundColor: "bg-gradient-navy",
  },
  {
    title: "Best deals on smartwatches",
    subtitle: "Best price",
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Buy now",
    buttonVariant: "orange",
    backgroundColor: "bg-gradient-cyan",
  },
  {
    title: "Min 70% off on handbags",
    subtitle: "Best offer",
    image:
      "https://images.unsplash.com/photo-1608060434411-0c3fa9049e7b?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Buy now",
    buttonVariant: "orange",
    backgroundColor: "bg-gradient-brown",
  },
];

const NEWS = [
  {
    title: "Kutoot User Wins Dream Villa in Goa!",
    description:
      "In our biggest giveaway yet, Renu Sutilish from Pune bagged a 25.2L villa in South Goa. More Dream Coupons incoming!",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=300&fit=crop",
  },
  {
    title: "Kutoot Crosses ₹10 Crore in Coin Sales — 5% Donated to Charity",
    description:
      "Thanks to our amazing community, we've hit a milestone that matters. We've hit a total of ₹10 crore in verified NGOs across India.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
  },
  {
    title: "Kutoot Partners with 50+ New Vendors Across India",
    description:
      "From boutique cafes to premium wellness brands, our vendor family just got bigger. More places to use your Kutoot rewards and more fun.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
  },
];

export const EcommerceLayout = () => {
  return (
    <div className="ecommerce-layout">
      <div className="container">
        <section className="header-component">
          <div className="header-content">
            <h1 className="main-title">Best Products</h1>
            <p className="main-subtitle">ECOMMERCE</p>
          </div>
          <CommonButton label="Shop Now" className="header-button" />
        </section>

        <section className="products-section">
          <section className="products-section">
            <div className="custom-swiper-button-prev products-nav">‹</div>
            <div className="custom-swiper-button-next products-nav">›</div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={3}
              navigation={{
                nextEl: ".products-section .custom-swiper-button-next",
                prevEl: ".products-section .custom-swiper-button-prev",
              }}
              loop
            >
              {PRODUCTS.map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductCard {...product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </section>

        <section className="featured-section">
          <FeaturedBanner
            title="Best deals for all Headphones!"
            brand="boat"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            buttonText="Shop Now"
          />
        </section>

        <section className="news-section">
          <div className="news-header">
            <h2 className="news-title">Kutoot Newsroom</h2>
            <p className="news-subtitle">
              Catch the latest buzz, breakthroughs, and big wins
            </p>
          </div>

          <div className="news-carousel">
            <section className="news-section">
              <div className="news-carousel">
                <div className="custom-swiper-button-prev news-nav">‹</div>
                <div className="custom-swiper-button-next news-nav">›</div>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={24}
                  slidesPerView={3}
                  navigation={{
                    nextEl: ".news-carousel .custom-swiper-button-next",
                    prevEl: ".news-carousel .custom-swiper-button-prev",
                  }}
                  loop
                >
                  {NEWS.map((news, index) => (
                    <SwiperSlide key={index}>
                      <NewsCard {...news} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
          </div>

          <div className="news-footer">
            <CommonButton className="view-more-button" label="View more" />
          </div>
        </section>
      </div>
    </div>
  );
};
