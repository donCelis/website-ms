const People = ({ content }) => {
  return (
    <section className="about-people">
      <div className="container">
        <div className="line"></div>
        <h2>Lorem ipsum dolor sit amet</h2>
        <ul className="category">
          <li className="category-item">
            <button className="button-filter button-filter-sm active">
              Lorem
            </button>
          </li>
          <li className="category-item">
            <button className="button-filter button-filter-sm">ipsum</button>
          </li>
          <li className="category-item">
            <button className="button-filter button-filter-sm">amet</button>
          </li>
        </ul>
        <section className="grid g-row-gap-3 text-center">
          {content.map((person) => (
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
