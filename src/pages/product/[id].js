import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import { storeItems } from "@/components/MaterialCard"; // берем массив прямо из MaterialCard
import Goods from "@/components/Product/index.";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // ищем товар по id
  const product = storeItems.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <Layout>
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h2>Товар не найден</h2>
        </div>
        <Footer />
      </Layout>
    );
  }

  return (
    <Layout>
      <Goods product={product} />
      <Footer />
    </Layout>
  );
};

export default ProductPage;
