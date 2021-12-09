import Link from "next/link";
import Header_page from "components/header-page";
import Layout from "components/layout";
import "styles/single-activity.scss";

import { capitalize_firstLetter, conver_date } from "tools";
import Slider_post from "components/activities/slider-post";

const Single_activity = ({ content }) => {
  const filter_category = Object.keys(content);
  console.log(filter_category);
  const filter_data = content.travels.filter((item, key) => key < 3);

  const data_head = {
    title: "Single page - Website - Ms",
  };

  return (
    <Layout {...data_head}>
      <Header_page mod="header-page-post">
        <Link href="/activities">
          <a className="back-to">
            <figure>
              <img src="/images/small-arrow-left.svg" alt="small-arrow-left" />
            </figure>
            Volver a Actividades
          </a>
        </Link>
      </Header_page>
      <main className="single-activity-post">
        <div className="grid">
          <aside className="g-col-12 g-col-md-3 g-col-lg-3">
            <section className="share-post">
              <h6>Compartir</h6>
              <ul>
                <li className="d-flex align-items-center">
                  <a href="#">
                    <img
                      src="/images/socials-icons/fb-red.svg"
                      alt="Facebook"
                    />
                    Facebook
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#">
                    <img src="/images/socials-icons/tw-red.svg" alt="Twitter" />
                    Twitter
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#">
                    <img
                      src="/images/socials-icons/what-red.svg"
                      alt="Whatsapp"
                    />
                    Whatsapp
                  </a>
                </li>
              </ul>
            </section>
          </aside>
          <section className="g-col-12 g-col-md-9 g-col-lg-9">
            <article className="post">
              <header className="post-header">
                <h2>Lorem ipsum dolor sit</h2>
                <figure className="mb-4">
                  <img
                    className="img-fluid"
                    src="/images/single-post/single-article.jpg"
                    alt=""
                  />
                </figure>
                <small>28 nov 2018 · 1 min de lectura</small>
              </header>
              <section className="post-body">
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful.
                </p>
                <p>
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally circumstances occur in which toil and pain can
                  procure him some great pleasure.
                </p>
                <p>
                  To take a trivial example, which of us ever undertakes
                  laborious physical exercise, except to obtain some advantage
                  from it? But who has any right to find fault with a man who
                  chooses to enjoy a pleasure that has no annoying consequences,
                  or one who avoids a pain that produces no resultant pleasure?
                </p>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame.
                </p>
                <div className="quote">
                  <img
                    className="quote-left"
                    src="/images/icons/quote-left.svg"
                    alt="quote start"
                  />
                  <q>
                    I love you the more in that I believe you had liked me for
                    my own sake and for nothing else.
                  </q>
                  <img
                    className="quote-right"
                    src="/images/icons/quote-right.svg"
                    alt="quote end"
                  />
                </div>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame.
                </p>
                <Slider_post />
              </section>
            </article>
          </section>
        </div>
      </main>
      <section className="activities-comp">
        <div className="container">
          <div className="mb-5 info d-flex align-items-center justify-content-between">
            <article>
              <div className="line mb-3"></div>
              <h3 className="m-0">Lorem ipsum</h3>
            </article>
            <a href="#" className="link-post">
              Lorem ipsum
              <figure>
                <img src="/images/path.svg" alt="arrow-rigth" />
              </figure>
            </a>
          </div>
          <section className="grid g-row-gap-3">
            {filter_data.map(
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
                      {filter_category[0]}
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
export default Single_activity;

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
