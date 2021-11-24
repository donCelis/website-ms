import Layout from "@components/layout";
/* Components */
import Slider from "@components/home/slider";
import Features from "@components/home/features";
import Services from "@components/home/services";
import Partners from "@components/home/partners";
import To_action from "@components/home/toaction";

/* Styles */
import "@styles/home.scss";

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
      <Features />
      <Services />
      <Partners />
      <To_action />
    </Layout>
  );
};

export default Home;
