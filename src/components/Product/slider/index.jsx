// components/ProductGallery.js
import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useRef } from "react";
import styles from "../slider/styles.module.scss";

import "swiper/css";
import "swiper/css/navigation";

import { Arrow } from "@/icons/arrow";
import { Arrow1 } from "@/icons/arrow1";

const ProductGallery = ({ images = [] }) => {
  const swiperRef = useRef(null);

  // текущий слайд
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box display="flex" w="100%" minW={0} alignItems="flex-start">
      {/* Левый блок — превью */}
      <Box
        w="90px"
        h="400px"
        flex="0 0 auto"
       mr="clamp(20px, 7vw, 200px)"
        sx={{
          display: "none",
          "@media (min-width: 1085px)": { display: "block" },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="10px"
          h="100%"
        >
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`thumb-${index}`}
              className={`${styles.thumbImg} ${
                activeIndex === index ? styles.activeThumb : ""
              }`}
              style={{
                cursor: "pointer",
                border:
                  activeIndex === index
                    ? "2px solid #000"
                    : "2px solid transparent",
                borderRadius: "8px",
              }}
              onClick={() => {
                swiperRef.current?.slideTo(index);
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Правый блок — основной слайдер */}
      <Box
        flex="1"
        minW={0}
        position="relative"
        bgImage="url('/backgroundimage.png')"
        bgSize="1000px auto"
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={10}
          modules={[Navigation]}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className={styles.mainSwiper}
          style={{ width: "100%", height: "100%" }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`main-${index}`}
                className={styles.swiperimg}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопки */}
        <Box
          onClick={() => swiperRef.current?.slidePrev()}
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%)"
          cursor="pointer"
          zIndex={10}
        >
          <Arrow1 className={styles.btn} />
        </Box>

        <Box
          onClick={() => swiperRef.current?.slideNext()}
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          cursor="pointer"
          zIndex={10}
        >
          <Arrow className={styles.btn} style={{ transform: "rotate(180deg)" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductGallery;
