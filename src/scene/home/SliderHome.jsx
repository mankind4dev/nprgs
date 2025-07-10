import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const SliderHome = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full max-w-full mx-auto">
      {/* Main Image Swiper */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i}>
            <img
              src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`}
              className="w-full h-[300px] object-cover rounded"
              alt={`Nature ${i + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-3"
      >
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i}>
            <img
              src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`}
              className="w-full h-[80px] object-cover rounded cursor-pointer"
              alt={`Thumb ${i + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHome;
