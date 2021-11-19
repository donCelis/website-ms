import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import Link from "next/link";

export default function Home({ title, mesagge }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Prueba realizada para Ilógica" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {mesagge}
          <Link href="/timeline">
            <a>Next.js!</a>
          </Link>
        </h1>
        <Image src="/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  const req = await fetch("http://localhost:3000/api/hello");
  const res = await req.json();
  return res;
};
