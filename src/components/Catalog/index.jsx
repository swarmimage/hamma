'use client'

import React from 'react'
import styles from './styles.module.scss'
import { Box, Image, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

  const catalogItems = [
    { title: 'Листовые материалы и аксессуары', img: '/assets/catalog/0.svg' },
    { title: 'Сухие строительные смеси', img: '/assets/catalog/1.svg' },
    { title: 'Теплоизоляция и шумоизоляция', img: '/assets/catalog/2.svg' },
    { title: 'Напольные покрытия', img: '/assets/catalog/3.svg' },
    { title: 'Сантехника', img: '/assets/catalog/4.svg' },
    { title: 'Лакокрасочная продукция', img: '/assets/catalog/5.svg' }
  ]

const Catalog = () => {
  return (
    <Box className={styles.container}> 
    <Text className={styles.catalog__title} fontSize="2xl" fontWeight="bold">
          Каталог
        </Text>
      <Box className={styles.catalog__content}>
       

        <Swiper
          slidesPerView="auto"
          className={styles.catalog__slider}
        >
          {catalogItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`${styles.slide} ${index === 0 ? styles.firstSlide : ''}`}
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
