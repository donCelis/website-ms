import { useState, useEffect } from "react";

const People = ({ content }) => {
  const [people, setPeople] = useState(content);
  const [categories, setCategories] = useState("");
  const [category, setCategory] = useState("web-dev");

  useEffect(() => {
    setCategories(Object.keys(people));
    categories.length === 0 && setCategory("web-dev");
  }, []);

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
        <section className="grid g-row-gap-3 text-center">
          {people[category].map((person) => (
            <aside
              key={person.id}
              className="g-col-12 g-col-sm-6 g-col-md-6 g-col-lg-3"
            >
              <article className="card">
                <figure className="wrapper-img">
                  <img
                    className="img-fluid"
                    src={person.avatar}
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
