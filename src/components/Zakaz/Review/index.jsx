import React, { useRef } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react'
import { Upfinger } from '@/icons/upfinger'
import { Downfinger } from '@/icons/downfinger'
import styles from './styles.module.scss'

const Review = ({ isOpen, onClose, product }) => {
  const initialRef = useRef(null)

  if (!product) return null

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent   maxW={{ base: 'calc(100% - 40px)', md: '500px' }} // на мобилке 20px слева и справа
  mx={{ base: '20px', md: 'auto' }}   >
        <ModalHeader>Оцените товар</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex align="center" gap="12px" mb="16px">
             <Box
              w={{ base: '250px', sm: '60px', md: '70px' }} // размеры зависят от экрана
              h={{ base: '100px', sm: '60px', md: '70px' }}
              borderRadius="8px"
              overflow="hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
            <Box>
              <Text fontWeight="bold" fontSize="14px">{product.name}</Text>
              <Text fontSize="13px">Цвет: {product.color}</Text>
              <Text fontSize="13px">Количество: {product.quantity}</Text>
              <Text fontSize="13px">Стоимость: {product.price}</Text>
            </Box>
          </Flex>

            <Box className={styles.rate_product}>
              <FormLabel>Как вам товар?</FormLabel>
            <Flex gap={3} className={styles.rate_fingers}>
                <Upfinger/>
               <Downfinger/>
            </Flex>
            </Box>

          <FormControl mb={2}>
            <Input ref={initialRef} placeholder="Достоинства" />
          </FormControl>
          <FormControl mb={2}>
            <Input placeholder="Недостатки" />
          </FormControl>
          <FormControl>
            <Input placeholder="Комментарии" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button color="#fff" bgColor={'#53C4AF'} mr={3}>Оставить отзыв</Button>
          <Button onClick={onClose}>Отмена</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Review
