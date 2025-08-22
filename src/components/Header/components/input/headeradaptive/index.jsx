'use client'

import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Box, Button, Text, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import Registration from '@/components/Registration'
import { Signinadaptive } from '@/icons/signinadaptive'
import { Actions } from '@/icons/actions'
import { News } from '@/icons/news'
import { Brands } from '@/icons/brands'
import { Reviews } from '@/icons/reviews'
import { Anothers } from '@/icons/another'
import Link from 'next/link'

const Headeradaptive = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <>
      {/* Кнопка-бургер */}
      <Button
        onClick={onOpen}
        className={styles.header__search_btn}
        background="#4ecdc4"
        color="white"
        _hover={{ background: '#38b2ac' }}
        minW="40px"
        h="40px"
        padding="0 10px"
      >
        <HamburgerIcon boxSize={4} />
      </Button>

      {/* Drawer */}
      <Drawer isOpen={isOpen} onClose={onClose} size="full" z-index={9999}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Меню</DrawerHeader>

          <DrawerBody>
            <Box className={styles.body} fontWeight={600}>
              <Link href="/action" passHref>
                <Box as="a" className={styles.body__button}>
                  <Actions /> Акции
                </Box>
              </Link>

              <Link href="/action" passHref>
                <Box as="a" className={styles.body__button}>
                  <News /> Новости
                </Box>
              </Link>

              <Link href="/contact" passHref>
                <Box as="a" className={styles.body__button}>
                  <Brands /> Контакты
                </Box>
              </Link>

              <Link href="/aboutus" passHref>
                <Box as="a" className={styles.body__button}>
                  <Reviews /> О нас
                </Box>
              </Link>

              <Link href="/anothers" passHref>
                <Box as="a" className={styles.body__button}>
                  <Anothers /> Другие
                </Box>
              </Link>

              <Box className={styles.body__language}>
                <Text className={styles.body__language}>Язык:</Text>
                <Button className={styles.body__btn} fontSize={12} >Рус</Button>
                <Button className={styles.body__btn} fontSize={12} >Узб</Button>
              </Box>
            </Box>
          </DrawerBody>

          <DrawerFooter pt="0" pb="0" mb="130px">
            <Button className='signup_button'
              onClick={() => {
                setIsRegistrationOpen(true)
                onClose()
              }}
              color="#4ecdc4"
              gap={1}
              w={['90%', '100%', '400px']}   // Ширина адаптивно меняется
              maxW="600px"                  // Ограничение максимальной ширины
              mx="auto"                    // Центр по горизонтали
              display="flex"              // Нужно для gap
              justifyContent="center"     // Центр контента
              textAlign="center"
            >

              <Signinadaptive /> Войти
            </Button>
          </DrawerFooter>
        </DrawerContent>

      </Drawer>
      {isRegistrationOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={9999}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => setIsRegistrationOpen(false)}
        >
          <Box
            bg="white"
            p={6}
            borderRadius="md"
            minW="320px"
            onClick={(e) => e.stopPropagation()}
            z-index={9999}
          >
            <Registration onClose={() => setIsRegistrationOpen(false)} />
          </Box>
        </Box>
      )}
    </>
  )
}

export default Headeradaptive
