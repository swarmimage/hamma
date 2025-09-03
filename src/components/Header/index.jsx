'use client'

import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { LogoIcon } from '@/icons/logo-icon'
import SearchInput from './components/input'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { BascketIcon } from '@/icons/basket-icon'
import Headeradaptive from './components/input/headeradaptive'
import Catgories from './components/input/subinput'
import Registration from '../Registration'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/auth-context'
import { useCart } from '@/context/cart-context'  // ✅ добавил импорт
import TopBar from '../Topbar'
import LanguageSelect from './language'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  const { isAuthenticated } = useAuth()
  const { cartItems } = useCart()   // ✅ достаем cartItems из контекста
  const router = useRouter()

  // ✅ считаем количество товаров в корзине
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  )

  return (
    <>
      <Box className={styles.header_box} position="fixed" zIndex={20} top="0" left="0" w="100%">
        <TopBar />
        <div className={styles.container}>
          <div className={styles.header_wrapper}>
            <div className={styles.haeder}>
              {/* Лого */}
              <Link href="/" passHref>
                <Box className={styles.header__logo} cursor="pointer">
                  <LogoIcon />
                </Box>
              </Link>

              {/* Поиск + категории */}
              <div className={styles.header__search}>
                <Button
                  className={styles.header__search_btn}
                  background="#53C4AF"
                  color="white"
                  _hover={{ background: '#38b2ac' }}
                  onClick={() => setIsOpen(prev => !prev)}
                  minW="90px"
                  h="36px"
                  padding="0 10px"
                >
                  <HStack spacing="6px">
                    {isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={4} />}
                    <Text fontSize="sm">Категории</Text>
                  </HStack>
                </Button>

                <div className={styles.searchWrapper}>
                  <SearchInput />
                </div>
              </div>

              {/* Адаптив */}
              <div className={styles.adaptiveWrapper}>
                <Headeradaptive />
              </div>

              {/* Настройки справа */}
              <div className={styles.header__settings}>
                {/* Язык */}
                <div className={styles.settings_language}>
                  <LanguageSelect />
                </div>

                {/* Корзина */}
                <Link href="/basket" className={styles.basket__box} passHref>
                  <Box position="relative">
                    <BascketIcon />
                    {totalQuantity > 0 && (
                      <Box
                        position="absolute"
                        top="-4px"
                        right="-6px"
                        bg="red.500"
                        color="white"
                        fontSize="10px"
                        padding={'3px 3px'}
                        borderRadius="22px"
                        fontWeight="bold"
                        lineHeight="1"
                      >
                        {totalQuantity}
                      </Box>
                    )}
                  </Box>
                  <Text className={styles.basket__txt} fontSize={12}>
                    корзина
                  </Text>
                </Link>

                {/* Вход / Профиль */}
                {isAuthenticated ? (
                  <Box
                    className={styles.signup}
                    onClick={() => router.push('/profile')}
                  >
                    <Text>Личный кабинет</Text>
                  </Box>
                ) : (
                  <Box
                    className={styles.signup}
                    onClick={() => setIsRegistrationOpen(true)}
                  >
                    <Text>Войти</Text>
                  </Box>
                )}
              </div>

              {/* Иконка корзины для адаптива */}
              <Box className={styles.signup1}>
                <Link href="/basket" passHref>
                  <BascketIcon />
                   {totalQuantity > 0 && (
                      <Box
                        position="absolute"
                        top="17px"
                        right="22px"
                        bg="red.500"
                        color="white"
                        fontSize="10px"
                        padding={'2px 2px'}
                        borderRadius="22px"
                        fontWeight="bold"
                        lineHeight="1"
                      >
                        {totalQuantity}
                      </Box>
                    )}
                </Link>
              </Box>
            </div>
          </div>
        </div>
      </Box>

      <Box
        pos="fixed"
        top="110px"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0,0,0,0.3)"
        backdropFilter="blur(2px)"
        transition="opacity 0.3s ease"
        opacity={isOpen ? 1 : 0}
        pointerEvents={isOpen ? 'auto' : 'none'}
        zIndex={10}
        onClick={() => setIsOpen(false)}
      />

      <Box
        pos="fixed"
        top="110px"
        left="0"
        w="100%"
        h="300px"
        bg="white"
        transition="all 0.3s ease"
        transform={isOpen ? 'translateY(0)' : 'translateY(-20px)'}
        opacity={isOpen ? 1 : 0}
        pointerEvents={isOpen ? 'auto' : 'none'}
        zIndex={11}
        onClick={(e) => e.stopPropagation()}
      >
        <Catgories isOpen={isOpen} />
      </Box>

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
          >
            <Registration onClose={() => setIsRegistrationOpen(false)} />
          </Box>
        </Box>
      )}
    </>
  )
}

export default Header
