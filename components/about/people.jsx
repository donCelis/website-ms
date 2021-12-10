import Image from "next/image";
import { useFilter } from "hooks";
import { people } from "data";

const People = () => {
  const { data, category, categories, handleSetCategory } = useFilter(
    people,
    "web-dev"
  );

  return (
    <section className="about-people">
      <div className="container">
        <div className="line"></div>
        <h2>Lorem ipsum dolor sit amet</h2>
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
        <section className="grid g-row-gap-3 text-center">
          {data[category].map((person) => (
            <aside
              key={person.id}
              className="g-col-12 g-col-sm-6 g-col-md-6 g-col-lg-3"
            >
              <article className="card">
                <figure className="wrapper-img">
                  <Image
                    src={person.avatar}
                    layout="responsive"
                    objectFit="cover"
                    width={640}
                    height={480}
                    alt={person.name}
                  />
                </figure>
                <div className="card-body">
                  <p>{person.name}</p>
                  <small>{person.job}</small>
                </div>
              </article>
            </aside>
          ))}
        </section>
      </div>
    </section>
  );
};

export default People;
