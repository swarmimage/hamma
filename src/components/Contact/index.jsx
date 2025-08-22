import { Box, Text } from '@chakra-ui/react'
import styles from './styles.module.scss'
import React from 'react'
import { Phonecall } from '@/icons/phonecall';
import { Locationcall } from '@/icons/Locationcall';
import YandexMap from '../Yandex/index.';
import { Contact } from '@/icons/about-contact';
import { Aboutnumbern } from '@/icons/Aboutnumber';
import { Aboutmail } from '@/icons/Aboutmail';
import { Aboutmessage } from '@/icons/Aboutmessage';

export const numberItems = [
    {
        id: 1,
        address: "Чиланзарский район, квартал-7, д 45б (Квартал)",
        phone: "+8801611112222",
        fullAddress: "100115, г. Ташкент, Чиланзарский район, квартал-7, д 45б (Квартал)",
        img: <Phonecall />,
        loc: <Locationcall />,
    },

    {
        id: 2,
        address: "Чиланзарский район, квартал-7, д 45б (Квартал)",
        phone: "+8801611112222",
        fullAddress: "100115, г. Ташкент, Чиланзарский район, квартал-7, д 45б (Квартал)",
        img: <Phonecall />,
        loc: <Locationcall />,
    },
    {
        id: 3,
        address: "Чиланзарский район, квартал-7, д 45б (Квартал)",
        phone: "+8801611112222",
        fullAddress: "100115, г. Ташкент, Чиланзарский район, квартал-7, д 45б (Квартал)",
        img: <Phonecall />,
        loc: <Locationcall />,
    },
    {
        id: 4,
        address: "Чиланзарский район, квартал-7, д 45б (Квартал)",
        phone: "+8801611112222",
        fullAddress: "100115, г. Ташкент, Чиланзарский район, квартал-7, д 45б (Квартал)",
        img: <Phonecall />,
        loc: <Locationcall />,
    },
    {
        id: 5,
        address: "Чиланзарский район, квартал-7, д 45б (Квартал)",
        phone: "+8801611112222",
        fullAddress: "100115, г. Ташкент, Чиланзарский район, квартал-7, д 45б (Квартал)",
        img: <Phonecall />,
        loc: <Locationcall />,
    }
];


const Numbers = () => {
    return (
        <Box className={styles.container}>
            <Box className={styles.contact__wrapper}>
                <Box className={styles.contact}>

                    <Text className={styles.contact__title}>Контакты</Text>


                    <Box className={styles.contacts_card}>
                        <Box className={styles.card_right}>
                            {Array.isArray(numberItems) && numberItems.map((item) => (
                                <Box className={styles.card_contact}>
                                    <Box key={item.id} className={styles.card_contactin}>
                                        <Text className={styles.right_adress}>{item.address}</Text>
                                        <Text className={styles.right_phone}>{item.img} {item.phone}</Text>
                                        <Text className={styles.right_phone}>{item.loc} {item.fullAddress}</Text>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        <Box className={styles.card_left}>
                            <YandexMap />
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
    )
}

export default Numbers
