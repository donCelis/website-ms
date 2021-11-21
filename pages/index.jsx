import Layout from "@components/layout";
import Header from "@components/header";
import Gallery from "@components/gallery";
import "@styles/home.scss";

const Home = () => {
  const data_head = {
    title: "Home - Website - Ms",
    description: "Prueba realizada para Ilógica",
  };

  return (
    <>
      <Layout {...data_head}>
        <main className="home">
          <Header />
          <Gallery />
          {/* <section className="container">
            <div className="col-12 col-md-5">
              <article className="article">
                <div className="line"></div>
                <h2 className="article-title">
                  Lorem ipsum dolor <br /> sit amet
                </h2>
                <p className="article-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <button className="article-btn">
                  Lorem ipsum{" "}
                  <span>
                    <img
                      className="flecha"
                      src="./images/flecha.svg"
                      alt="Arrow"
                    />
                  </span>
                </button>
              </article>
            </div>
          </section>
          <section className="dots">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section> */}
        </main>
      </Layout>
    </>
  );
};

export default Home;
