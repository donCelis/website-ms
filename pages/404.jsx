import Layout from "components/layout";
import Link from "next/link";

import { menu_links } from "data";

import "styles/page-404.scss";

const Page_404 = () => {
  const data_head = {
    title: "Página no encontrada - Website - Ms",
    description: "Prueba realizada para Ilógica",
  };
  return (
    <Layout {...data_head}>
      <section className="page-404 text-center">
        <div className="container">
          <section className="content">
            <figure>
              <img
                className="page-404-image"
                src="/images/image-404.svg"
                alt={data_head.title}
              />
            </figure>
            <h2>Página no encontrada</h2>
            <strong>¿Qué estás buscando?</strong>
          </section>
          <ul className="category category-pa-1">
            {menu_links.map(({ name, path }, key) => (
              <li key={key}>
                <Link href={path}>
                  <a className={`button button-red button-lg`}>
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Page_404;
