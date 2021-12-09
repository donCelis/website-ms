import Link from "next/link";

import Header_page from "components/header-page";
import Layout from "components/layout";

import "styles/activities.scss";

import { useFilter } from "hooks";

import { capitalize_firstLetter, conver_date } from "tools";

const Activities = ({ content }) => {
  const { data, category, categories, handleSetCategory } = useFilter(
    content,
    "travels"
  );
  const data_head = {
    title: "Actividades - Website - Ms",
    description: "Prueba realizada para Ilógica",
  };

  return (
    <Layout {...data_head}>
      <Header_page>
        <h2>Actividades</h2>
      </Header_page>
      <section className="activities">
        <div className="container">
          <h6>CATEGORÍAS</h6>
          <ul className="category">
            {categories.length > 0 &&
              categories.map((name, id) => (
                <li key={id} className="category-item">
                  <button
                    onClick={() => handleSetCategory(name)}
                    className={`button-filter button-filter-sm ${
                      name === category ? "active" : ""
                    }`}
                  >
                    {name}
                  </button>
                </li>
              ))}
          </ul>
          <section className="grid g-row-gap-3">
            {data[category].map(
              ({ id, image, title, date, short_description }) => (
                <aside
                  key={id}
                  className="g-col-12 g-col-sm-6 g-col-md-6 g-col-lg-4"
                >
                  <article className="card">
                    <figure className="wrapper-img">
                      <img className="img-fluid" src={image} alt={title} />
                    </figure>
                    <small className="card-border">
                      <time dateTime={date}>{conver_date(date)}</time> -{" "}
                      {category}
                    </small>
                    <div className="card-body card-body-md">
                      <strong className="card-title">
                        {capitalize_firstLetter(title)}
                      </strong>
                      <p>{short_description}</p>
                      <Link href={`/activities/single-activity`}>
                        <a className="card-link">
                          Leer más
                          <figure>
                            <img src="/images/path.svg" alt="arrow right" />
                          </figure>
                        </a>
                      </Link>
                    </div>
                  </article>
                </aside>
              )
            )}
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;

export async function getStaticProps(context) {
  try {
    const res = await fetch(
      "https://619d28e8131c600017088db9.mockapi.io/api/ilogica/data"
    );
    const data = await res.json();
    const data_activities = data[0].activities;

    if (!data_activities) {
      return {
        notFound: true,
      };
    }

    return {
      props: { content: data_activities },
    };
  } catch (error) {
    console.log(error);
  }
}
