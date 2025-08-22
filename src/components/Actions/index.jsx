import { Box, Button, Text } from '@chakra-ui/react'
import styles from './styles.module.scss'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import More from './more';
import img1 from "../../../public/actionimg/1.svg";
import img2 from "../../../public/actionimg/2.svg";
import img3 from "../../../public/actionimg/3.svg";

export const actionsItems = [
  {
    id: 1,
    title: "Дрели алмазного бурения",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    img: img3,
  },
  {
    id: 2,
    title: "Мойки высокого давления",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    img: img2,
  },
  {
    id: 3,
    title: "Точильные станки",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    img: img1,
  },
  {
    id: 4,
    title: "Точильные станки",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    img: img1,
  },
  {
    id: 5,
    title: "Мойки высокого давления",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    img: img2,
  },
  {
    id: 6,
    title: "Дрели алмазного бурения",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    img: img3,
  },
];




const Actions = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (


    <Box className={styles.container}>
      <Box className={styles.contact__wrapper}>
        <Box className={styles.contact}>
          <Text className={styles.contact__title}>Акции</Text>

          {/* Грид карточек */}
          <Box className={styles.contacts_card}>
            {actionsItems.map(item => (
              <Box key={item.id} className={styles.card_contactin}>
                <Box className={styles.card_img}>
                  <Image src={item.img} alt={item.title} width={388} height={100} />
                </Box>

                <Text className={styles.card_title}>{item.title}</Text>
                <Text className={styles.card_text}>{item.description}</Text>

                <Box className={styles.card_buttons}>
                  <Link href={`/more/${item.id}`} passHref>
                    <Button
                      as="a"
                      className={styles.card_button}
                      color="#53C4AF"
                      bgColor="#fff"
                      fontWeight={600}
                      border="1px solid"
                      borderColor="#53C4AF"
                      _hover={{ bg: "gray.200" }}
                    >
                      Подробнее
                    </Button>
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {selectedItem && (
        <More item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

    </Box>
  )
}

export default Actions
