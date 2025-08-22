import React from 'react'
import styles from './styles.module.scss'
import { Box, Button, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const storeItems = [
  { title: 'NGM STROY CENTER', text: 'European • Asian', img: '/assets/catalog/image.png' },
  { title: 'GlobalSTROY', text: 'Turkish • Asian', img: '/assets/catalog/image.png' },
  { title: 'Teplodom', text: 'Central asian • Asian', img: '/assets/catalog/image.png' },
  { title: 'NGM STROY CENTER', text: 'European • Asian', img: '/assets/catalog/image.png' },
  { title: 'GlobalSTROY', text: 'Turkish • Asian', img: '/assets/catalog/image.png' },
  { title: 'Teplodom', text: 'Central asian • Asian', img: '/assets/catalog/image.png' },
  { title: 'GlobalSTROY', text: 'Turkish • Asian', img: '/assets/catalog/image.png' },
  { title: 'Teplodom', text: 'Central asian • Asian', img: '/assets/catalog/image.png' }
]

const Store = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box className={styles.container}>
        <div className={styles.store__top}>
          <Text className={styles.store__title}  fontWeight="bold">
            Лучшие строительные магазины
          </Text>
          <Box className={styles.title_button}>
          <Button 
            color="#fff"
            bgColor="#53c4af"
            fontWeight="500"
            fontSize="clamp(12px, 2vw, 16px)"
            px="20px"
            py="8px"
            _hover={{ bgColor: '#48aa98' }}
          >
            Все магазины
          </Button>
          </Box> 
          
        </div>
        
     <Box className={styles.store__content}>
        {isMobile ? (
          <Swiper spaceBetween={10} slidesPerView="auto" className={styles.store__slider} breakpoints={1300}>
            {storeItems.map((item, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <Box className={styles.card}>
                  <Image src={item.img} alt={item.title} className={styles.image} />
                  <Text className={styles.store__intitle}>{item.title}</Text>
                  <Text className={styles.store__intext}>{item.text}</Text>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.grid}>
            {storeItems.map((item, index) => (
              <Box key={index} className={styles.card}>
                <Image src={item.img} alt={item.title} className={styles.image} />
                <Text className={styles.store__intitle}>{item.title}</Text>
                <Text className={styles.store__intext}>{item.text}</Text>
              </Box>
            ))}
          </div>
        )}
      </Box>
      <Box className={styles.after__button}>
        <Button
          color="#fff"
          bgColor="#53c4af"
          fontWeight="500"
          w={'100%'}
          py="8px"
          _hover={{ bgColor: '#48aa98' }}
        >
          Все магазины
        </Button>
      </Box>
    </Box>
  )
}

export default Store
