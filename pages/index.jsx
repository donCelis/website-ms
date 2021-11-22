import Layout from "@components/layout";
import { Slider } from "@components/slider";
import "@styles/home.scss";
import Features from "@components/features";

const Home = () => {
  const data_head = {
    title: "Home - Website - Ms",
    description: "Prueba realizada para Ilógica",
  };

  return (
    <Layout {...data_head}>
      <main className="home">
        <Slider />
      </main>
      <Features />
    </Layout>
  );
};

export default Home;
