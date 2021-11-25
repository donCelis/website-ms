import { useEffect, useState } from "react";
import Link from "next/link";

import Header_page from "@components/header-page";
import Layout from "@components/layout";

import "@styles/activities.scss";

const Activities = ({ data }) => {
  const [activities, setActivities] = useState(data);

  const [categories, setCategories] = useState("");
  const [category, setCategory] = useState("travels");

  useEffect(() => {
    setCategories(Object.keys(activities));
    categories.length === 0 && setCategory("travels");
  }, []);

  const data_head = {
    title: "Actividades - Website - Ms",
    description: "Prueba realizada para Ilógica",
  };
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const conver_date = (date) => new Date(date).toDateString();

  return (
    <Layout {...data_head}>
      <Header_page title="Actividades" />
      <section className="activities">
        <div className="container">
          <h6>CATEGORÍAS</h6>
          <ul className="category">
            {categories.length > 0 &&
              categories.map((name, id) => (
                <li key={id} className="category-item">
                  <button
                    onClick={() => setCategory(name)}
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
            {activities[category].map(
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
                    <div className="card-body">
                      <strong className="card-title">
                        {capitalizeFirstLetter(title)}
                      </strong>
                      <p>{short_description}</p>
                      <Link href={`/activities/${id}`}>
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

export async function getServerSideProps(context) {
  try {
    const res = await fetch("http://localhost:3000/api/info");
    const data = await res.json();
    const data_activities = data.activities;

    if (!data_activities) {
      return {
        notFound: true,
      };
    }

    return {
      props: { data: data_activities },
    };
  } catch (error) {
    console.log(error);
  }
}
