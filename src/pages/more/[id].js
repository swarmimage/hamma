// pages/more/[id].js
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import { actionsItems } from "@/data/actionsData";
import { newsItems } from "@/data/newsData";
import More from '@/components/Actions/more'



const MorePage = () => {
  const router = useRouter();
  const { id, type } = router.query;

  if (!id) return null;

  const data = type === "news" ? newsItems : actionsItems;
  const item = data.find((el) => el.id === Number(id));

  return (
    <Layout>
      <More item={item} />
      <Footer />
    </Layout>
  );
};

export default MorePage;
