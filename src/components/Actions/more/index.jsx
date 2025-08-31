// components/Actions/More.js
import React from "react";
import styles from "./styles.module.scss";
import { Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const More = ({ item }) => {
  if (!item) return null;

  return (
    <Box className="container">
      <Box className={styles.contact}>
        <Text className={styles.contact__title}>{item.title}</Text>

        <Box className={styles.more__wrapper}>
          <Box className={styles.more__image}>
            <Image
              src={item.img}
              alt={item.title}
              width={600}
              height={400}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "20px"
              }}
            />
          </Box>

          <Text className={styles.info_text}>{item.description}</Text>

          <Box className={styles.card_info}>
            <Text className={styles.card_title}>Описания 1</Text>
            <Text className={styles.info_text}>{item.description}</Text>
          </Box>
          <Box className={styles.card_info}>
            <Text className={styles.card_title}>Описания 2</Text>
            <Text className={styles.info_text}>{item.description}</Text>
          </Box>
          <Box className={styles.card_info}>
            <Text className={styles.card_title}>Условия акции:</Text>
            <Text className={styles.info_text}>{item.description}</Text>
          </Box>

          <Box className={styles.card_buttons}>
            <Link href="/action" passHref>
              <Button
                className={styles.card_button}
                color="#53C4AF"
                bgColor="#fff"
                fontWeight={600}
                border="1px solid"
                borderColor="#53C4AF"
                _hover={{ bg: "gray.200" }}
              >
                Вернуться к Акциям
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default More;
