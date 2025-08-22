import React, { useState } from 'react'
import { Box, Text, Flex, useDisclosure } from '@chakra-ui/react'
import styles from './styles.module.scss'
import { Check } from '@/icons/check'
import { List } from '@/icons/list'
import Review from './Review'
import { ChevronDownIcon } from '@chakra-ui/icons'

const orderMeta = {
  id: '46598528',
  itemsCount: 2,
}

const orderInfo = [
  {
    label: 'Статус:',
    value: 'В обработке',
    timestamp: 'Обновлен 15 января 2025 г. в 22:26',
    isStatus: true,
  },
  {
    label: 'Дата заказа:',
    value: 'среда, 15 января 2025 г. в 22:26',
  },
  {
    label: 'Дата доставки:',
    value: 'пятница, 17 января',
  },
  {
    label: 'Сумма заказа:',
    value: '145 000 сум',
  },
]

const products = [
  {
    image: '/assets/top/1.png',
    name: 'Ключ трубный рычажный Hanskonner 1", №1, 320 мм, тип L 90, CRV сталь, HK1045-03-P1',
    color: 'Фиолетовый',
    quantity: 1,
    price: '112 900 сум',
  },
  {
    image: '/assets/top/1.png',
    name: 'Дрель TOTAL TIDLI20605',
    color: 'Синий',
    quantity: 1,
    price: '112 900 сум',
  },
]

const Order = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleOpenReview = (product) => {
    setSelectedProduct(product)
    onOpen()
  }

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.card}>
        <Box className={styles.header}>
          <Text className={styles.title}>ID заказа {orderMeta.id}</Text>
        </Box>

        <Box className={styles.body}>
          {orderInfo.map((item, idx) => (
            <Flex key={idx} className={styles.row}>
              <Text className={styles.label}>{item.label}</Text>
              {item.isStatus ? (
                <>
                  <Text className={styles.status}>{item.value}</Text>
                  <Text className={styles.timestamp}>{item.timestamp}</Text>
                </>
              ) : (
                <Text className={styles.value}>{item.value}</Text>
              )}
            </Flex>
          ))}

          <Flex className={styles.row}>
            <Check />
            <Text className={styles.label}>Электронный чек</Text>
          </Flex>
        </Box>

        <Flex className={styles.footer}>
          <Text
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className={styles.footerText}
          >
            <span className={`${styles.arrow} ${isExpanded ? styles.up : ''}`}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {isExpanded
              ? `${orderMeta.itemsCount} товара`
              : `${orderMeta.itemsCount} товар`}
          </Text>
        </Flex>


        {/* 🔹 Вместо удаления из DOM — класс для анимации */}
        <Box
          className={`${styles.products_wrapper} ${isExpanded ? styles.expanded : ''}`}
        >
          {products.map((product, idx) => (
            <Box key={idx} className={styles.product_card}>
              <Box className={styles.product_image}>
                <img src={product.image} alt={product.name} />
              </Box>

              <Box className={styles.product_info}>
                <Box className={styles.labels_column}>
                  <Text className={styles.label}>Наименование</Text>
                  <Text className={styles.label}>Цвет:</Text>
                  <Text className={styles.label}>Количество:</Text>
                  <Text className={styles.label}>Стоимость:</Text>
                </Box>
                <Box className={styles.values_column}>
                  <Text className={styles.name}>{product.name}</Text>
                  <Text className={styles.value}>{product.color}</Text>
                  <Text className={styles.value}>{product.quantity}</Text>
                  <Text className={styles.price}>{product.price}</Text>
                </Box>
              </Box>

              <Box className={styles.review}>
                <Text
                  className={styles.review_link}
                  onClick={() => handleOpenReview(product)}
                >
                  Оставить отзыв
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Review isOpen={isOpen} onClose={onClose} product={selectedProduct} />
    </Box>
  )
}

export default Order
