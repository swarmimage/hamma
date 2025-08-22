import { Box, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Jsc } from '@/icons/jsc'
import Humo from '../../../public/humo.svg'
import Image from 'next/image'
import { Mastercard } from '@/icons/mastercard'
import AddCardModal from './modal/index.'

const cardItem = [
  { number: '•••• 4024', icon: <Jsc /> },
  { number: '•••• 4024', icon: <Image src={Humo} alt="Humo" width={24} height={24} /> },
  { number: '•••• 6187', icon: <Mastercard /> },
]

const Cards = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box className={styles.container}>
      <Box className={styles.card_wrapper}>
        <Box className={styles.card}>
          <Box className={styles.card_header}>
            <Text className={styles.card_title}>Мои карты</Text>
          </Box>

          <Box className={styles.card_body} display="flex" gap="20px">
            <Box display="flex" flexDirection="column" gap="16px" alignItems="flex-start">
              {cardItem.map((item, index) => (
                <Box key={index} boxSize="24px">
                  {item.icon}
                </Box>
              ))}
            </Box>

            <Box display="flex" flexDirection="column" gap="10px" minWidth="60px">
              {cardItem.map((item, index) => (
                <Text key={index} fontSize="18px">
                  {item.number}
                </Text>
              ))}
            </Box>
          </Box>

          <Box className={styles.card_button}>
            <Button onClick={() => setIsOpen(true)} className={styles.card_btn}>
              Добавить карту
            </Button>
            <AddCardModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Cards
