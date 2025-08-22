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

  if (!product) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const isInvalid = (field) =>
    touched[field] && formData[field].trim().length === 0

  const handleSubmit = () => {
    const required = ['region', 'city', 'street', 'house', 'flat']
    const emptyFields = required.filter((f) => formData[f].trim().length === 0)

    if (emptyFields.length > 0) {
      const newTouched = {}
      emptyFields.forEach((f) => (newTouched[f] = true))
      setTouched((prev) => ({ ...prev, ...newTouched }))
      return
    }

    // Отправка данных
    console.log('Отправка:', formData)
    onClose()
  }

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody  pb={6}>

          <Flex className={styles.card} >
            <Premverify className={styles.logo}/>
            <Text className={styles.title}>Ваша заявка отправлена успешно</Text>
            <Text className={styles.text}>Скоро с вами свяжутся наши операторы</Text>
          </Flex>

        </ModalBody>

        <ModalFooter>
          <Button className={styles.button} colorScheme="teal" mr={3} onClick={handleSubmit}>
            Вернутся на главную
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Premreview
