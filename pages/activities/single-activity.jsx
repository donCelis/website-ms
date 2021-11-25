import Layout from "@components/layout";

const Single_activity = ({ data }) => {
  const data_head = {
    title: "Single page",
  };

  return (
    <Layout {...data_head}>
      <h1>Single</h1>
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
export default Single_activity;
