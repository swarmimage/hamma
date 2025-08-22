import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Text,
  Input,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { useState } from 'react'

const ConfirmCardModal = ({ isOpen, onClose }) => {
  const [code, setCode] = useState('')
  const [timer, setTimer] = useState('01:00') 

  const handleConfirm = () => {
    console.log('Код подтверждения:', code)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="400px" borderRadius="lg" p={4}>
        <ModalHeader textAlign="center">Добавление карты</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Box textAlign="center">
              <Text fontSize="md" color="gray.600">
                Код отправили сообщением на номер
              </Text>
              <Text  fontSize="lg">
                +998 99 876 54 32
              </Text>
            </Box>

            <Box>
              <Text mb={2} fontWeight="medium">
                Код подтверждения
              </Text>
              <Input
                placeholder="000 000"
                maxLength={6}
                textAlign="center"
                fontSize="xl"
                letterSpacing="6px"
                onChange={(e) => setCode(e.target.value)}
              />
            </Box>

            <HStack justifyContent="space-between" mt={2}>
              <Text color="gray.500">Осталось:</Text>
              <Text fontWeight="medium">{timer}</Text>
            </HStack>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Button
            colorScheme="teal"
            width="100%"
            onClick={handleConfirm}
            isDisabled={code.trim().length < 6}
          >
            Подтвердить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ConfirmCardModal
