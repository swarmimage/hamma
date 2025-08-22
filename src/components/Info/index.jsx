import { Box, Text } from '@chakra-ui/react'
import styles from './styles.module.scss'
import React from 'react'
import { Abouticon } from '@/icons/about-icon'
import { Aboutimage } from '@/icons/about-image'
import { Contact } from '@/icons/about-contact'
import { Aboutnumbern } from '@/icons/Aboutnumber'
import { Aboutmail } from '@/icons/Aboutmail'
import { Aboutmessage } from '@/icons/Aboutmessage'

const Info = () => {
    return (
        <Box className={styles.container}>
            <Box className={styles.about__wrapper}>
                <Box className={styles.about}>

                    <Text className={styles.about__title}>О нас</Text>

                    <Box className={styles.header}>
                        <Box className={styles.header__icon}>
                            <Abouticon />
                        </Box>
                        <Text className={styles.header_title}>
                            Hamma kerakli mahsulotlar
                        </Text>
                    </Box>


                    <Box className={styles.about__body}>


                        <Box className={styles.body__top}>
                            <Box className={styles.top__image}>
                                <Aboutimage />
                                <Aboutimage />
                                <Aboutimage />
                            </Box>
                            <Box className={styles.top__desc}>
                                <Text className={styles.top__text}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Text>
                            </Box>
                        </Box>


                        <Box className={styles.body__down}>
                            <Box className={styles.down_title}>
                                Цифры <br />Hamma
                            </Box>
                            <Box className={styles.top__text}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Box>
                            <Box className={styles.down__image}>
                                <Aboutimage />
                            </Box>


                            <Box className={styles.body__data}>
                                <Box className={styles.data}>
                                    <Text className={styles.data__title}>20+</Text>
                                    <Text className={styles.data__text}>Филиалов</Text>
                                </Box>
                                <Box className={styles.data}>
                                    <Text className={styles.data__title}>30+</Text>
                                    <Text className={styles.data__text}>мероприятий</Text>
                                </Box>
                                <Box className={styles.data}>
                                    <Text className={styles.data__title}>2млн+</Text>
                                    <Text className={styles.data__text}>Это много вкусных моментов, которые <br /> мы создали для наших клиентов.</Text>
                                </Box>
                                <Box className={styles.data}>
                                    <Text className={styles.data__title}>1200+</Text>
                                    <Text className={styles.data__text}>это не просто команда,<br /> это дружная семья.</Text>
                                </Box>

                            </Box>
                        </Box>

                        <Box className={styles.adaptive}>
                            <Box className={styles.adaptive_title}>
                                Как с нами связаться
                            </Box>

                            <Box className={styles.adaptive_body}>
                                <Box className={styles.adaptive_box}>
                                    <Contact/>
                                    <Box className={styles.adaptive_minibox}>
                                        <Text className={styles.adaptivein__title}>Колл-центр</Text>
                                        <Text className={styles.adaptive__text}>1223</Text>
                                    </Box>
                                </Box>
                                <Box className={styles.adaptive_box}>
                                    <Aboutnumbern/>
                                    <Box className={styles.adaptive_minibox}>
                                        <Text className={styles.adaptivein__title}>Telegram номер</Text>
                                        <Text className={styles.adaptive__text}>+8801611112222</Text>
                                    </Box>
                                </Box>
                                <Box className={styles.adaptive_box}>
                                    <Aboutmail/>
                                    <Box className={styles.adaptive_minibox}>
                                        <Text className={styles.adaptivein__title}>Электронная почта</Text>
                                        <Text className={styles.adaptive__text}>customer@exclusive.com</Text>
                                    </Box>
                                </Box>
                                <Box className={styles.adaptive_box}>
                                    <Aboutmessage/>
                                    <Box className={styles.adaptive_minibox}>
                                        <Text className={styles.adaptivein__title}>Обратная связь</Text>
                                        <Text className={styles.adaptive__text}>Оставить заявку</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Info
