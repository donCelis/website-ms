import Layout from "components/layout";
import Header_page from "components/header-page";
import Description from "components/about/description";
import People from "components/about/people";
import Contact from "components/contact-form";

import "styles/about.scss";

const About = ({ data }) => {
  const data_head = {
    title: "Nosotros - Website - Ms",
    description: "Prueba realizada para Ilógica",
  };
  return (
    <Layout {...data_head}>
      <Header_page>
        <h2>Nosotros</h2>
      </Header_page>
      <section className="paragraphs">
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
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
            </article>
          </div>
        </section>
      </section>
      <Description />
      <People content={data} />
      <Contact />
    </Layout>
  );
};

export default About;

export async function getStaticProps(context) {
  const res = await fetch(
    "https://619d28e8131c600017088db9.mockapi.io/api/ilogica/data"
  );
  const data = await res.json();
  const data_people = data[0].people;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: data_people },
  };
}
