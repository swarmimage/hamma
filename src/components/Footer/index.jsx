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
            <Text fontWeight="bold">Информация</Text>
              <Link
                as={NextLink}
                href="/aboutus"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                О нас
              </Link>
              <Link
                as={NextLink}
                href="/aboutus"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                Блог
              </Link>
              <Link
                as={NextLink}
                href="/contact"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                Контакты
              </Link>
              <Link
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
            <Text fontWeight="bold">Контакты для предложений</Text>
            <Text as={NextLink} href="/" color="gray.400" _hover={{ color: "white" }}>yordam@hamma.uz</Text>
            <Link as={NextLink} href="/" color="gray.400" _hover={{ color: "white" }}>Форма обратной связи</Link>
          </VStack>

          {/* Телефон и адрес */}
          <VStack align="flex-start" spacing={2}>
            <Text fontWeight="bold">Телефон</Text>
            <Text as={NextLink} href="/" color="gray.400" _hover={{ color: "white" }}>+998 90 123 45 67</Text>
            <Text fontWeight="bold" pt={2}>Адрес</Text>
            <Text as={NextLink} href="/" color="gray.400" _hover={{ color: "white" }}>Алмазарский район,<br />ул. Джами, 12.</Text>
          </VStack>

          {/* Оплата и соцсети */}
          <VStack align="flex-start" spacing={3}>
            <Text fontWeight="bold">Платежная система</Text>
            <HStack spacing={3}>
              <Image src="assets/payment/payme.png" alt="Click" h="6" />
              <Image src="assets/payment//click.png" alt="Payme" h="6" />
            </HStack>

            <Text fontWeight="bold">LOGO в соц.сетях</Text>
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
            <Text>HAMMA - Все права защищены.</Text>
            <HStack spacing={6} pt={{ base: 2, md: 0 }}>
              <Link as={NextLink} href="/" color="gray.400" _hover={{ color: "white" }}>Политика конфиденциальности</Link>
              <Link as={NextLink} href="/" color="gray.400" _hover={{ color: "white" }}>Условия использования</Link>
            </HStack>
          </Flex>
        </Box></div>
    </Box>

  )
}

export default Footer
