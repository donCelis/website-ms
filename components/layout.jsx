import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Website -  Ms",
  description: "por defecto",
};

export default Layout;
