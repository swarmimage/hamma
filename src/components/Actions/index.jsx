import { Box, Button, Text } from '@chakra-ui/react'
import styles from './styles.module.scss'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Actions = ({ items, title }) => {
  return (
    <div className="container">
      <Box className={styles.contact__wrapper}>
        <Box className={styles.contact}>
          <Text className={styles.contact__title}>{title}</Text>

          <Box className={styles.contacts_card}>
            {items.map(item => (
              <Box key={item.id} className={styles.card_contactin}>
                <Box className={styles.card_img}>
                  <Image src={item.img} alt={item.title} width={388} height={100} />
                </Box>

                <Text className={styles.card_title}>{item.title}</Text>
                <Text className={styles.card_text}>{item.description}</Text>

                <Box className={styles.card_buttons}>
                  <Link
                    href={{
                      pathname: `/more/${item.id}`,
                      query: { type: title === "Новости" ? "news" : "actions" },
                    }}
                  >
                    <Button
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
    </div>
  )
}

export default Actions
