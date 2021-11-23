import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ title, description, children }) => {
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
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, dicta.",
};

export default Layout;
