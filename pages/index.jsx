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
      <Services content={data.services} />
      <Partners />
      <To_action />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  try {
    const req = await fetch("http://localhost:3000/api/info");
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
