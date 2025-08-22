import React from 'react'
import { Box, Button, Text, useDisclosure } from '@chakra-ui/react'
import styles from './styles.module.scss'
import { Preminfo } from '@/icons/preminfo-icon'
import { Premverify } from '@/icons/premver-icon'
import { Premicon } from '@/icons/prem-icon'
import Premreview from './Review' // Папка ./Review/index.jsx

const premiumDescription = [
  { label: 'Год бесплатной доставки до руки' },
  { label: 'Начисления балов для покупки товаров' },
  { label: 'Приоритетная обслуживания заказа и обращения' },
  { label: 'Уведомления о акциях и скидках заранее' },
  { label: 'Дополнительные скидки и Акции для Premium' },
]

// 🔹 Пример продукта
const mockProduct = {
  name: 'Premium-подписка HAMMA+',
  image: 'https://via.placeholder.com/60',
  color: '—',
  quantity: 1,
  price: '0 сум',
}

const Premium1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box className={styles.premium_wrapper}>
      <Box className={styles.premium}>
        <Box className={styles.card}>
          <Box className={styles.header}>
            <Premicon />
            <Text className={styles.title}>HAMMA+</Text>
          </Box>

          <Box className={styles.list}>
            {premiumDescription.map((item, index) => (
              <Box className={styles.paragraph} key={index}>
                <Box className={styles.paragraphin}>
                  <Premverify />
                  <Text className={styles.text} fontSize={['12px', '14px', '15px']}>
                    {item.label}
                  </Text>
                </Box>
                <Preminfo className={styles.prd} />
              </Box>
            ))}

            <Box px="20px" py="10px">
              <Button
                className={styles.button}
                bgColor="#53C4AF"
                color="#fff"
                fontSize={['12px', '14px', '15px']}
                _hover={{ bgColor: '#4eb6a3' }}
                width="100%"
                maxWidth="460px"
                mx="auto"
                display="block"
                borderRadius="12px"
                fontWeight="600"
                onClick={onOpen}
              >
                Стать премиум клиентом
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Premreview isOpen={isOpen} onClose={onClose} product={mockProduct} />
    </Box>
  )
}

export default Premium1
