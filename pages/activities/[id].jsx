import { useRouter } from "next/router";
import Layout from "components/layout";

const Activity = ({ data }) => {
  console.log(data);

  const data_head = {
    title: "Single page Id",
  };

  return (
    <Layout {...data_head}>
      <h1>test</h1>
      {/* <div>
        <h3>
          {id} - {title}
        </h3>
        <Image src={image} width={200} height={200} alt={title} />
        <p>{description}</p>
      </div>
      <Link href="/activities">
        <a>Go to activities</a>
      </Link> */}
    </Layout>
  );
};
export default Activity;

/* export const getStaticPaths = async () => {
  try {
    const req = await fetch(
      "https://619d28e8131c600017088db9.mockapi.io/api/ilogica/activities"
    );
    const res = await req.json();
    const data_activities = await res[0].travels;

    const paths = data_activities.map(({ id }) => ({
      params: { id: `${id}` },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}; */

/* export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`
    https://619d28e8131c600017088db9.mockapi.io/api/ilogica/activities/${params.id}/activity`);
    const data = await res.json();
    const data_activities = await data[0];

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
} */
