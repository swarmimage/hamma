'use client'

import { Box, HStack, Link, Text } from '@chakra-ui/react'
import styles from './styles.module.scss'

const TopBar = () => {
  return (
    <Box className={styles.topbar}>
      <HStack spacing={6}>
        <Link href="/aboutus" className={styles.topbar_link}>
          О нас
        </Link>
        <Link href="/contact" className={styles.topbar_link}>
          Контакты
        </Link>
        <Link href="/action" className={styles.topbar_link}>
          Акции
        </Link>
        <Link href="/action" className={styles.topbar_link}>
          Новости
        </Link>
      </HStack>
    </Box>
  )
}

export default TopBar
