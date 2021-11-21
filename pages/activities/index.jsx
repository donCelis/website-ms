import Image from "next/image";
import Link from "next/link";
import Layout from "@components/layout";

const Activities = ({ posts }) => {
  const data_head = {
    title: "Actividades - Website - Ms",
    description: "Prueba realizada para Ilógica",
  };
  return (
    <Layout {...data_head}>
      <section className="row">
        {posts.map(({ id, title, image, description }) => (
          <div className="col-4" key={id}>
            <article className="card">
              <Image
                className="card-img-top"
                src={image}
                width={300}
                height={300}
                alt={title}
                layout="fixed"
              />
              <section className="card-body">
                <p className="card-title">{title}</p>
                <p className="card-text">{description}</p>
                <Link href={`/activities/${id}`}>
                  <a className="btn btn-primary">Leer más</a>
                </Link>
              </section>
            </article>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Activities;

export const getStaticProps = async () => {
  try {
    const req = await fetch(`https://fakestoreapi.com/products`);
    const res = await req.json();

    return {
      props: {
        posts: res,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
