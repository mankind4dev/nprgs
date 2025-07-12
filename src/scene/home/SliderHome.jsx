import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import image from "/images/nprs.jpg";
import image1 from "/images/nprs1.jpg";
import image2 from "/images/nprs2.jpg";
import image3 from "/images/nprs3.jpg";
import image4 from "/images/nprs1.jpg";
import image5 from "/images/nprs4.jpg";
import image6 from "/images/nprs1.jpg";
import image7 from "/images/nprs2.jpg";
import image8 from "/images/nprs1.jpg";
import image9 from "/images/nprs4.jpg";
import image10 from "/images/nprs1.jpg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const slideImages = [
  { id: 1, img: image },
  { id: 2, img: image1 },
  { id: 3, img: image2 },
  { id: 4, img: image3 },
  { id: 5, img: image4 },
  { id: 6, img: image5 },
  { id: 7, img: image6 },
  { id: 8, img: image7 },
  { id: 9, img: image8 },
  { id: 10, img: image9 },
  { id: 11, img: image10 },
];

const SliderHome = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full max-w-full mx-auto">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {/* {[...Array(10)].map((_, i) => ( */}
        {slideImages.map((slide, i) => (
          <SwiperSlide key={i}>
            <img
              // src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`}
              src={slide.img}
              className="w-full h-[300px] sm:h-[600px] object-cover rounded"
              // alt={`slide ${i + 1}`}
              alt={`slide ${slide.id}`} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-1"
      >
        {slideImages.map((slide, i) => (
          <SwiperSlide key={i}>
            <img
              // src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`}
              src={slide.img}
              className="w-full h-[30px] sm:h-[40px] object-cover rounded cursor-pointer"
              // alt={`Thumb ${i + 1}`}
              alt={slide.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHome;
