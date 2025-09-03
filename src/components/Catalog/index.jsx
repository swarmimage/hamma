'use client'

import React, { useRef, useEffect } from 'react'
import styles from './styles.module.scss'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import { Arrow1 } from '@/icons/arrow1'
import { Arrow } from '@/icons/arrow'

const catalogItems = [
  { title: 'Листовые материалы и аксессуары', img: '/assets/catalog/0.svg' },
  { title: 'Сухие строительные смеси', img: '/assets/catalog/1.svg' },
  { title: 'Теплоизоляция и шумоизоляция', img: '/assets/catalog/2.svg' },
  { title: 'Напольные покрытия', img: '/assets/catalog/3.svg' },
  { title: 'Сантехника', img: '/assets/catalog/4.svg' },
  { title: 'Лакокрасочная продукция', img: '/assets/catalog/5.svg' }
]

const Catalog = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current
      swiperRef.current.params.navigation.nextEl = nextRef.current
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [])

  return (
    <Box className="container" position="relative">
      <Text className={styles.catalog__title} fontSize="30px" fontWeight="bold">
        Каталог
      </Text>

      <Button
        className={styles.button_arrow}
        ref={prevRef}
        position="absolute"
        top="50%"
        left="0"
        variant="unstyled"
        transform="translateY(-50%)"
        zIndex="2"
        display="flex"
        alignItems="center"
        borderRadius={60}
      >
        <Arrow1 style={{ transform: 'rotate(180deg)' }} />
      </Button>

      <Button
        className={styles.button_arrow}
        ref={nextRef}
        position="absolute"
        variant="unstyled"
        top="50%"
        right="0"
        transform="translateY(-50%)"
        zIndex="2"
        display="flex"
        alignItems="center"
        borderRadius={60}
      >
        <Arrow className={styles.btn} width="100%" />
      </Button>

      {/* Сам слайдер */}
      <Box className={styles.catalog__content}>
        <Swiper
          slidesPerView="auto"
          className={styles.catalog__slider}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {catalogItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`${styles.slide} ${
                index === 0 ? styles.firstSlide : ''
              }`}
            >
              <Box className={styles.card}>
                <Image src={item.img} alt={item.title} className={styles.image} />
                <Text className={styles.catalog__intitle}>{item.title}</Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}

export default Catalog
