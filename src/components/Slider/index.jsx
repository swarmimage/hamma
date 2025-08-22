'use client'

import React, { useRef } from 'react'
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './styles.module.scss'
import h from '../../../src/icons/sliderimage.svg'
import { Arrow } from '@/icons/arrow'
import { Arrow1 } from '@/icons/arrow1'

const Slider = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const slides = [
    {
      id: 1,
      title: 'Качественные строительные материалы — Низкие цены и быстрая доставка!',
      description: 'Быстрая и надёжная доставка для ваших строительных проектов.',
      image: '/images/construction1.png',
    },
    {
      id: 2,
      title: 'Все для ремонта: От инструментов до отделки',
      description: 'Покупай по выгодным ценам с доставкой на объект!',
      image: '/images/construction2.png',
    },
  ]

  return (
    <Box className={styles.slider__container} position="relative">
      <Button className={styles.button_arrow}
        ref={prevRef}
        position="absolute"
        top="50%"
        left="0"
        variant={'unstyled'}
        transform="translateY(-50%)"
        zIndex="2"
         display={'flex'}
        alignItems={'center'}borderRadius={60}
      >
        <Arrow1 style={{ transform: 'rotate(180deg)' }} />
      </Button>

      <Button
        className={styles.button_arrow}
        ref={nextRef}
        position="absolute"
        variant={'unstyled'}
        top="50%"
        right="0"
        transform="translateY(-50%)"
        zIndex="2"
        display={'flex'}
        alignItems={'center'}borderRadius={60}
      >
        <Arrow className={styles.btn} width={'100%'} />
      </Button>

      <div className={styles.slider_wrapper}>
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
          modules={[Navigation]}
          className="custom-swiper"
          loop
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Flex
                className={styles.slider__card}
                borderRadius="2xl"
                bg="white"
                direction={['column', 'row']}
                align="center"
                justify="space-between"
              >
                <VStack align="start" spacing={4} maxW="600px"
                  p={[4, 6, 10]}>
                  <Text lineHeight={'1.1'} fontSize={'clamp(1.25rem, 0.938rem + 1.56vw, 2.5rem)'} fontWeight="bold">
                    {slide.title}
                  </Text>
                  <Text fontSize="md" color="gray.600">
                    {slide.description}
                  </Text>
                  <div className={styles.slider_imageinside}>
                    <Button className={styles.slider_imageinside_button} bg="#38b2ac" color="white" _hover={{ bg: '#319795' }} borderRadius="xl" >
                      Смотреть все
                    </Button>
                    <img className={styles.slider_inimage} src={h.src} alt="" />
                  </div>
                </VStack>
                <img className={styles.slider_image} src={h.src} alt=""
                  style={{
                    width: 'clamp(18.75rem, 11.672rem + 35.39vw, 47.063rem)',
                    maxWidth: '100%',
                    paddingRight: '16px',
                    paddingLeft: '16px',
                    margin: '0 auto',
                  }}
                />
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Box>

  )
}

export default Slider
