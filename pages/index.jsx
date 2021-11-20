import Layout from "@components/layout";
import Header from "@components/header";
import styles from "@styles/home.module.css";

export default function Home() {
  const data_head = {
    title: "Home - Website - Ms",
    description: "Prueba realizada para Ilógica",
  };

  return (
    <>
      <main className={styles.main}>
        <Layout {...data_head}>
          <Header />
          <section>
            <h1>Hola Mundo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              corrupti!
            </p>
          </section>
        </Layout>
      </main>
      <article>
        <h1>Hola Mundo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          unde!
        </p>
      </article>
    </>
  );
}
