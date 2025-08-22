import { Box, Button, Text, Flex, Grid } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Person } from '@/icons/person'
import { Zakaz } from '@/icons/zakaz'
import { Premium } from '@/icons/premium'
import { Cart } from '@/icons/Cart'
import Data from '../Data'
import Order from '../Zakaz'
import Premium1 from '@/components/Premium'
import Cards from '../Cards/index.'

const panelButtons = [
  { label: 'Мои Данные', icon: <Person />, key: 'data', component: <Data /> },
  { label: 'Мои заказы', icon: <Zakaz />, key: 'orders', component: <Order/> },
  { label: 'Премиум подписка', icon: <Premium />, key: 'premium', component: <Premium1/> },
  { label: 'Мои карты', icon: <Cart />, key: 'cards', component: <Cards/> },
]

const userFullName = 'Фамилия Имя'

const Panel = () => {
  const [activeTab, setActiveTab] = useState('data')
  const activePanel = panelButtons.find((panel) => panel.key === activeTab)

  return (
    <Box className={styles.container}>
      <Box className={styles.panel_wrapper}>
        <Box className={styles.panel}>
          <Box className={styles.panel_title}>
            <Text className={styles.panel_link}>Главная</Text>
            <Text mx={1}>/</Text>
            <Text className={styles.panel_link}>Профиль</Text>
          </Box>

          <Grid
            gridTemplateColumns={['1fr', null, '1fr 3fr']}
            gap="24px"
            className={styles.panel_main}
          >
            <Box className={styles.panel_card}>
              <Text className={styles.panel_username}>{userFullName}</Text>

              <Flex flexDirection="column"  mt="16px">
                {panelButtons.map((panel) => (
                  <Button
                    key={panel.key}
                    onClick={() => setActiveTab(panel.key)}
                    leftIcon={panel.icon}
                    fontSize="14px"
                    fontWeight="500"
                    borderRadius="8px"
                    bg={activeTab === panel.key ? '#68D3C4' : 'transparent'}
                    color={activeTab === panel.key ? '#ffffff' : '#999'}
                    justifyContent="flex-start"
                    _hover={{ bg: '#68D3C4', color: '#ffffff' }}
                    w="100%"
                    overflow="hidden"
                  >
                    {panel.label}
                  </Button>
                ))}
              </Flex>
            </Box>

            <Box className={styles.panel_content}>{activePanel?.component}</Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default Panel
