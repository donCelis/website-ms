import Layout from "@components/layout";
import "@styles/about.scss";

const About = () => {
  const data_head = {
    title: "Nosotros - Website - Ms",
    description: "Prueba realizada para Ilógica",
  };
  return (
    <Layout {...data_head}>
      <section className="header-page">
        <div className="container">
          <h2>Nosotros</h2>
        </div>
      </section>
      <section className="container py-5">
        <div className="grid">
          <article className="g-col-12 g-col-md-10 g-col-lg-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
          </article>
        </div>
      </section>
      <section className="about-description">
        <div className="container">
          <section className="grid align-items-center">
            <aside className="g-col-12 g-col-sm-12 g-col-md-6">
              <article className="about-description-text">
                <div className="line"></div>
                <h2>
                  ¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem.
                </p>
              </article>
            </aside>
            <aside className="g-col-12 g-col-sm-12 g-col-md-5 g-start-8">
              <figure className="about-description-photo">
                <img
                  src="/images/about/boat-daylight.jpg"
                  alt="boat-daylight"
                  className="img-fluid"
                />
              </figure>
            </aside>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default About;
