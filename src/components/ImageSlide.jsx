import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/images/nprs.jpg",
  "/images/nprs1.jpg",
  "/images/nprs2.jpg",
  "/images/nprs3.jpg",
  "/images/nprs4.jpg",
];

const ImageSlider = () => {
  return (
    <div className="hidden md:flex md:w-[650px] h-[500px] overflow-hidden shadow-md">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
