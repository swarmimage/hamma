// components/MaterialCard/index.js
import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { Box, Image, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCart } from "@/context/cart-context";
import Link from 'next/link';

// Товары прямо тут
export const storeItems = [
  {
    id: 1,
    rate: '4.8',
    vote: '( 1079 оценок )',
    title: 'Дрель с Li-ion аккумулятором TOTAL TDLI200518',
    price: '1 650 000 сум',
    discount: '-5%',
    totalprice: '1 410 000 сум',
    img: '/assets/top/1.png',
    basket: '/assets/top/5.png',
    star: '/assets/top/6.png'
  },
  {
    id: 2,
    rate: '4.1',
    vote: '( 121 оценка )',
    title: 'Ключ трубный рычажный Hanskonner 1", №1, 320 мм, тип L 90, CRV сталь, HK1045-03-P1',
    price: '1 650 000 сум',
    discount: '-5%',
    totalprice: '1 570 000 сум',
    img: '/assets/top/2.png',
    basket: '/assets/top/5.png',
    star: '/assets/top/6.png',
  },
  {
    id: 3,
    rate: '2.8',
    vote: '( 112 оценок )',
    title: 'Точильный станок EPA EST-300B',
    price: '150 000 сум',
    discount: '-5%',
    totalprice: '142 500 сум',
    img: '/assets/top/3.png',
    basket: '/assets/top/5.png',
    star: '/assets/top/6.png',
  },
  {
    id: 4,
    rate: '4.5',
    vote: '( 98 оценок )',
    title: 'Перфоратор BOSCH GBH 2-26 DFR Professional',
    price: '710 000 сум',
    discount: '-10%',
    totalprice: '639 000 сум',
    img: '/assets/top/4.png',
    basket: '/assets/top/5.png',
    star: '/assets/top/6.png',
  }
];

const MaterialCard = () => {
  const { addToCart } = useCart();
  const [useSlider, setUseSlider] = useState(false);
  const measureRef = useRef(null);

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const check = () => {
      const row = el.querySelector(`.${styles.row}`);
      if (!row) return;
      setUseSlider(row.scrollWidth > row.clientWidth);
    };

    const ro = new ResizeObserver(check);
    ro.observe(el);
    requestAnimationFrame(check);

    window.addEventListener('resize', check);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', check);
    };
  }, []);

  const handleAddToCart = (item) => addToCart(item);

  const renderCard = (item) => (
    <Link key={item.id} href={`/product/${item.id}`} style={{ textDecoration: "none" }}>
      <Box className={styles.card}>
        <Image src={item.img} alt={item.title} className={styles.image} />
        <Box className={styles.card_top}>
          <Image src={item.star} className={styles.star} alt="Star icon" />
          <Text className={styles.store__rate}>{item.rate}</Text>
          <Text className={styles.store__vote}>{item.vote}</Text>
        </Box>
        <Text className={styles.store__intitle}>{item.title}</Text>
        <Box className={styles.bottom}>
          <Box>
            <Box className={styles.card_prices}>
              <Text className={styles.store__price}>{item.price}</Text>
              <Text className={styles.store__discount}>{item.discount}</Text>
            </Box>
            <Text className={styles.store__totalprice}>{item.totalprice}</Text>
          </Box>
          <Image
            src={item.basket}
            className={styles.basket}
            alt="Добавить в корзину"
            onClick={(e) => {
              e.preventDefault(); // 
              handleAddToCart(item);
            }}
            style={{ cursor: "pointer" }}
          />
        </Box>
      </Box>
    </Link>
  );

  const cards = useMemo(() => storeItems.map(renderCard), []);

  return (
    <Box className={styles.container}>
      <div className={styles.measure} ref={measureRef} aria-hidden>
        <div className={styles.row}>
          {storeItems.map((it) => (
            <div key={`m-${it.id}`} className={styles.card} />
          ))}
        </div>
      </div>

      <Box className={styles.store__content}>
        <div className={styles.store__top}>
          <Text className={styles.store__title} fontSize="30px" fontWeight="bold">
            Популярные строительные материалы
          </Text>
        </div>

        {useSlider ? (
          <Swiper slidesPerView="auto" spaceBetween={20} className={styles.store__slider}>
            {storeItems.map(item => (
              <SwiperSlide key={item.id} className={styles.slide}>
                {renderCard(item)}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.row}>{cards}</div>
        )}
      </Box>
    </Box>
  );
};

export default MaterialCard;
