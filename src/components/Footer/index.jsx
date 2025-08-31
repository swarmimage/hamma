'use client'

import { Box, Flex, Text, Link, VStack, HStack, IconButton, Image, Container } from '@chakra-ui/react'
import NextLink from 'next/link'
import styles from './styles.module.scss'

const Footer = () => {
  return (


    <Box bg="#111416" color="white" px={{ base: 4, md: 10 }} py={8} fontSize="14px">
      <div className='container'>
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={10}>
          {/* Информация */}
          <VStack align="flex-start" spacing={2}>
            <Text className={styles.footer__title} fontWeight="bold">Информация</Text>
              <Link
              className={styles.footer__text}
                as={NextLink}
                href="/aboutus"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                О нас
              </Link>
              <Link
              className={styles.footer__text}
                as={NextLink}
                href="/aboutus"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                Блог
              </Link>
              <Link
              className={styles.footer__text}
                as={NextLink}
                href="/contact"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                Контакты
              </Link>
              <Link
              className={styles.footer__text}
                as={NextLink}
                href="/publicoffer"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                Публичный оферта
              </Link>
          </VStack>

          {/* Контакты */}
          <VStack align="flex-start" spacing={2}>
            <Text className={styles.footer__title} >Контакты для предложений</Text>
            <Text className={styles.footer__text} as={NextLink} href="/" color="gray.400" _hover={{ color: "white" }}>yordam@hamma.uz</Text>
            <Link  className={styles.footer__text} as={NextLink} href="/" color="gray.400" _hover={{ color: "white" }}>Форма обратной связи</Link>
          </VStack>

          {/* Телефон и адрес */}
          <VStack align="flex-start" spacing={2}>
            <Text className={styles.footer__title} >Телефон</Text>
            <Text className={styles.footer__text} as={NextLink} href="/" color="gray.400" _hover={{ color: "white" }}>+998 90 123 45 67</Text>
            <Text className={styles.footer__title} >Адрес</Text>
            <Text className={styles.footer__text} as={NextLink} href="/" color="gray.400" _hover={{ color: "white" }}>Алмазарский район,<br />ул. Джами, 12.</Text>
          </VStack>

          {/* Оплата и соцсети */}
          <VStack align="flex-start" spacing={3}>
            <Text className={styles.footer__title} >Платежная система</Text>
            <HStack spacing={3}>
              <Image src="assets/payment/payme.png" alt="Click" h="6" />
              <Image src="assets/payment//click.png" alt="Payme" h="6" />
            </HStack>

            <Text  className={styles.footer__title}  >LOGO в соц.сетях</Text>
            <HStack spacing={3}>
              <Image src="assets/socials/1.png" alt="Click" h="6" />
              <Image src="assets/socials/2.png" alt="Click" h="6" />
              <Image src="assets/socials/3.png" alt="Click" h="6" />
              <Image src="assets/socials/4.png" alt="Click" h="6" />
              <Image src="assets/socials/5.png" alt="Click" h="6" />
            </HStack>
          </VStack>
        </Flex>

        <Box mt={10} borderTop="1px solid #2c2c2c" pt={4}>
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <Text  className={styles.footer__text}>HAMMA - Все права защищены.</Text>
            <HStack spacing={6} pt={{ base: 2, md: 0 }}>
              <Link  className={styles.footer__text} as={NextLink} href="/" color="gray.400" _hover={{ color: "white" }}>Политика конфиденциальности</Link>
              <Link  className={styles.footer__text} as={NextLink} href="/" color="gray.400" _hover={{ color: "white" }}>Условия использования</Link>
            </HStack>
          </Flex>
        </Box></div>
    </Box>

  )
}

export default Footer
