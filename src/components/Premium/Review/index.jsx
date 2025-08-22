import React, { useRef, useState } from 'react'
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
  Input,
  Text,
  Grid,
  Box,
} from '@chakra-ui/react'
import { Premverify } from '@/icons/premver-icon'
import styles from './styles.module.scss'
import Link from 'next/link'

const Premreview = ({ isOpen, onClose, product }) => {
  const initialRef = useRef(null)

  const [formData, setFormData] = useState({
    region: '',
    city: '',
    street: '',
    house: '',
    flat: '',
    entrance: '',
    floor: '',
    code: '',
    landmark: '',
  })

  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  if (!product) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const isInvalid = (field) =>
    touched[field] && formData[field].trim().length === 0

  const requiredFields = ['region', 'city', 'street', 'house', 'flat']

  const handleSubmit = () => {
    const emptyFields = requiredFields.filter((f) => formData[f].trim().length === 0)

    if (emptyFields.length > 0) {
      const newTouched = {}
      emptyFields.forEach((f) => (newTouched[f] = true))
      setTouched((prev) => ({ ...prev, ...newTouched }))
      return
    }

    // Отправка данных (например, в бекенд)
    console.log('Отправка:', formData)

    setSubmitted(true)
  }

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{submitted ? 'Успешно!' : 'Адрес доставки'}</ModalHeader>
        <ModalCloseButton />

        <ModalBody pb={6}>
          {submitted ? (
            <Box className={styles.card} textAlign="center">
              <Premverify className={styles.logo} />
              <Text className={styles.title}>Ваша заявка отправлена успешно</Text>
              <Text className={styles.text}>Скоро с вами свяжутся наши операторы</Text>
            </Box>
          ) : (
            <>
              {requiredFields.map((field) => (
                <FormControl key={field} mb={2} isInvalid={isInvalid(field)}>
                  <Input
                    name={field}
                    placeholder={field[0].toUpperCase() + field.slice(1) + '*'}
                    value={formData[field]}
                    onChange={handleChange}
                    ref={field === 'region' ? initialRef : undefined}
                  />
                  {isInvalid(field) && (
                    <Text color="red.500" fontSize="12px">
                      Обязательное поле
                    </Text>
                  )}
                </FormControl>
              ))}

              <Grid templateColumns="1fr 1fr" gap={3}>
                <FormControl mb={2}>
                  <Input
                    name="entrance"
                    placeholder="Подъезд"
                    value={formData.entrance}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl mb={2}>
                  <Input
                    name="floor"
                    placeholder="Этаж"
                    value={formData.floor}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>

              <FormControl mb={2}>
                <Input
                  name="code"
                  placeholder="Код домофона"
                  value={formData.code}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <Input
                  name="landmark"
                  placeholder="Ориентир"
                  value={formData.landmark}
                  onChange={handleChange}
                />
              </FormControl>
            </>
          )}
        </ModalBody>

        <ModalFooter>
          {submitted ? (
            <Link href="/" passHref>
              <Button as="a" colorScheme="teal" mr={3}>
                Вернуться на главную
              </Button>
            </Link>
          ) : (
            <>
              <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
                Добавить
              </Button>
              <Button onClick={onClose}>Отмена</Button>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Premreview
