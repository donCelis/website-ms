import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Ninjas = ({ users }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>All Ninjas</h1>
      {users.map(({ id, name }) => (
        <Link href={"/blog/" + id} key={id}>
          <a>
            <h3>{name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
