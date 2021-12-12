import Layout from "components/layout";
/* Components */
import Header_page from "components/header-page";
import Contact from "components/contact-form";

const Contact_page = () => {
  const data_head = {
    title: "Contacto - Website - Ms",
    description: "Prueba realizada para Ilógica",
  };
  return (
    <Layout {...data_head}>
      <Header_page>
        <h2>Contacto</h2>
      </Header_page>
      <Contact title=""/>
    </Layout>
  );
};

export default Contact_page;
