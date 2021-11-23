import Layout from "@components/layout";
import Slider from "@components/home/slider";
import Features from "@components/home/features";
import Services from "@components/home/services";
import Partners from "@components/home/partners";

import "@styles/home.scss";
import "@styles/components/button.scss";
import To_action from "@components/home/toaction";

const Home = ({ data }) => {
  const data_head = {
    title: "Home - Website - Ms",
    description: "Prueba realizada para Ilógica",
  };

  return (
    <Layout {...data_head}>
      <main className="home">
        <Slider />
      </main>
      <Features contentInfo={data.data_features} />
      <Services />
      <Partners />
      <To_action />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  try {
    const req = await fetch("/api/info");
    const res = await req.json();

    return {
      props: {
        data: res,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
