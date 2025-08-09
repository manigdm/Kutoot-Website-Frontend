import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Page = () => {
  const swiperRef = useRef(null);
  
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const galleryButtonStyle = {
    borderRadius: '20px',
    background: '#3B322B',
    display: 'flex',
    width: '82px',
    height: '32px',
    padding: '12.006px 20.01px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8.004px',
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '14px',
    border: 'none',
    cursor: 'pointer'
  };

  const infoButtonStyle = {
    borderRadius: '20px',
    border: '0.8px solid #FFF',
    display: 'flex',
    width: '70px',
    height: '32px',
    padding: '12.006px 20.01px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8.004px',
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '14px',
    background: 'transparent',
    cursor: 'pointer'
  };

  return (
    <div style={{ paddingTop: '80px', textAlign: 'center' }}>
      {/* Title */}
      <h1
        style={{
          color: '#3B322B',
          fontFamily: '"Zurich Extra Black", sans-serif',
          fontSize: '52px',
          fontStyle: 'normal',
          fontWeight: 900,
          lineHeight: '70px',
          letterSpacing: '-1.04px',
          marginBottom: '20px',
        }}
      >
        Suzuki Hayabusa – Worth ₹20 Lakhs
      </h1>
      {/* Subtitle */}
      <h2
        style={{
          color: '#3B322B',
          fontFamily: '"Zurich Extra Black", sans-serif',
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: 900,
          lineHeight: '48px',
          letterSpacing: '-0.64px',
          marginBottom: '16px',
        }}
      >
        Unleash the beast. More speed, more chances, more roar.
      </h2>
      {/* Description */}
      <p
        style={{
          color: '#3B322B',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '24px',
          WebkitTextStrokeWidth: '0.4px',
          WebkitTextStrokeColor: '#FFF',
          marginBottom: '40px',
        }}
      >
        Minimum Purchase: ₹20 | Bundles include Shopping Coins + Free Lucky Draw Coupons
      </p>
      
      {/* Main content with image and text */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Left side image with arrows and buttons */}
        <div style={{
          display: 'flex',
          width: '727px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '-92px',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            style={{ width: '100%', height: '400px' }}
          >
            <SwiperSlide>
              <img 
                src="/path/to/hayabusa-image.jpg" 
                alt="Suzuki Hayabusa" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img 
                src="/path/to/hayabusa-image-2.jpg" 
                alt="Suzuki Hayabusa" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </SwiperSlide>
          </Swiper>
          
          {/* Navigation Arrows */}
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'space-between',
            padding: '0 20px',
            zIndex: 10
          }}>
            <button 
              onClick={handlePrev}
              style={{ 
                background: 'rgba(0,0,0,0.5)', 
                border: 'none', 
                borderRadius: '50%', 
                width: '40px', 
                height: '40px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <MdArrowBackIos style={{ color: 'white', fontSize: '20px' }} />
            </button>
            <button 
              onClick={handleNext}
              style={{ 
                background: 'rgba(0,0,0,0.5)', 
                border: 'none', 
                borderRadius: '50%', 
                width: '40px', 
                height: '40px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <MdArrowForwardIos style={{ color: 'white', fontSize: '20px' }} />
            </button>
          </div>
          
          {/* Gallery and Info Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            marginTop: '20px',
            alignSelf: 'center'
          }}>
            <button style={galleryButtonStyle}>
              Gallery
            </button>
            <button style={infoButtonStyle}>
              Info
            </button>
          </div>
        </div>
        
        {/* Right side content */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start',
          textAlign: 'left',
          maxWidth: '500px'
        }}>
          <h3 
            style={{
              color: '#3B322B',
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '18px',
              marginBottom: '16px'
            }}
          >
            Feel the power of a legend
          </h3>
          <p 
            style={{
              color: '#3B322B',
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '18px',
              marginBottom: '24px'
            }}
          >
            Start with just ₹20 and unlock your shot at owning the legendary beast on two
            wheels. The more you throttle up, the better your chances — more coins, more coupons,
            more speed! Climb the ranks, collect badges, and feel the rush — because this isn't just a draw, it's your race to win the Hayabusa.
          </p>
          
          <button className="kutoot--header__button">
            <FaArrowRight className="kutoot--header__button-icon" />
            Enter Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;