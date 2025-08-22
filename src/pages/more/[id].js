import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import { actionsItems } from "@/components/Actions"; 
import More from "@/components/Actions/more"; // <-- подключаем компонент

const MorePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const item = actionsItems.find((el) => el.id === Number(id));

  return (
    <Layout>
      <More item={item} />
      <Footer />
    </Layout>
  );
};

export default MorePage;