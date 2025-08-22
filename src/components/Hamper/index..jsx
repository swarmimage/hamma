import React, { useMemo, useState } from "react";
import { useCart } from "@/context/cart-context";
import {
  Box,
  Text,
  Image,
  Button,
  Flex,
  Divider,
  Checkbox,
  VStack,
  HStack,
} from "@chakra-ui/react";
import MaterialCard from "../MaterialCard";
import styles from "./styles.module.scss";

const parsePrice = (value) => {
  if (typeof value === "number") return value;
  if (!value) return 0;
  const num = String(value).replace(/[^\d.-]/g, "");
  const n = Number(num);
  return Number.isFinite(n) ? n : 0;
};

const fmt = (n) => (Number.isFinite(n) ? n.toLocaleString("ru-RU") : "0");

const Hamper = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const [selectedItems, setSelectedItems] = useState([]);

  const itemsCount = useMemo(
    () => cartItems.reduce((acc, it) => acc + (it.quantity || 1), 0),
    [cartItems]
  );

  const productsTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const qty = item.quantity || 1;
      const price = parsePrice(item.totalprice ?? item.price);
      return sum + qty * price;
    }, 0);
  }, [cartItems]);

  const discount = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const qty = item.quantity || 1;
      const oldP = parsePrice(item.oldPrice);
      const price = parsePrice(item.totalprice ?? item.price);
      const diff = Math.max(0, oldP - price);
      return sum + qty * diff;
    }, 0);
  }, [cartItems]);

  const deliveryCost = 0;
  const finalTotal = productsTotal + deliveryCost - discount;

  const toggleSelectAll = (checked) => {
    if (checked) {
      setSelectedItems(cartItems.map((it) => it.title));
    } else {
      setSelectedItems([]);
    }
  };

  const toggleItem = (title, checked) => {
    setSelectedItems((prev) =>
      checked ? [...prev, title] : prev.filter((t) => t !== title)
    );
  };

  const allSelected =
    selectedItems.length === cartItems.length && cartItems.length > 0;

  return (
    <Box>
      <Flex
        maxW="1400px"
        mx="auto"
        p="20px"
        gap="24px"
        align="flex-start"
        flexWrap="wrap"
        className={styles.cartContainer}
      >
        {/* Левая колонка — корзина */}
        <Box
          flex="1 1 0%"
          minW={0}
          w={{ base: "100%", md: "auto" }}
          className={styles.cartBlock}
        >
          <Text fontSize="28px" fontWeight="bold" mb="24px">
            Корзина
          </Text>

          <Flex
            border="1px solid"
            borderColor="gray.200"
            borderRadius="12px"
            overflow="hidden"
            bg="white"
            flexDirection="column"
            alignItems="center"
            justifyContent={cartItems.length === 0 ? "center" : "flex-start"}
            p="32px"
            gap="16px"
            minH="300px"
            w="100%"
          >
            {cartItems.length === 0 ? (
              <Box
                className={styles.korzina}
                w={{
                  base: "100%",     // до 768px — всегда на всю ширину
                  md: "100%",       // 768px–930px — тоже на всю ширину
                  lg: "800px"       // от 930px — фикс 800px
                }}
                maxW="100%"
                mx="auto"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                py={{ base: "24px", md: "40px" }}
                px={{ base: "12px", md: "16px" }}
                boxSizing="border-box"
                overflowX="hidden"
              >
                <Image
                  src="/kozina.svg"
                  alt="Логотип"
                  width={100}
                  height={100}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Box textAlign="center" w="100%">
                  <Text
                    fontSize={{ base: "18px", md: "24px" }}
                    fontWeight={700}
                    color="gray.800"
                    mb="4px"
                  >
                    В вашей корзине пока пусто
                  </Text>
                  <Text fontSize={{ base: "14px", md: "16px" }} color="gray.500">
                    Тут появятся товары, которые вы выберите
                  </Text>
                </Box>
              </Box>
            ) : (
              <Box w="100%">
                <Checkbox
                  mb="16px"
                  colorScheme="teal"
                  isChecked={allSelected}
                  onChange={(e) => toggleSelectAll(e.target.checked)}
                >
                  Всего: {itemsCount} шт
                </Checkbox>

                <VStack spacing="16px" align="stretch" w="100%">
                  {cartItems.map((item, index) => {
                    const price = parsePrice(item.totalprice ?? item.price);
                    const isChecked = selectedItems.includes(item.title);

                    return (
                      <Box
                        key={index}
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="12px"
                        overflow="hidden"
                        bg="white"
                        w="100%"
                      >
                        <Flex
                          p="16px"
                          align="center"
                          gap="16px"
                          w="100%"
                          flexWrap={{ base: "wrap", sm: "nowrap" }}
                        >
                          <Checkbox
                            colorScheme="teal"
                            isChecked={isChecked}
                            onChange={(e) => toggleItem(item.title, e.target.checked)}
                            flexShrink={0}
                          />

                          <Image
                            src={item.img}
                            alt={item.title}
                            boxSize={{ base: "64px", sm: "72px", md: "80px" }}
                            objectFit="contain"
                            borderRadius="8px"
                            flexShrink={0}
                          />

                          <Box flex="1 1 240px" minW={0} w={{ base: "100%", sm: "auto" }}>
                            <Text
                              fontWeight="semibold"
                              fontSize="16px"
                              noOfLines={2}
                              wordBreak="break-word"
                            >
                              {item.title}
                            </Text>

                            <HStack
                              spacing="8px"
                              mt="4px"
                              align="baseline"
                              flexWrap="wrap"
                              rowGap="2px"
                            >
                              {item.oldPrice ? (
                                <Text fontSize="14px" color="gray.400" as="s">
                                  {fmt(parsePrice(item.oldPrice))} сум
                                </Text>
                              ) : null}
                              <Text fontSize="16px" fontWeight="bold">
                                {fmt(price)} сум
                              </Text>
                            </HStack>

                            <HStack spacing="12px" mt="8px" flexWrap="wrap" rowGap="4px">
                              <Button
                                variant="link"
                                color="#48535B"
                                fontSize="14px"
                                p="0"
                                minW="auto"
                              >
                                В избранное
                              </Button>
                              <Button
                                variant="link"
                                color="red"
                                fontSize="14px"
                                p="0"
                                minW="auto"
                                onClick={() => removeFromCart(item.title)}
                              >
                                Удалить
                              </Button>
                            </HStack>
                          </Box>

                          {/* Кол-во */}
                          <Flex
                            gap="8px"
                            align="center"
                            ml={{ base: 0, md: "auto" }}
                            w={{ base: "100%", sm: "auto" }}
                            justify={{ base: "space-between", sm: "flex-start" }}
                            flexShrink={0}
                          >
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => decreaseQuantity(item.title)}
                              minW="36px"
                              flexShrink={0}
                            >
                              –
                            </Button>
                            <Text minW="2ch" textAlign="center">
                              {item.quantity || 1}
                            </Text>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => increaseQuantity(item.title)}
                              minW="36px"
                              flexShrink={0}
                            >
                              +
                            </Button>
                          </Flex>
                        </Flex>
                      </Box>
                    );
                  })}
                </VStack>
              </Box>
            )}
          </Flex>
        </Box>

        {/* Правая колонка — Итого */}
        <Box
          flex="0 0 auto"
          border="1px solid"
          borderColor="#dedede"
          borderRadius="12px"
          p="20px"
          bg="white"
          mt={{ base: 0, md: 65 }}
          className={styles.summary}
          alignSelf={{ base: "stretch", md: "flex-start" }}
        >
          <Text fontSize="20px" fontWeight="bold" mb="16px" noOfLines={1}>
            Итого
          </Text>

          <VStack spacing="8px" align="stretch" fontSize="14px" w="100%">
            <Flex justify="space-between" gap="12px">
              <Text>Товары, {itemsCount} шт</Text>
              <Text fontWeight="medium" textAlign="right">
                {fmt(productsTotal)} сум
              </Text>
            </Flex>
            <Flex justify="space-between" gap="12px">
              <Text>Сумма доставки</Text>
              <Text fontWeight="medium" textAlign="right">
                {fmt(deliveryCost)} сум
              </Text>
            </Flex>
            <Flex justify="space-between" color="#53C4AF" gap="12px">
              <Text>Скидка</Text>
              <Text textAlign="right">-{fmt(discount)} сум</Text>
            </Flex>
          </VStack>

          <Divider my="12px" />

          <Text fontSize="24px" fontWeight="bold" mb="16px" noOfLines={1}>
            {fmt(finalTotal)} сум
          </Text>

          <Button
            bg="#53C4AF"
            _hover={{ opacity: 0.9 }}
            color="white"
            w="100%"
            size="lg"
            borderRadius="8px"
            mb="12px"
          >
            Перейти к оформлению
          </Button>

          <Flex align="center" gap="8px" color="#48535B" fontSize="14px">
            <Box
              boxSize="20px"
              borderRadius="full"
              border="2px solid"
              color="#53C4AF"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
            >
              ✓
            </Box>
            <Text flex="1" minW={0}>Мы доставим эти товары бесплатно</Text>
          </Flex>
        </Box>
      </Flex>

      {/* Доп. карточки под контентом — не мешают адаптиву */}
      <MaterialCard />
    </Box>
  );
};

export default Hamper;
