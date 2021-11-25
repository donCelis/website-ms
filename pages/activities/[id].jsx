import Layout from "@components/layout";

const Activity = ({ data }) => {
  const data_head = {
    title:"Single page",
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
    const req = await fetch("http://localhost:3000/api/info");
    const res = await req.json();
    const data_activities = await res.activities.travels;

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
};

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`
    http://localhost:3000/api/info/${params.id}`);
    const data = await res.json();
    const data_activities = await data.activities;

    if (!data_activities) {
      return {
        notFound: true,
      };
    }

    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
}
 */