import { data_services } from "data";

const Item_service = ({ title, image, name_btn, mod = "" }) => {
  return (
    <aside className={"g-col-12 " + mod}>
      <article className="services-card">
        <img className="services-card-img" src={image} alt={title} />
        <h3 className="services-card-title">{title}</h3>
        <button className="button button-red button-sm">
          {name_btn}
          <span>
            <img className="flecha" src="./images/flecha.svg" alt="Arrow" />
          </span>
        </button>
      </article>
    </aside>
  );
};

const Services = () => {
  const last_element = data_services.length - 1;
  return (
    <section className="services">
      <div className="container">
        <div className="text">
          <div className="line"></div>
          <h3 className="services-title size-med">
            Lorem ipsum dolor sit amet
          </h3>
        </div>
        <section className="grid g-row-gap-3">
          {data_services.map((props, id) => (
            <Item_service
              key={id}
              {...props}
              mod={`${
                id !== last_element ? "g-col-md-6" : "g-col-md-12"
              } g-col-lg-4`}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Services;
