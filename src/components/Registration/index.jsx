'use client'

import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import styles from './styles.module.scss'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/navigation'

const Registration = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('user')
  const [password, setPassword] = useState('123456')
  const [error, setError] = useState('')
  const minW = useBreakpointValue({ base: '90%', sm: '400px' })

  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = () => {
    const success = login(username, password)
    if (success) {
      onClose()               // закрываем модалку
      router.push('/profile') // переходим в ЛК
    } else {
      setError('Неверный логин или пароль')
    }
  }

  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      bg="rgba(0,0,0,0.3)"
      align="center"
      justify="center"
      zIndex={9999}
      onClick={onClose}
      px={4}
    >
      <Box
        bg="white"
        p={[4, 6]}
        borderRadius="md"
        boxShadow="lg"
        minW={minW}
        onClick={(e) => e.stopPropagation()}
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Вход
        </Text>

        <Input
          placeholder="Введите логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          mb={4}
        />

        <InputGroup mb={4}>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>

        {error && (
          <Text color="red.500" fontSize="sm" mb={2}>
            {error}
          </Text>
        )}

        <Box className={styles.version}>
          <Text className={styles.version__text}>Нету аккаунта? Зарегистрируйтесь</Text>
          <Text className={styles.version__text}>Стать продавцом</Text>
        </Box>

        <Button
          bg="#53c4af"
          color="white"
          w="100%"
          mt={2}
          onClick={handleLogin}
        >
          Войти
        </Button>
      </Box>
    </Flex>
  )
}

export default Registration
