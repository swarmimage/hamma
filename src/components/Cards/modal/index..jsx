import {
  Modal as ChakraModal,
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
} from '@chakra-ui/react'
import React, { useState } from 'react'
import ConfirmCardModal from './confirm/index.' 

const AddCardModal = ({ isOpen, onClose }) => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const handleSubmit = () => {
    const cardInfo = {
      number: cardNumber,
      holder: cardHolder,
      expiry,
      cvv,
    }

    console.log('Card info:', cardInfo)
    setIsConfirmOpen(true)
    onClose()
  }

  const handleCloseConfirm = () => {
    setIsConfirmOpen(false)
  }

  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Добавление карты</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap="16px">
            <FormControl>
              <FormLabel>Номер карты</FormLabel>
              <Input
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                maxLength={19}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Имя владельца</FormLabel>
              <Input
                placeholder="Иван Иванов"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Срок действия</FormLabel>
              <Input
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                maxLength={5}
              />
            </FormControl>

            <FormControl>
              <FormLabel>CVV</FormLabel>
              <Input
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength={3}
                type="password"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
              Добавить
            </Button>
            <Button onClick={onClose}>Закрыть</Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>

      {/* Модал подтверждения */}
      <ConfirmCardModal isOpen={isConfirmOpen} onClose={handleCloseConfirm} />
    </>
  )
}

export default AddCardModal
