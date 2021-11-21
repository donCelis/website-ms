export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(({ id }) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { post: data },
  };
};

const Details = ({ post }) => {
  return (
    <div>
      <h1>{post.name}</h1>
      <p>{post.email}</p>
      <p>{post.website}</p>
      <p>{post.address.city}</p>
    </div>
  );
};

export default Details;
