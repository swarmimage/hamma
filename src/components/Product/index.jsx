// components/Product/index.js
import React from "react";
import { useRouter } from "next/router";
import MaterialCard, { storeItems } from "@/components/MaterialCard"; // берем массив отсюда
import { Box, Button, Image, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import { Stars } from "@/icons/stars";
import { Paymeicon } from "@/icons/payme-icon";
import { Clickicon } from "@/icons/click-icon";
import { Goldstar } from "@/icons/starr";
import ProductGallery from "./slider";
import { useCart } from "@/context/cart-context";
import Basket from "@/pages/basket";
import Link from "next/link";

const Goods = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();

  const product = storeItems.find((item) => item.id === Number(id));
  const handleAddToCart = (item) => addToCart(item);
  if (!product) {
    return <Text fontSize="xl" p={5}>Товар не найден 😢</Text>;
  }

  return (
    <Box className="container">
      <Box className={styles.goods_wrapper}>
        <Box className={styles.goods}>
          <Box className={styles.title_box}>
            <Text
              className={styles.bottom_articul}
              fontSize="14"
              fontWeight="400"
              color={"#828282"}
            >
              Главная / Дрели /{" "}
              <Text as="span" fontSize="14" fontWeight="400" color={"black"}>
                {product.title}
              </Text>
            </Text>
            <Text fontSize="36" fontWeight="bold">
              {product.title}
            </Text>
            <Box className={styles.title_bottom}>
              <Text
                className={styles.bottom_articul}
                fontSize="16"
                fontWeight="400"
                color={"#000000B8"}
              >
                Артикул:{" "}
                <Text as="span" fontSize="16" fontWeight="400" color={"black"}>
                  35174913
                </Text>
              </Text>
              <Text
                className={styles.bottom_articul}
                fontSize="16"
                fontWeight="400"
                color={"#000000B8"}
              >
                Отзывов:{" "}
                <Text as="span" fontSize="16" fontWeight="400" color={"black"}>
                  21
                </Text>
              </Text>
              <Stars />
            </Box>
          </Box>

          <Box className={styles.body}>
            <Box className={styles.body_left}>
              <ProductGallery images={[product.img, product.img, product.img, product.img]} />
            </Box>

            
            <Box className={styles.body_right}>
              <Box className={styles.body_card}>
                <Box className={styles.card_wrapper}>
                  <Box className={styles.card_header}>
                    <Text textDecoration="line-through" color="#B1B1B1">
                      {product.price}
                    </Text>
                    <Text fontWeight={300} fontSize={12} borderRadius={4} color="black" bgColor={"#F2271C"} padding={1}>
                      {product.discount}
                    </Text>
                  </Box>

                  <Box className={styles.card_delivery}>
                    <Text fontSize="26" color="600" fontWeight="bold">{product.totalprice} </Text>
                    <Text maxWidth={159} w={"100%"} fontSize="14" color="#fff" bgColor={"#13C29A"} fontWeight="400" padding={2} borderRadius={8}> Доставка: 3-5 июня </Text>
                  </Box>

                  <Box className={styles.card_buttons}>
                    <Button
                      color={"#fff"}
                      bgColor={"#53C4AF"}
                      fontWeight={600}
                      _hover={{ bg: "teal.600" }}
                      className={styles.basket}
                      alt="Добавить в корзину"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product); // передаём product
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Добавить в корзину
                    </Button>


                    <Button
                      as="a"
                      color="#53C4AF"
                      bgColor="#fff"
                      fontWeight={600}
                      border="1px solid"
                      borderColor="#53C4AF"
                      _hover={{ bg: "gray.200" }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product); // передаём product
                      }}
                    >

                      <Link href="/basket" passHref>

                        Купить сейчас
                      </Link>
                    </Button>
                  </Box>

                  <Box className={styles.card_text}>
                    <Text fontWeight={"500"} fontSize={16} color="#0D0D0D">
                      Безопасная оплата удобным способом
                    </Text>
                    <Text fontWeight={"500"} fontSize={16} color="#808080">
                      Оплачивайте картой или наличными
                    </Text>
                  </Box>

                  <Box className={styles.card_payment}>
                    <Image src="/Payme.svg" alt="Money" className={styles.money_img} />
                    <Image src="/Click.svg" alt="Money" className={styles.money_img} />
                    <Image src="/money.svg" alt="Money" className={styles.money_img} />
                  </Box>

                  <Box className={styles.card_tools}>
                    <Image src="/totaltools.svg" alt="Money" w={57} />
                    <Box className={styles.card_rate}>
                      <Text fontWeight={"600"} fontSize={18} color="#0D0D0D">
                        Total tools
                      </Text>
                      <Box className={styles.card_rate1}>
                        <Text className={styles.card_rates} fontSize="lg" mt={2}>
                          <Goldstar /> {product.rate}
                        </Text>
                        <Text fontWeight={"500"} fontSize={16} color="#808080">
                          ( 1079 оценок )
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>
        <Box>
          <MaterialCard />
        </Box>
      </Box>
    </Box>
  );
};

export default Goods; 