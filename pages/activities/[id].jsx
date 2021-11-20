import Image from "next/image";
import Link from "next/link";
import Layout from "@components/layout";

const Single_activities = ({ data }) => {
  const { id, title, description, image } = data;
  const data_head = {
    title,
    description,
  };

  return (
    <Layout {...data_head}>
      <div>
        <h3>
          {id} - {title}
        </h3>
        <Image src={image} width={200} height={200} alt={title} />
        <p>{description}</p>
      </div>
      <Link href="/activities">
        <a>Go to activities</a>
      </Link>
    </Layout>
  );
};
export default Single_activities;

export async function getStaticPaths() {
  try {
    const req = await fetch("https://fakestoreapi.com/products");
    const res = await req.json();
    const paths = res.map(({ id }) => ({ params: { id: `${id}` } }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const req = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const res = await req.json();

    return {
      props: {
        data: res,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
