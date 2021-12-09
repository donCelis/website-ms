import Contact from "components/contact-form";
import Layout from "components/layout";

const Contact_page = () => {
  const data_head = {
    title: "Contacto - Website - Ms",
    description: "Prueba realizada para Ilógica",
  };
  return (
    <Layout {...data_head}>
      <Contact />
    </Layout>
  );
};

export default Contact_page;
