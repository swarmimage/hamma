import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Text,
  Input,
  Image,
  InputLeftElement,
  InputGroup,
  Grid,
} from '@chakra-ui/react'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import { FormInput } from '../FormInput'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/router'

const Data = () => {
  const { control } = useForm()
  const [gender, setGender] = useState('male') // 'male' или 'female'
  const { logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/') // Переход на главную после выхода
  }

  return (
    
    <Box w={'100%'} className={styles.data_wrapper}>
      <Grid className={styles.card} templateColumns="1fr" gap={6}>
        <Text className={styles.title}>Мои данные</Text>

        <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={5}>
          <Box className={styles.input_group}>
            <Text className={styles.label}>Фамилия</Text>
            <FormInput control={control} name="surname" type="text" />
          </Box>
          <Box className={styles.input_group}>
            <Text className={styles.label}>Имя</Text>
            <FormInput control={control} name="name" type="text" />
          </Box>
          <Box className={styles.input_group}>
            <Text className={styles.label}>
              Отчество <span className={styles.optional}>(Не обязательно)</span>
            </Text>
            <FormInput control={control} name="fathername" type="text" />
          </Box>
        </Grid>

        <Grid templateColumns={['1fr', '1fr 1fr']} gap={5}>
          <Box className={styles.input_group}>
            <Text className={styles.label}>Дата рождения</Text>
            <Input placeholder="дд/мм/гггг" />
          </Box>

          <Box className={styles.gender_group}>
            <Text className={styles.label}>Пол</Text>
            <Flex>
              <Button
                className={styles.gender_btn}
                bg={gender === 'male' ? '#ccc' : '#fff'}
                color={gender === 'male' ? '#191919' : '#333'}
                onClick={() => setGender('male')}
                borderRadius="10px 0 0 10px"
                border="1px solid #ccc"
                fontSize={14}
                fontWeight={400}
              >
                Мужской
              </Button>
              <Button
                className={styles.gender_btn}
                bg={gender === 'female' ? '#ccc' : '#fff'}
                color={gender === 'female' ? '#191919' : '#333'}
                onClick={() => setGender('female')}
                borderRadius="0 10px 10px 0"
                border="1px solid #ccc"
                borderLeft="none"
                fontSize={14}
                fontWeight={400}
              >
                Женский
              </Button>
            </Flex>
          </Box>
        </Grid>

        <Box className={styles.input_group} maxW="300px">
          <Text className={styles.label}>Номер телефона</Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Image src="/flag.svg" alt="flag" boxSize="20px" ml="6px" />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="+998"
              sx={{ paddingLeft: '34px !important' }}
              w="100%"
            />
          </InputGroup>
        </Box>

        <Button className={styles.logout} onClick={handleLogout}>
          Выйти из системы
        </Button>
      </Grid>
    </Box>
  )
}

export default Data
