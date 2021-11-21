import Head from "next/head";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

Layout.defaultProps = {
  title: "Website -  Ms",
  description: "por defecto"
}

export default Layout;
